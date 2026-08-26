import { Scheme, UserEligibilityProfile, EligibilityResult } from '../types';

export function evaluateSchemeEligibility(scheme: Scheme, profile: UserEligibilityProfile): EligibilityResult {
  const matchedCriteria: string[] = [];
  const missingCriteria: string[] = [];
  let score = 100;
  let hardIneligible = false;

  const elig = scheme.eligibility;
  const genderReq = elig.gender ? elig.gender.toLowerCase() : '';
  const ageReq = elig.age_limit ? elig.age_limit.toLowerCase() : '';
  const incomeReq = elig.income_limit ? elig.income_limit.toLowerCase() : '';
  const occReq = elig.occupation ? elig.occupation.toLowerCase() : '';
  const desc = (scheme.short_description + ' ' + scheme.full_description).toLowerCase();

  // 1. Gender check
  if (genderReq.includes('female') && !genderReq.includes('all')) {
    if (profile.gender === 'Male') {
      hardIneligible = true;
      score -= 50;
      missingCriteria.push("Scheme is strictly reserved for female applicants");
    } else {
      matchedCriteria.push("Gender matches requirement (Female)");
    }
  } else if (genderReq.includes('male') && !genderReq.includes('female') && !genderReq.includes('all')) {
    if (profile.gender === 'Female') {
      hardIneligible = true;
      score -= 50;
      missingCriteria.push("Scheme is reserved for male applicants");
    } else {
      matchedCriteria.push("Gender matches requirement");
    }
  } else {
    matchedCriteria.push("Open to all genders");
  }

  // 2. Girl Child Check (e.g. Sukanya Samriddhi, Pragati)
  if (scheme.id === 'sukanya-samriddhi' || scheme.id === 'bbbp' || scheme.id === 'beti-bachao-cbse-udaan') {
    if (!profile.isGirlChildInFamily && profile.gender !== 'Female') {
      score -= 40;
      missingCriteria.push("Requires a girl child (under 10 yrs) in the family");
    } else {
      matchedCriteria.push("Family has girl child / Female applicant");
    }
  }

  // 3. Age Check
  if (ageReq.includes('60') && (ageReq.includes('above') || ageReq.includes('+'))) {
    if (profile.age < 60) {
      hardIneligible = true;
      score -= 40;
      missingCriteria.push(`Senior Citizen scheme requires age 60+ (Current age: ${profile.age})`);
    } else {
      matchedCriteria.push("Age requirement met (Senior Citizen 60+)");
    }
  } else if (ageReq.includes('18 to 70') || ageReq.includes('18-70')) {
    if (profile.age < 18 || profile.age > 70) {
      hardIneligible = true;
      score -= 30;
      missingCriteria.push(`Requires age between 18 and 70 (Your age: ${profile.age})`);
    } else {
      matchedCriteria.push("Age within 18-70 window");
    }
  } else if (ageReq.includes('18 to 40') || ageReq.includes('18-40')) {
    if (profile.age < 18 || profile.age > 40) {
      score -= 35;
      missingCriteria.push(`Requires entry age between 18 and 40 (Your age: ${profile.age})`);
    } else {
      matchedCriteria.push("Age within 18-40 window");
    }
  } else if (ageReq.includes('21 to 24') || ageReq.includes('21-24')) {
    if (profile.age < 21 || profile.age > 24) {
      score -= 35;
      missingCriteria.push(`Requires age between 21 and 24 (Your age: ${profile.age})`);
    } else {
      matchedCriteria.push("Age within 21-24 window");
    }
  } else if (ageReq.includes('15 to 35') || ageReq.includes('15-35')) {
    if (profile.age < 15 || profile.age > 35) {
      score -= 30;
      missingCriteria.push(`Youth scheme requires age 15 to 35 (Your age: ${profile.age})`);
    } else {
      matchedCriteria.push("Youth age eligibility met (15-35)");
    }
  } else if (ageReq.includes('18 years and above') || ageReq.includes('18+')) {
    if (profile.age < 18) {
      hardIneligible = true;
      score -= 40;
      missingCriteria.push("Applicant must be an adult (18+ years)");
    } else {
      matchedCriteria.push("Adult age criteria met (18+)");
    }
  }

  // 4. Income Limit Check
  if (incomeReq.includes('bpl') || desc.includes('bpl') || desc.includes('poverty line')) {
    if (!profile.isBpl && profile.annualIncomeLakhs > 1.2) {
      score -= 25;
      missingCriteria.push("Prioritises Below Poverty Line (BPL) / Low income households");
    } else {
      matchedCriteria.push("BPL / Low Income criteria satisfied");
    }
  }

  // Check specific lakh caps e.g. 2.5 lakh, 8 lakh, 1.5 lakh, 3.5 lakh, 4.5 lakh
  let capLakhs = 0;
  if (incomeReq.includes('2.5 lakh')) capLakhs = 2.5;
  else if (incomeReq.includes('1.5 lakh')) capLakhs = 1.5;
  else if (incomeReq.includes('1 lakh')) capLakhs = 1.0;
  else if (incomeReq.includes('3.5 lakh')) capLakhs = 3.5;
  else if (incomeReq.includes('4.5 lakh')) capLakhs = 4.5;
  else if (incomeReq.includes('8 lakh')) capLakhs = 8.0;

  if (capLakhs > 0) {
    if (profile.annualIncomeLakhs > capLakhs) {
      score -= 30;
      missingCriteria.push(`Income exceeds cap of Rs ${capLakhs} Lakhs/year (Your income: Rs ${profile.annualIncomeLakhs} Lakhs)`);
    } else {
      matchedCriteria.push(`Income is within prescribed cap of Rs ${capLakhs} Lakhs`);
    }
  }

  // 5. Occupation & Target Group Checks
  const userOcc = profile.occupation.toLowerCase();
  if (scheme.category === 'Agriculture' || occReq.includes('farmer') || desc.includes('farmer')) {
    if (userOcc.includes('farm') || userOcc.includes('agri')) {
      matchedCriteria.push("Engaged in agriculture / farming");
    } else if (scheme.id === 'pm-kisan' || scheme.id === 'kisan-credit-card') {
      score -= 30;
      missingCriteria.push("Requires landholding farmer status");
    }
  }

  if (scheme.category === 'Students' || occReq.includes('student') || desc.includes('student')) {
    if (userOcc.includes('student') || profile.age <= 24) {
      matchedCriteria.push("Student / Educational aspirant profile");
    } else {
      score -= 25;
      missingCriteria.push("Targeted primarily at enrolled students / youth learners");
    }
  }

  if (occReq.includes('artisan') || desc.includes('artisan') || scheme.id === 'pm-vishwakarma') {
    if (userOcc.includes('artisan') || userOcc.includes('craft') || userOcc.includes('art')) {
      matchedCriteria.push("Traditional artisan / craftsperson profile");
    } else {
      score -= 20;
      missingCriteria.push("Requires engagement in traditional artisan trades");
    }
  }

  if (occReq.includes('street vendor') || scheme.id === 'pm-svanidhi') {
    if (userOcc.includes('vendor') || userOcc.includes('street')) {
      matchedCriteria.push("Street vendor / urban vendor profile");
    } else {
      score -= 25;
      missingCriteria.push("Specific to registered urban street vendors");
    }
  }

  if (occReq.includes('unorganised worker') || scheme.id === 'e-shram' || scheme.id === 'apy') {
    if (userOcc.includes('unorganised') || userOcc.includes('labor') || userOcc.includes('worker') || userOcc.includes('driver')) {
      matchedCriteria.push("Unorganised sector worker");
    } else {
      matchedCriteria.push("Open to informal/unorganised workers");
    }
  }

  // 6. Social Category Checks (SC/ST/OBC/Minority/EBC/DNT)
  if (scheme.id.includes('-sc') || occReq.includes('sc ') || desc.includes('scheduled caste')) {
    if (profile.socialCategory !== 'SC') {
      score -= 35;
      missingCriteria.push("Requires Scheduled Caste (SC) category certificate");
    } else {
      matchedCriteria.push("SC category confirmed");
    }
  }

  if (scheme.id.includes('-st') || occReq.includes('st ') || desc.includes('scheduled tribe')) {
    if (profile.socialCategory !== 'ST') {
      score -= 35;
      missingCriteria.push("Requires Scheduled Tribe (ST) category certificate");
    } else {
      matchedCriteria.push("ST category confirmed");
    }
  }

  if (scheme.id.includes('minority') || desc.includes('minority community')) {
    if (profile.socialCategory !== 'Minority') {
      score -= 30;
      missingCriteria.push("Requires notified Minority Community status");
    } else {
      matchedCriteria.push("Minority category confirmed");
    }
  }

  // 7. Special Conditions
  if (scheme.id === 'pmmvy' || scheme.id === 'jsy') {
    if (!profile.isPregnantOrLactating && profile.gender === 'Female') {
      score -= 30;
      missingCriteria.push("Maternity benefit requires pregnant or lactating mother status");
    }
  }

  if (scheme.id === 'ignwps') {
    if (!profile.isWidow) {
      score -= 40;
      missingCriteria.push("Requires widow status");
    } else {
      matchedCriteria.push("Widow pension criteria met");
    }
  }

  if (scheme.id.includes('disability') || scheme.id === 'igndps' || scheme.id === 'udid' || scheme.id === 'aicte-saksham') {
    if (!profile.isDisabled) {
      score -= 35;
      missingCriteria.push("Requires minimum 40% certified disability (UDID)");
    } else {
      matchedCriteria.push("Person with Disability (PwD) criteria met");
    }
  }

  if (scheme.category === 'Housing' && (scheme.id === 'pmay-gramin' || scheme.id === 'pmay-urban')) {
    if (profile.hasHouse) {
      score -= 25;
      missingCriteria.push("PMAY housing grant prioritises houseless or kutcha house owners");
    } else {
      matchedCriteria.push("Houseless / Kutcha house criteria met");
    }
  }

  // Ensure score bounds
  score = Math.max(10, Math.min(100, score));

  let status: 'eligible' | 'possibly_eligible' | 'not_eligible' = 'eligible';
  if (hardIneligible || score < 50) {
    status = 'not_eligible';
  } else if (score < 80 || missingCriteria.length > 0) {
    status = 'possibly_eligible';
  }

  let primaryReason = "";
  if (status === 'eligible') {
    primaryReason = "You meet all core age, income, category, and demographic conditions for this scheme.";
  } else if (status === 'possibly_eligible') {
    primaryReason = missingCriteria.length > 0 
      ? `Partially matches. Verify: ${missingCriteria[0]}`
      : "Subject to state-wise quota, local survey or documentary verification.";
  } else {
    primaryReason = missingCriteria.length > 0 ? missingCriteria[0] : "Does not meet target demographic or income eligibility parameters.";
  }

  return {
    scheme,
    matchScore: score,
    status,
    primaryReason,
    matchedCriteria,
    missingCriteria,
  };
}
