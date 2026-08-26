import { Scheme } from '../types';

export const SCHEMES_DATA: Scheme[] = [
  {
    id: "pm-kisan",
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    short_description: "Direct income support of Rs 6,000/year to landholding farmer families.",
    full_description: "Central sector scheme launched 1 Dec 2018, operational from Feb 2019. Provides income support to all landholding farmer families to help meet agricultural and household expenses. Fully funded by the Government of India.",
    category: "Agriculture",
    ministry: "Ministry of Agriculture and Farmers Welfare",
    benefits: [
      "Rs 6,000 per year paid in 3 equal instalments of Rs 2,000 (Apr-Jul, Aug-Nov, Dec-Mar)",
      "Direct Benefit Transfer (DBT) to Aadhaar-linked bank account"
    ],
    eligibility: {
      age_limit: "No specific age limit for the landholder",
      income_limit: "Not income-based; based on land ownership records",
      gender: "All genders",
      occupation: "Landholding farmer families (husband, wife, minor children) with cultivable land in their name",
      state: "All India",
      exclusions: "Institutional landholders; constitutional post holders; serving/retired govt employees (except Class IV/Group D); pensioners with pension >= Rs 10,000/month; income-tax payers; professionals (doctors, engineers, CAs, lawyers)"
    },
    required_documents: [
      "Aadhaar card",
      "Land ownership records / khatauni",
      "Bank passbook (Aadhaar-linked)",
      "Farmer ID (mandatory in several states including UP, Rajasthan, Maharashtra)"
    ],
    application_steps: [
      "Register on pmkisan.gov.in under Farmers' Corner or visit nearest CSC",
      "Complete Aadhaar e-KYC (OTP-based online or biometric at CSC)",
      "Submit land records for verification by state land record system",
      "Track status via Beneficiary Status on the portal"
    ],
    keywords: ["farmer", "income support", "agriculture", "landholder", "DBT"],
    official_website: "https://pmkisan.gov.in",
    apply_link: "https://pmkisan.gov.in/RegistrationFormNew.aspx",
    helpline: "155261 / 011-24300606 / pmkisan-ict@gov.in",
    last_verified_date: "2026-07-30",
    source_url: "https://pmkisan.gov.in",
    notes: "Instalment amount (Rs 2,000 x 3) confirmed stable through the 23rd instalment (June 2026); re-verify before submission as budget announcements can change this."
  },
  {
    id: "pmfby",
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    short_description: "Crop insurance scheme protecting farmers against crop loss from natural calamities.",
    full_description: "Launched in 2016, PMFBY provides comprehensive insurance cover against crop failure, helping stabilise farmer income. Premium paid by farmers is heavily subsidised, with the balance shared by central and state governments.",
    category: "Agriculture",
    ministry: "Ministry of Agriculture and Farmers Welfare",
    benefits: [
      "Farmer premium capped at 2% of sum insured for Kharif crops, 1.5% for Rabi crops, 5% for commercial/horticultural crops",
      "Full insurance claim against yield loss due to natural calamities, pests and diseases",
      "No upper limit on government subsidy"
    ],
    eligibility: {
      age_limit: "No age limit",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Farmers (loanee and non-loanee) growing notified crops in notified areas",
      state: "Voluntary; state must notify the scheme for the season"
    },
    required_documents: [
      "Aadhaar card",
      "Land ownership/tenancy documents",
      "Bank account details",
      "Sowing certificate"
    ],
    application_steps: [
      "Apply through bank (mandatory for loanee farmers) or on the National Crop Insurance Portal",
      "Select crop and area",
      "Pay farmer share of premium before cut-off date",
      "Report crop loss within 72 hours of the event for claim"
    ],
    keywords: ["crop insurance", "farmer", "yield loss", "premium subsidy"],
    official_website: "https://pmfby.gov.in",
    apply_link: "https://pmfby.gov.in",
    helpline: "14447",
    last_verified_date: "2026-07-30",
    source_url: "https://pmfby.gov.in",
    notes: "Premium slabs are long-standing scheme parameters; confirm current season notification before use."
  },
  {
    id: "kisan-credit-card",
    name: "Kisan Credit Card (KCC)",
    short_description: "Short-term credit for farmers' cultivation and allied needs at subsidised interest.",
    full_description: "KCC gives farmers timely access to credit for crop production, post-harvest expenses, and allied activities like animal husbandry and fisheries, at concessional interest rates through banks.",
    category: "Agriculture",
    ministry: "Ministry of Agriculture and Farmers Welfare / Department of Financial Services",
    benefits: [
      "Credit up to Rs 3 lakh at 7% interest with a further 3% interest subvention for prompt repayment (effective ~4%)",
      "Covers crop loans, working capital for allied activities, and personal accident insurance cover"
    ],
    eligibility: {
      age_limit: "18 to 75 years (co-applicant required if above 60)",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Farmers, tenant farmers, sharecroppers, oral lessees, SHGs and joint liability groups engaged in agriculture/allied activities",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Land records",
      "Passport-size photograph",
      "Bank account details"
    ],
    application_steps: [
      "Apply at nearest bank branch or via the bank's net-banking/PM-KISAN portal (auto KCC option for PM-KISAN beneficiaries)",
      "Submit land and identity documents",
      "Bank sanctions credit limit based on cropping pattern"
    ],
    keywords: ["credit", "loan", "farmer", "interest subvention"],
    official_website: "https://www.myscheme.gov.in/schemes/kcc",
    apply_link: "https://www.myscheme.gov.in/schemes/kcc",
    helpline: "1800-180-1551",
    last_verified_date: "2026-07-30",
    source_url: "https://www.myscheme.gov.in/schemes/kcc",
    notes: "Interest subvention rates are revised periodically by RBI/NABARD; verify current rate."
  },
  {
    id: "soil-health-card",
    name: "Soil Health Card Scheme",
    short_description: "Free soil testing and nutrient recommendation for farmers every two years.",
    full_description: "Provides farmers with a Soil Health Card containing crop-wise recommendations for nutrients and fertilisers, helping optimise input use and improve productivity.",
    category: "Agriculture",
    ministry: "Ministry of Agriculture and Farmers Welfare",
    benefits: [
      "Free soil testing",
      "Personalised fertiliser and nutrient recommendations",
      "Reduced input cost through balanced fertiliser use"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "All landholding farmers",
      state: "All India"
    },
    required_documents: [
      "Land ownership document",
      "Aadhaar card"
    ],
    application_steps: [
      "Contact nearest Krishi Vigyan Kendra / soil testing lab",
      "Provide soil samples from the field",
      "Receive Soil Health Card with recommendations within a few weeks"
    ],
    keywords: ["soil testing", "fertiliser", "farmer", "productivity"],
    official_website: "https://soilhealth.dac.gov.in",
    apply_link: "https://soilhealth.dac.gov.in",
    helpline: "1800-180-1551",
    last_verified_date: "2026-07-30",
    source_url: "https://soilhealth.dac.gov.in"
  },
  {
    id: "pm-ksy",
    name: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
    short_description: "Irrigation scheme aiming 'Har Khet Ko Pani' (water to every field) and micro-irrigation support.",
    full_description: "Umbrella scheme integrating irrigation-related programmes to expand cultivable area under assured irrigation, improve water-use efficiency, and promote precision irrigation like drip and sprinkler systems.",
    category: "Agriculture",
    ministry: "Ministry of Jal Shakti / Ministry of Agriculture and Farmers Welfare",
    benefits: [
      "Subsidy on drip and sprinkler irrigation equipment (typically 55% for small/marginal farmers, 45% for others, varies by state)",
      "Support for watershed development and last-mile irrigation infrastructure"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Not applicable, higher subsidy for small/marginal farmers",
      gender: "All genders",
      occupation: "Farmers, farmer groups, cooperatives",
      state: "All India, subsidy rates vary by state"
    },
    required_documents: [
      "Land ownership document",
      "Aadhaar card",
      "Bank account details",
      "Water source proof"
    ],
    application_steps: [
      "Apply through state agriculture/horticulture department portal",
      "Site verification by department officials",
      "Subsidy credited after installation of irrigation system"
    ],
    keywords: ["irrigation", "drip irrigation", "water", "farmer subsidy"],
    official_website: "https://pmksy.gov.in",
    apply_link: "https://pmksy.gov.in",
    helpline: "Refer to state agriculture department",
    last_verified_date: "2026-07-30",
    source_url: "https://pmksy.gov.in",
    notes: "Subsidy percentages vary significantly by state — verify with the relevant state horticulture mission."
  },
  {
    id: "e-nam",
    name: "National Agriculture Market (e-NAM)",
    short_description: "Online trading platform connecting existing mandis to give farmers better price discovery.",
    full_description: "A pan-India electronic trading portal that networks existing Agricultural Produce Market Committee (APMC) mandis, allowing farmers to sell produce online to buyers across the country and access transparent price discovery.",
    category: "Agriculture",
    ministry: "Ministry of Agriculture and Farmers Welfare",
    benefits: [
      "Access to a wider buyer base and competitive price discovery",
      "Reduced dependence on local middlemen",
      "Online payment directly to farmer's bank account"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Farmers, traders, FPOs registered with participating mandis",
      state: "States/mandis integrated with e-NAM"
    },
    required_documents: [
      "Aadhaar card",
      "Bank account details",
      "Land/produce records"
    ],
    application_steps: [
      "Register on enam.gov.in or through the local mandi e-NAM counter",
      "Get produce quality-assayed at the mandi",
      "Bid/sell online and receive payment via bank transfer"
    ],
    keywords: ["mandi", "agri market", "price discovery", "online trading"],
    official_website: "https://enam.gov.in",
    apply_link: "https://enam.gov.in",
    helpline: "1800-270-0224",
    last_verified_date: "2026-07-30",
    source_url: "https://enam.gov.in"
  },
  {
    id: "ab-pmjay",
    name: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)",
    short_description: "Free cashless health cover of Rs 5 lakh/family/year for hospitalisation.",
    full_description: "World's largest government-funded health assurance scheme, launched 23 Sept 2018, providing cashless and paperless hospitalisation coverage at empanelled public and private hospitals for secondary and tertiary care, with no restriction on family size, age or gender for eligible families.",
    category: "Health",
    ministry: "Ministry of Health and Family Welfare / National Health Authority",
    benefits: [
      "Cashless hospitalisation cover up to Rs 5 lakh per family per year",
      "Covers pre-existing diseases from day one, no waiting period",
      "3 days pre-hospitalisation and 15 days post-hospitalisation expenses covered",
      "Additional Rs 5 lakh top-up cover for all citizens aged 70+ under Ayushman Vay Vandana (universal, regardless of income)"
    ],
    eligibility: {
      age_limit: "No age limit for SECC-based beneficiaries; universal for age 70+",
      income_limit: "Determined by SECC-2011 deprivation/occupational criteria, not a fixed income figure",
      gender: "All genders",
      occupation: "Families in SECC-2011 deprivation categories (kutcha housing, no adult earning member, disabled member, manual scavenger families, etc.) and defined urban worker categories",
      state: "All India (except states that opted out, verify current list)"
    },
    required_documents: [
      "Aadhaar card",
      "Ration card / SECC family ID",
      "Mobile number for e-KYC"
    ],
    application_steps: [
      "Check eligibility on the PM-JAY portal or Ayushman App using Aadhaar",
      "Complete e-KYC at Common Service Centre or empanelled hospital",
      "Download/collect the Ayushman Card",
      "Present the card at any empanelled hospital for cashless treatment"
    ],
    keywords: ["health insurance", "hospitalisation", "cashless treatment", "Ayushman card"],
    official_website: "https://pmjay.gov.in",
    apply_link: "https://beneficiary.nha.gov.in",
    helpline: "14555",
    last_verified_date: "2026-07-30",
    source_url: "https://pmjay.gov.in",
    notes: "70+ universal cover confirmed current as of mid-2026; some states with existing state health schemes have not fully rolled it out — verify state-specific status."
  },
  {
    id: "pmmvy",
    name: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
    short_description: "Cash incentive for pregnant and lactating women to support wage loss and nutrition.",
    full_description: "Maternity benefit programme providing partial compensation for wage loss during pregnancy and after childbirth, encouraging women to follow adequate nutrition and health practices.",
    category: "Health",
    ministry: "Ministry of Women and Child Development",
    benefits: [
      "Rs 5,000 in two instalments for the first living child (and additional Rs 6,000 under PMMVY 2.0 for the second child if a girl)",
      "Cash incentive paid via DBT to eligible women"
    ],
    eligibility: {
      age_limit: "19 years and above",
      income_limit: "Not universally income-capped; excludes women already covered under similar central schemes (govt employees etc.)",
      gender: "Female",
      occupation: "Pregnant and lactating women, for first live birth",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Bank/post office account passbook",
      "Mother-Child Protection (MCP) card",
      "Marriage certificate (if available)"
    ],
    application_steps: [
      "Register at Anganwadi Centre / approved health facility or on the PMMVY portal/app",
      "Submit Form 1-A after early registration of pregnancy",
      "Submit Form 1-B after 6 months and Form 1-C after child birth and vaccination",
      "Instalments credited via DBT after each verified milestone"
    ],
    keywords: ["maternity benefit", "pregnant women", "nutrition", "cash transfer"],
    official_website: "https://pmmvy.wcd.gov.in",
    apply_link: "https://pmmvy.wcd.gov.in",
    helpline: "181",
    last_verified_date: "2026-07-30",
    source_url: "https://pmmvy.wcd.gov.in"
  },
  {
    id: "jsy",
    name: "Janani Suraksha Yojana (JSY)",
    short_description: "Cash assistance to promote institutional delivery and reduce maternal/infant mortality.",
    full_description: "A safe motherhood intervention under the National Health Mission that provides cash assistance to pregnant women for delivery in a government or accredited private health facility, with higher assistance for BPL/SC/ST women.",
    category: "Health",
    ministry: "Ministry of Health and Family Welfare",
    benefits: [
      "Cash assistance for institutional delivery (amount varies by rural/urban and state; typically Rs 700-1,400 for the mother plus ASHA incentive)",
      "Free delivery including caesarean, free drugs, diet and transport under Janani Shishu Suraksha Karyakram"
    ],
    eligibility: {
      age_limit: "19 years and above (with some flexibility for BPL beneficiaries)",
      income_limit: "BPL and SC/ST women prioritised; all pregnant women eligible in Low Performing States",
      gender: "Female",
      occupation: "Pregnant women opting for institutional delivery",
      state: "All India, higher benefit in Low Performing States (mainly EAG states and NE states)"
    },
    required_documents: [
      "Aadhaar card",
      "BPL card (if applicable)",
      "MCP card",
      "Bank account details"
    ],
    application_steps: [
      "Register pregnancy with local ASHA worker / Anganwadi",
      "Attend at least 3 antenatal check-ups",
      "Deliver at a government or accredited facility",
      "Receive cash assistance via DBT/cheque after delivery"
    ],
    keywords: ["maternal health", "institutional delivery", "ASHA", "safe motherhood"],
    official_website: "https://nhm.gov.in",
    apply_link: "https://nhm.gov.in",
    helpline: "104",
    last_verified_date: "2026-07-30",
    source_url: "https://nhm.gov.in",
    notes: "Benefit amounts vary by state and rural/urban classification — verify with the specific state NHM office."
  },
  {
    id: "janaushadhi",
    name: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)",
    short_description: "Generic medicines at affordable prices through dedicated Janaushadhi Kendras.",
    full_description: "Scheme to provide quality generic medicines at prices 50-90% lower than branded equivalents through a network of Pradhan Mantri Bhartiya Janaushadhi Kendras across the country.",
    category: "Health",
    ministry: "Ministry of Chemicals and Fertilizers (Department of Pharmaceuticals)",
    benefits: [
      "Generic medicines priced significantly lower than branded drugs",
      "Over 2,000 medicines and 300+ surgical items available",
      "Kendras present in most districts including rural areas"
    ],
    eligibility: {
      age_limit: "Not applicable (open to all citizens)",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Not applicable — general public; separately, individuals/NGOs/pharmacists can apply to open a Kendra",
      state: "All India"
    },
    required_documents: [
      "Not applicable for purchase; for opening a Kendra: pharmacy degree/diploma, GST registration, shop premises documents"
    ],
    application_steps: [
      "Locate nearest Janaushadhi Kendra via the Janaushadhi Sugam app or website",
      "Purchase prescribed generic medicines directly at the counter"
    ],
    keywords: ["generic medicine", "affordable healthcare", "Janaushadhi Kendra"],
    official_website: "https://janaushadhi.gov.in",
    apply_link: "https://janaushadhi.gov.in",
    helpline: "1800-180-8080",
    last_verified_date: "2026-07-30",
    source_url: "https://janaushadhi.gov.in"
  },
  {
    id: "bbbp",
    name: "Beti Bachao Beti Padhao (BBBP)",
    short_description: "Awareness and welfare scheme to improve the child sex ratio and promote girls' education.",
    full_description: "Launched in 2015 to address declining child sex ratio and related issues of women empowerment, through nationwide advocacy and multi-sectoral action in gender-critical districts.",
    category: "Women",
    ministry: "Ministry of Women and Child Development",
    benefits: [
      "Community awareness campaigns",
      "Convergence with education and health schemes for the girl child",
      "Support for enforcement of the PC-PNDT Act against sex-selective practices"
    ],
    eligibility: {
      age_limit: "Not applicable (community-level programme)",
      income_limit: "Not applicable",
      gender: "Female (girl child focus)",
      occupation: "Not applicable",
      state: "All India, with focused districts having skewed sex ratios"
    },
    required_documents: [
      "Not applicable — awareness scheme; linked schemes like SSY require Aadhaar and birth certificate"
    ],
    application_steps: [
      "No direct individual application; engage through Anganwadi centres, district BBBP task forces, or linked schemes such as Sukanya Samriddhi Yojana"
    ],
    keywords: ["girl child", "sex ratio", "women empowerment", "education"],
    official_website: "https://wcd.nic.in/bbbp-scheme",
    apply_link: "https://wcd.nic.in/bbbp-scheme",
    helpline: "181",
    last_verified_date: "2026-07-30",
    source_url: "https://wcd.nic.in/bbbp-scheme"
  },
  {
    id: "sukanya-samriddhi",
    name: "Sukanya Samriddhi Yojana (SSY)",
    short_description: "High-interest tax-free savings account for a girl child's education and marriage.",
    full_description: "Small savings scheme under the Beti Bachao Beti Padhao initiative allowing parents/guardians to build a tax-free corpus for a girl child, with one of the highest interest rates among government savings instruments.",
    category: "Women",
    ministry: "Ministry of Finance (Department of Economic Affairs) / India Post",
    benefits: [
      "Interest rate of 8.2% per annum (Q2 FY2026-27, compounded annually, revised quarterly)",
      "Deposits from Rs 250 to Rs 1.5 lakh per year",
      "Tax deduction under Section 80C; interest and maturity amount fully tax-free (EEE status)",
      "Matures 21 years from account opening; partial withdrawal allowed for higher education/marriage after age 18"
    ],
    eligibility: {
      age_limit: "Girl child below 10 years at account opening",
      income_limit: "Not applicable",
      gender: "Female (girl child)",
      occupation: "Not applicable",
      state: "All India"
    },
    required_documents: [
      "Girl child's birth certificate",
      "Aadhaar card of girl and guardian",
      "Guardian's identity and address proof",
      "Passport-size photograph"
    ],
    application_steps: [
      "Open account at a post office or authorised bank branch (max 2 accounts per family, 3rd allowed for twins/triplets in specific cases)",
      "Deposit minimum Rs 250 in the first year, continue annual deposits",
      "Track balance via passbook or online for banks offering digital access"
    ],
    keywords: ["girl child savings", "SSY", "tax-free investment", "education fund"],
    official_website: "https://www.nsiindia.gov.in",
    apply_link: "https://www.indiapost.gov.in",
    helpline: "1800-266-6868 (India Post)",
    last_verified_date: "2026-07-30",
    source_url: "https://www.nsiindia.gov.in",
    notes: "Interest rate (8.2%) is revised quarterly by the Ministry of Finance — always check the latest quarter's notified rate."
  },
  {
    id: "mahila-shakti-kendra",
    name: "Mahila Shakti Kendra",
    short_description: "Community-level engagement scheme providing skill development and support for rural women.",
    full_description: "Scheme to empower rural women through community participation via student volunteers, providing convergence of health, education, employment, and skill development schemes at the village level.",
    category: "Women",
    ministry: "Ministry of Women and Child Development",
    benefits: [
      "Skill development and employment guidance",
      "Access to information about health, sanitation, nutrition and legal rights",
      "Support through Block-level and District-level Mahila Shakti Kendras"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Not applicable",
      gender: "Female",
      occupation: "Rural women, especially in aspirational and backward districts",
      state: "Select rural districts"
    },
    required_documents: [
      "Aadhaar card",
      "Local residence proof"
    ],
    application_steps: [
      "Contact the nearest Mahila Shakti Kendra / Anganwadi centre",
      "Participate in awareness and skilling camps organised locally"
    ],
    keywords: ["women empowerment", "rural women", "skill development"],
    official_website: "https://wcd.nic.in",
    apply_link: "https://wcd.nic.in",
    helpline: "181",
    last_verified_date: "2026-07-30",
    source_url: "https://wcd.nic.in"
  },
  {
    id: "one-stop-centre",
    name: "One Stop Centre Scheme (Sakhi)",
    short_description: "Integrated support for women affected by violence, including medical, legal and police aid.",
    full_description: "Sakhi One Stop Centres provide women affected by violence with integrated access to police, medical, legal, psychological and counselling support under one roof, free of cost.",
    category: "Women",
    ministry: "Ministry of Women and Child Development",
    benefits: [
      "Free medical assistance",
      "Free legal aid and counselling",
      "Temporary shelter (up to 5 days)",
      "Police facilitation desk"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Not applicable",
      gender: "Female",
      occupation: "Women and girls affected by violence (domestic, sexual, or in public/private space)",
      state: "All India — centres in every district"
    },
    required_documents: [
      "Any identity proof (not mandatory for emergency access)"
    ],
    application_steps: [
      "Visit the nearest district One Stop Centre or call Women Helpline 181",
      "Case manager registers the complaint and coordinates medical/legal/police support"
    ],
    keywords: ["women safety", "domestic violence", "legal aid", "Sakhi centre"],
    official_website: "https://wcd.nic.in/schemes/one-stop-centre-scheme-1",
    apply_link: "https://wcd.nic.in",
    helpline: "181",
    last_verified_date: "2026-07-30",
    source_url: "https://wcd.nic.in"
  },
  {
    id: "pmay-gramin",
    name: "Pradhan Mantri Awas Yojana – Gramin (PMAY-G)",
    short_description: "Financial assistance for rural households without a pucca house to construct one.",
    full_description: "Rural housing scheme (replacing Indira Awas Yojana) providing assistance to houseless families and those living in kutcha/dilapidated houses to build pucca houses with basic amenities. PMAY 2.0, approved August 2024, adds 2 crore more rural houses through 2029.",
    category: "Housing",
    ministry: "Ministry of Rural Development",
    benefits: [
      "Rs 1.20 lakh assistance in plain areas, Rs 1.30 lakh in hilly/difficult/IAP areas",
      "Up to 90-95 days of MGNREGA wage convergence for construction labour",
      "Additional loan facility up to Rs 70,000 at concessional interest if needed",
      "Support for toilet construction under Swachh Bharat Mission convergence"
    ],
    eligibility: {
      age_limit: "Not applicable (household-based)",
      income_limit: "Determined via SECC-2011 deprivation criteria / Awaas+ survey, not a fixed income cut-off",
      gender: "Priority to women-headed households; joint ownership with wife encouraged",
      occupation: "Households without a house, or in kutcha/dilapidated houses; priority to SC/ST, minorities, widows, persons with disabilities, freed bonded labourers",
      state: "All India (rural)"
    },
    required_documents: [
      "Aadhaar card",
      "Job card (MGNREGA) if available",
      "Bank account details",
      "Awaas+ / SECC listing confirmation"
    ],
    application_steps: [
      "Verify inclusion in the Awaas+ / SECC permanent waitlist at the gram panchayat",
      "Panchayat secretary/block office initiates registration on pmayg.nic.in",
      "Assistance released in instalments tied to construction stage, verified via geo-tagged photos"
    ],
    keywords: ["rural housing", "pucca house", "PMAY-G", "Awaas+"],
    official_website: "https://pmayg.nic.in",
    apply_link: "https://pmayg.nic.in",
    helpline: "1800-11-6446 / 1800-11-8111",
    last_verified_date: "2026-07-30",
    source_url: "https://pmayg.nic.in",
    notes: "Beneficiary selection is done via survey lists (not open online application) — this is important to reflect accurately in an eligibility checker."
  },
  {
    id: "pmay-urban",
    name: "Pradhan Mantri Awas Yojana – Urban 2.0 (PMAY-U)",
    short_description: "Interest subsidy and construction assistance for affordable urban housing.",
    full_description: "Urban housing scheme aiming for 'Housing for All' in cities, offering interest subsidy on home loans and direct construction assistance to Economically Weaker Sections, Low Income Groups and Middle Income Groups. PMAY-U 2.0 (Sept 2024 - Aug 2029) targets 1 crore additional urban houses.",
    category: "Housing",
    ministry: "Ministry of Housing and Urban Affairs",
    benefits: [
      "Beneficiary-Led Construction (BLC): up to Rs 2.5 lakh subsidy for building on own land",
      "Interest Subsidy Scheme (ISS): interest subsidy on home loans up to Rs 25 lakh, capped around Rs 1.80 lakh",
      "Affordable Housing in Partnership: subsidised ready-built units for EWS"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "EWS: annual household income up to Rs 3 lakh; LIG: Rs 3-6 lakh; MIG: up to Rs 9 lakh (varies by component)",
      gender: "Ownership/co-ownership by a woman family member encouraged/mandatory in several components",
      occupation: "Households without a pucca house anywhere in India",
      state: "All India (urban local bodies)"
    },
    required_documents: [
      "Aadhaar card",
      "Income certificate",
      "Bank account details",
      "Property/land documents (for BLC)",
      "Affidavit of not owning a pucca house"
    ],
    application_steps: [
      "Apply through the Urban Local Body or state PMAY-U portal during an active demand survey window",
      "Submit income and identity documents for verification",
      "Approved beneficiaries receive assistance in instalments linked to construction progress or loan disbursal"
    ],
    keywords: ["urban housing", "home loan subsidy", "affordable housing", "PMAY-U"],
    official_website: "https://pmay-urban.gov.in",
    apply_link: "https://pmay-urban.gov.in",
    helpline: "1800-11-6163",
    last_verified_date: "2026-07-30",
    source_url: "https://pmay-urban.gov.in",
    notes: "Income slabs and subsidy caps for PMAY-U 2.0 components should be cross-checked against the latest MoHUA guidelines before publishing as authoritative."
  },
  {
    id: "pm-ujjwala",
    name: "Pradhan Mantri Ujjwala Yojana (PMUY)",
    short_description: "Free LPG gas connection to women from BPL/vulnerable households.",
    full_description: "Scheme to provide clean cooking fuel to women in economically weaker households, replacing traditional chulhas that cause indoor air pollution and health hazards, launched in 2016.",
    category: "Housing",
    ministry: "Ministry of Petroleum and Natural Gas",
    benefits: [
      "Free LPG connection (deposit-free) with first refill and stove often provided free/subsidised",
      "Subsidy on subsequent LPG refills for beneficiaries"
    ],
    eligibility: {
      age_limit: "18 years and above",
      income_limit: "BPL households / SECC-listed households / specific vulnerable categories (SC/ST, PMAY beneficiaries, Antyodaya Anna Yojana, forest dwellers, tea garden workers, etc.)",
      gender: "Female applicant (adult woman of the household)",
      occupation: "Not applicable",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "BPL/ration card or relevant category proof",
      "Bank account details",
      "Passport-size photograph",
      "Address proof"
    ],
    application_steps: [
      "Apply at the nearest LPG distributor with KYC form (Form for New Ujjwala 2.0 Connections)",
      "Submit eligibility category proof",
      "Distributor verifies and issues the connection"
    ],
    keywords: ["LPG connection", "clean cooking fuel", "women", "BPL"],
    official_website: "https://pmuy.gov.in",
    apply_link: "https://pmuy.gov.in",
    helpline: "1800-266-6696",
    last_verified_date: "2026-07-30",
    source_url: "https://pmuy.gov.in"
  },
  {
    id: "saubhagya",
    name: "Saubhagya Yojana (Pradhan Mantri Sahaj Bijli Har Ghar Yojana)",
    short_description: "Free electricity connections to remaining un-electrified households.",
    full_description: "Scheme launched in 2017 to achieve universal household electrification by providing last-mile connectivity to un-electrified households in rural and urban areas.",
    category: "Housing",
    ministry: "Ministry of Power",
    benefits: [
      "Free electricity connection for BPL households",
      "Connection at Rs 500 (in 10 instalments via electricity bill) for non-BPL households without existing connection",
      "Solar packs for remote/inaccessible households"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Free for BPL households identified via SECC data; nominal charge for others",
      gender: "All genders",
      occupation: "Households without an existing electricity connection",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Address proof",
      "BPL certificate (if applicable)"
    ],
    application_steps: [
      "Apply through the local electricity distribution company or Saubhagya portal/camps organised in villages",
      "Provide identity and address proof",
      "Connection released after meter installation"
    ],
    keywords: ["electricity connection", "rural electrification", "free power"],
    official_website: "https://saubhagya.gov.in",
    apply_link: "https://saubhagya.gov.in",
    helpline: "1800-121-5555",
    last_verified_date: "2026-07-30",
    source_url: "https://saubhagya.gov.in",
    notes: "Scheme largely completed its original targets; largely superseded in new-connection scenarios by state DISCOM processes — verify current operational status."
  },
  {
    id: "pm-surya-ghar",
    name: "PM Surya Ghar: Muft Bijli Yojana",
    short_description: "Subsidy for rooftop solar installation offering up to 300 units of free electricity monthly.",
    full_description: "Launched in 2024, this scheme subsidises rooftop solar panel installation for residential households, aiming to provide free electricity up to 300 units/month and reduce power bills.",
    category: "Housing",
    ministry: "Ministry of New and Renewable Energy",
    benefits: [
      "Subsidy of Rs 30,000 for 1kW, Rs 60,000 for 2kW, and Rs 78,000 for 3kW or higher systems (indicative slabs)",
      "Up to 300 units of free electricity per month for eligible households",
      "Low-interest collateral-free loans for the remaining system cost"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Open to all residential households with a valid electricity connection and suitable roof space",
      gender: "All genders",
      occupation: "Homeowners",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Electricity bill / consumer number",
      "Bank account details",
      "Roof ownership proof"
    ],
    application_steps: [
      "Register on the national portal (pmsuryaghar.gov.in) with electricity consumer number and state/DISCOM",
      "Apply for feasibility approval from DISCOM",
      "Get installation done by a registered vendor",
      "Submit plant details for net-meter installation and subsidy release after commissioning"
    ],
    keywords: ["rooftop solar", "free electricity", "renewable energy", "subsidy"],
    official_website: "https://pmsuryaghar.gov.in",
    apply_link: "https://pmsuryaghar.gov.in",
    helpline: "15555",
    last_verified_date: "2026-07-30",
    source_url: "https://pmsuryaghar.gov.in",
    notes: "Subsidy slabs are per official MNRE notification at launch; confirm current amounts on the portal as they are subject to revision."
  },
  {
    id: "jal-jeevan-mission",
    name: "Jal Jeevan Mission",
    short_description: "Scheme to provide functional household tap water connections to every rural home.",
    full_description: "Flagship mission launched in 2019 to ensure potable piped water supply to every rural household in India through community-led local infrastructure.",
    category: "Housing",
    ministry: "Ministry of Jal Shakti",
    benefits: [
      "Functional Household Tap Connection (FHTC) providing 55 litres per person per day",
      "Reduced dependency on unsafe or distant water sources"
    ],
    eligibility: {
      age_limit: "Not applicable (household-based)",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Not applicable",
      state: "All India (rural)"
    },
    required_documents: [
      "Not applicable for individual households — implemented through Village Water and Sanitation Committees"
    ],
    application_steps: [
      "Village Water and Sanitation Committee plans and implements local water supply infrastructure with community participation",
      "Household connections are provided as part of the village action plan"
    ],
    keywords: ["tap water", "rural water supply", "Har Ghar Jal"],
    official_website: "https://jaljeevanmission.gov.in",
    apply_link: "https://jaljeevanmission.gov.in",
    helpline: "1800-11-6002",
    last_verified_date: "2026-07-30",
    source_url: "https://jaljeevanmission.gov.in"
  },
  {
    id: "swachh-bharat-mission",
    name: "Swachh Bharat Mission (Gramin/Urban)",
    short_description: "Sanitation scheme supporting toilet construction and solid waste management.",
    full_description: "National campaign launched in 2014 to eliminate open defecation and improve solid/liquid waste management, including financial incentive for household toilet construction.",
    category: "Housing",
    ministry: "Ministry of Jal Shakti (rural) / Ministry of Housing and Urban Affairs (urban)",
    benefits: [
      "Incentive of Rs 12,000 for construction of an Individual Household Latrine (rural)",
      "Support for community sanitary complexes and solid waste management infrastructure"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Priority to BPL and identified vulnerable households without a toilet",
      gender: "All genders",
      occupation: "Households without an existing individual toilet",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Bank account details",
      "Household survey registration"
    ],
    application_steps: [
      "Register with the gram panchayat / urban local body under the household toilet survey",
      "Construct toilet as per guidelines (self or via mason support)",
      "Incentive released in instalments after verification/geo-tagging"
    ],
    keywords: ["toilet construction", "sanitation", "open defecation free"],
    official_website: "https://swachhbharatmission.gov.in",
    apply_link: "https://swachhbharatmission.gov.in",
    helpline: "1969",
    last_verified_date: "2026-07-30",
    source_url: "https://swachhbharatmission.gov.in"
  },
  {
    id: "pm-vishwakarma",
    name: "PM Vishwakarma Yojana",
    short_description: "Support package for traditional artisans and craftspeople across 18 trades.",
    full_description: "Launched 17 September 2023 by the Ministry of MSME, this scheme bundles recognition, skill training, toolkit grants and low-interest collateral-free loans for artisans working in 18 traditional trades such as carpenters, blacksmiths, goldsmiths and tailors.",
    category: "Business",
    ministry: "Ministry of Micro, Small and Medium Enterprises",
    benefits: [
      "PM Vishwakarma certificate and ID card",
      "Toolkit incentive of Rs 15,000",
      "Collateral-free loans: Rs 1 lakh (first tranche, 18-month tenure) and Rs 2 lakh (second tranche, 30-month tenure) at 5% concessional interest",
      "Skill training with a stipend of Rs 500/day",
      "Digital transaction incentive"
    ],
    eligibility: {
      age_limit: "18 years and above",
      income_limit: "Not income-capped, but must be self-employed in one of the 18 listed trades",
      gender: "All genders",
      occupation: "Self-employed artisans/craftspeople in 18 trades (carpenter, blacksmith, goldsmith, tailor, potter, cobbler, mason, etc.); one member per family",
      state: "All India",
      exclusions: "Government employees and their families; those who availed PMEGP, PM SVANidhi or Mudra loans in the preceding 5 years"
    },
    required_documents: [
      "Aadhaar card (biometric)",
      "Mobile number",
      "Bank account details",
      "Trade-related proof/tools if available"
    ],
    application_steps: [
      "Visit nearest Common Service Centre (CSC) with Aadhaar and mobile",
      "CSC operator completes biometric e-KYC and Artisan Registration Form",
      "Get registered on Udyam Assist Platform as MSME",
      "Complete skill verification/training, then apply for toolkit and loan tranches"
    ],
    keywords: ["artisan", "craftsperson", "toolkit grant", "collateral-free loan", "self-employment"],
    official_website: "https://pmvishwakarma.gov.in",
    apply_link: "https://pmvishwakarma.gov.in",
    helpline: "18002677777",
    last_verified_date: "2026-07-30",
    source_url: "https://pmvishwakarma.gov.in",
    notes: "Registration is only via CSC, not direct online self-registration — important for an accurate 'application process' section."
  },
  {
    id: "pmegp",
    name: "Prime Minister's Employment Generation Programme (PMEGP)",
    short_description: "Credit-linked subsidy for setting up new micro-enterprises for self-employment.",
    full_description: "Central sector scheme merging erstwhile REGP and PMRY, administered by KVIC, providing margin money subsidy to first-time entrepreneurs setting up new manufacturing, service or business ventures.",
    category: "Business",
    ministry: "Ministry of Micro, Small and Medium Enterprises (via KVIC/KVIB/DIC)",
    benefits: [
      "Margin money subsidy of 15-35% of project cost depending on category (general/special) and area (urban/rural)",
      "Project cost up to Rs 50 lakh for manufacturing and Rs 20 lakh for service sector (first loan); higher limits for second loan/upgradation",
      "Beneficiary contributes only 5-10% of project cost; remaining financed by bank"
    ],
    eligibility: {
      age_limit: "18 years and above",
      income_limit: "Not applicable",
      gender: "All genders (women, SC/ST, OBC, minorities, ex-servicemen get higher subsidy)",
      occupation: "Individuals setting up a new micro-enterprise; minimum VIII standard education needed for projects above Rs 10 lakh (manufacturing) / Rs 5 lakh (service)",
      state: "All India (rural and urban)"
    },
    required_documents: [
      "Aadhaar card",
      "Educational qualification certificate",
      "Project report",
      "Caste/category certificate (if applicable)",
      "Bank account details"
    ],
    application_steps: [
      "Apply online at the PMEGP e-portal with project report",
      "Application forwarded to KVIC/KVIB/DIC for scrutiny and interview",
      "Bank sanctions loan; beneficiary undergoes mandatory Entrepreneurship Development Programme (EDP) training",
      "Margin money subsidy released to the bank after 3 years of satisfactory operation"
    ],
    keywords: ["self-employment", "micro-enterprise", "margin money subsidy", "KVIC"],
    official_website: "https://www.kviconline.gov.in/pmegp",
    apply_link: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
    helpline: "1800-3000-3468",
    last_verified_date: "2026-07-30",
    source_url: "https://www.kviconline.gov.in/pmegp"
  },
  {
    id: "mudra-yojana",
    name: "Pradhan Mantri MUDRA Yojana (PMMY)",
    short_description: "Collateral-free micro-credit up to Rs 20 lakh for non-corporate small business units.",
    full_description: "Scheme providing loans to non-corporate, non-farm small/micro enterprises through three categories — Shishu, Kishor and Tarun (and Tarun Plus) — to fund working capital and business expansion.",
    category: "Business",
    ministry: "Ministry of Finance (Department of Financial Services) / MUDRA Ltd.",
    benefits: [
      "Shishu: loans up to Rs 50,000",
      "Kishor: loans from Rs 50,000 to Rs 5 lakh",
      "Tarun: loans from Rs 5 lakh to Rs 10 lakh",
      "Tarun Plus: loans from Rs 10 lakh to Rs 20 lakh (for those who have successfully repaid a Tarun loan)",
      "Collateral-free lending under credit guarantee cover"
    ],
    eligibility: {
      age_limit: "18 years and above",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Non-farm small/micro business owners (manufacturing, trading, services) including shopkeepers, vendors, artisans",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Business proof/plan",
      "Bank account details",
      "Passport-size photograph"
    ],
    application_steps: [
      "Apply at a bank, NBFC, MFI or via the Udyamimitra portal",
      "Submit business plan and identity documents",
      "Loan sanctioned and MUDRA card issued for working capital drawdown"
    ],
    keywords: ["micro loan", "small business", "collateral-free", "Shishu Kishor Tarun"],
    official_website: "https://www.mudra.org.in",
    apply_link: "https://www.udyamimitra.in",
    helpline: "1800-180-1111",
    last_verified_date: "2026-07-30",
    source_url: "https://www.mudra.org.in",
    notes: "Tarun Plus category (up to Rs 20 lakh) was a later enhancement — verify current loan slab structure on mudra.org.in before finalising."
  },
  {
    id: "stand-up-india",
    name: "Stand-Up India Scheme",
    short_description: "Bank loans between Rs 10 lakh and Rs 1 crore for SC/ST and women entrepreneurs.",
    full_description: "Scheme to facilitate bank loans for setting up greenfield enterprises in manufacturing, services, trading or agri-allied sectors, promoting entrepreneurship among SC/ST and women.",
    category: "Business",
    ministry: "Ministry of Finance (Department of Financial Services)",
    benefits: [
      "Composite loan (term loan + working capital) between Rs 10 lakh and Rs 1 crore",
      "Covers 75% of the project cost (borrower contributes minimum 10%, balance via convergence with other schemes)",
      "Rupay debit card for working capital withdrawal",
      "Handholding support through Stand-Up India connect centres"
    ],
    eligibility: {
      age_limit: "18 years and above",
      income_limit: "Not applicable",
      gender: "Women, or SC/ST individuals",
      occupation: "Setting up a new (greenfield) enterprise; at least 51% shareholding/controlling stake for non-individual enterprises",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Caste certificate (for SC/ST applicants)",
      "Project report",
      "Bank account details"
    ],
    application_steps: [
      "Apply through the Stand-Up India portal (standupmitra.in) or directly at a bank branch",
      "Submit project proposal and eligibility documents",
      "Bank appraises and sanctions the composite loan"
    ],
    keywords: ["SC ST entrepreneur", "women entrepreneur", "greenfield enterprise", "composite loan"],
    official_website: "https://www.standupmitra.in",
    apply_link: "https://www.standupmitra.in",
    helpline: "1800-180-1111",
    last_verified_date: "2026-07-30",
    source_url: "https://www.standupmitra.in"
  },
  {
    id: "pm-svanidhi",
    name: "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi)",
    short_description: "Working capital loans for street vendors to restart and grow their businesses.",
    full_description: "Micro-credit scheme launched in 2020 to provide affordable working capital loans to street vendors, with escalating loan amounts on timely repayment and cashback incentives for digital transactions.",
    category: "Business",
    ministry: "Ministry of Housing and Urban Affairs",
    benefits: [
      "First loan up to Rs 10,000, second loan up to Rs 20,000, third loan up to Rs 50,000 on timely repayment",
      "Interest subsidy of 7% per annum on timely/early repayment",
      "Cashback up to Rs 1,200/year for digital transactions"
    ],
    eligibility: {
      age_limit: "Not specifically capped; must be an adult vendor",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Urban street vendors possessing a Certificate of Vending / Identity Card issued by Urban Local Bodies, or identified in the vendor survey",
      state: "All India (urban)"
    },
    required_documents: [
      "Aadhaar card",
      "Certificate of Vending / vendor survey ID",
      "Bank account details"
    ],
    application_steps: [
      "Apply via the PM SVANidhi portal/app or at a Common Service Centre with vendor ID",
      "Bank/lending institution appraises and disburses the loan",
      "Timely repayment tracked digitally to unlock the next loan tranche"
    ],
    keywords: ["street vendor", "working capital loan", "digital cashback"],
    official_website: "https://pmsvanidhi.mohua.gov.in",
    apply_link: "https://pmsvanidhi.mohua.gov.in",
    helpline: "1800-11-1979",
    last_verified_date: "2026-07-30",
    source_url: "https://pmsvanidhi.mohua.gov.in"
  },
  {
    id: "pm-fme",
    name: "PM Formalisation of Micro Food Processing Enterprises (PM FME)",
    short_description: "Credit-linked subsidy to formalise and upgrade micro food processing units.",
    full_description: "Scheme to support existing individual micro food processing enterprises for capacity building, branding, and formalisation, with a One District One Product (ODOP) focus.",
    category: "Business",
    ministry: "Ministry of Food Processing Industries",
    benefits: [
      "Credit-linked capital subsidy of 35% of eligible project cost, up to Rs 10 lakh per unit",
      "Support for common infrastructure and branding/marketing for FPOs/SHGs/cooperatives",
      "Seed capital for SHG members engaged in food processing (Rs 40,000 per member)"
    ],
    eligibility: {
      age_limit: "18 years and above",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Existing individual micro food processing units, FPOs, SHGs and cooperatives in the food processing sector",
      state: "All India, aligned with each district's ODOP"
    },
    required_documents: [
      "Aadhaar card",
      "Udyam registration",
      "Project report",
      "Bank account details"
    ],
    application_steps: [
      "Apply on the PM FME portal or through the State Nodal Agency",
      "Submit project proposal aligned with district ODOP",
      "District Resource Person assists with documentation; bank sanctions loan with subsidy component"
    ],
    keywords: ["food processing", "ODOP", "MSME", "capital subsidy"],
    official_website: "https://pmfme.mofpi.gov.in",
    apply_link: "https://pmfme.mofpi.gov.in",
    helpline: "1800-1801-500",
    last_verified_date: "2026-07-30",
    source_url: "https://pmfme.mofpi.gov.in"
  },
  {
    id: "mgnrega",
    name: "Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGA)",
    short_description: "Legal guarantee of 100 days of wage employment per rural household per year.",
    full_description: "Landmark rural employment guarantee law (2005) that provides at least 100 days of unskilled manual wage employment per financial year to every rural household whose adult members volunteer for such work.",
    category: "Employment",
    ministry: "Ministry of Rural Development",
    benefits: [
      "Guaranteed 100 days of wage employment per household per year (150 days in some drought/disaster-notified areas)",
      "State-wise notified minimum wage rate, revised annually",
      "Unemployment allowance if work is not provided within 15 days of demand"
    ],
    eligibility: {
      age_limit: "18 years and above",
      income_limit: "Not applicable",
      gender: "All genders; equal wages for men and women mandated",
      occupation: "Adult members of rural households willing to do unskilled manual work",
      state: "All India (rural)"
    },
    required_documents: [
      "Aadhaar card",
      "Job Card application form",
      "Bank/post office account details",
      "Passport-size photograph"
    ],
    application_steps: [
      "Apply for a Job Card at the gram panchayat",
      "Submit a written work demand application",
      "Work allotted within 15 days; wages credited to bank account",
      "Track job card and payments on the NREGA public portal"
    ],
    keywords: ["rural employment", "job card", "wage guarantee", "MGNREGA"],
    official_website: "https://nrega.nic.in",
    apply_link: "https://nrega.nic.in",
    helpline: "1800-11-0707",
    last_verified_date: "2026-07-30",
    source_url: "https://nrega.nic.in",
    notes: "Wage rates are state-specific and revised annually — do not hardcode a single wage figure app-wide."
  },
  {
    id: "ddu-gky",
    name: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
    short_description: "Free skill training and placement-linked employment for rural poor youth.",
    full_description: "Placement-linked skill development programme for rural youth from poor families, part of the National Rural Livelihood Mission, offering free residential training aligned to market demand.",
    category: "Employment",
    ministry: "Ministry of Rural Development",
    benefits: [
      "Free skill training (typically 2-12 months depending on the trade) with free boarding/lodging for residential courses",
      "Guaranteed placement assistance with a minimum wage commitment",
      "Post-placement tracking and support for retention"
    ],
    eligibility: {
      age_limit: "15 to 35 years (up to 45 years for differently-abled, minorities and transgender candidates)",
      income_limit: "Rural youth from poor households (as per SECC/BPL identification)",
      gender: "All genders",
      occupation: "School/college dropouts or unemployed rural youth from poor families",
      state: "All India (rural)"
    },
    required_documents: [
      "Aadhaar card",
      "BPL/SECC proof",
      "Educational certificates",
      "Bank account details"
    ],
    application_steps: [
      "Register through the DDU-GKY portal (kaushalpanjee.nic.in) or at a registered Project Implementing Agency (training centre)",
      "Attend counselling and mobilisation session",
      "Undergo training and appear for the assessment/certification",
      "Placement support provided by the training partner"
    ],
    keywords: ["rural youth", "skill training", "placement", "employment"],
    official_website: "https://ddugky.gov.in",
    apply_link: "https://kaushalpanjee.nic.in",
    helpline: "1800-3000-3468",
    last_verified_date: "2026-07-30",
    source_url: "https://ddugky.gov.in"
  },
  {
    id: "pmkvy",
    name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    short_description: "Free short-term skill training with certification and a monetary reward.",
    full_description: "Flagship skill certification scheme enabling youth to take industry-relevant training aligned with National Skill Qualification Framework standards, through Short Term Training (STT) and Recognition of Prior Learning (RPL).",
    category: "Employment",
    ministry: "Ministry of Skill Development and Entrepreneurship",
    benefits: [
      "Free skill training (typically 200-600 hours depending on the job role)",
      "Monetary reward for candidates certified under RPL",
      "Certificate recognised across India",
      "Placement assistance through training partners"
    ],
    eligibility: {
      age_limit: "15 years and above (varies slightly by job role)",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "School/college dropouts, unemployed youth, and existing workers seeking skill certification",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Educational certificates (if applicable)",
      "Bank account details"
    ],
    application_steps: [
      "Locate a Pradhan Mantri Kaushal Kendra (PMKK) or empanelled training centre via the PMKVY portal/Skill India app",
      "Enrol for a job role aligned with interest and eligibility",
      "Complete training and appear for assessment by a Sector Skill Council",
      "Receive certification and placement support"
    ],
    keywords: ["skill training", "Skill India", "certification", "youth employment"],
    official_website: "https://www.pmkvyofficial.org",
    apply_link: "https://www.pmkvyofficial.org",
    helpline: "1800-123-9626",
    last_verified_date: "2026-07-30",
    source_url: "https://www.pmkvyofficial.org"
  },
  {
    id: "nats",
    name: "National Apprenticeship Promotion Scheme (NAPS)",
    short_description: "Financial support to employers and stipend support for apprentices under the Apprentices Act.",
    full_description: "Scheme to promote apprenticeship training in India by sharing 25% of the prescribed stipend (up to a cap) with employers and supporting basic training cost, helping youth gain on-the-job skills.",
    category: "Employment",
    ministry: "Ministry of Skill Development and Entrepreneurship",
    benefits: [
      "Government reimburses 25% of stipend (capped at Rs 1,500/month per apprentice) directly to the apprentice",
      "Reimbursement of basic training cost to employers/institutes (up to Rs 7,500 per apprentice)"
    ],
    eligibility: {
      age_limit: "14 years and above (varies by trade; typically 18+ for hazardous trades)",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Candidates who completed at least Class 5th (varies by trade), engaged as apprentices with a registered establishment",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Educational certificates",
      "Bank account details",
      "Establishment/employer registration on the apprenticeship portal"
    ],
    application_steps: [
      "Register as a candidate on the Apprenticeship India portal (apprenticeshipindia.gov.in)",
      "Apply to apprenticeship openings posted by registered establishments",
      "Sign the apprenticeship contract and begin training",
      "Stipend subsidy credited directly to apprentice's bank account"
    ],
    keywords: ["apprenticeship", "stipend", "on-the-job training"],
    official_website: "https://www.apprenticeshipindia.gov.in",
    apply_link: "https://www.apprenticeshipindia.gov.in",
    helpline: "1800-121-3111",
    last_verified_date: "2026-07-30",
    source_url: "https://www.apprenticeshipindia.gov.in"
  },
  {
    id: "e-shram",
    name: "e-Shram – National Database of Unorganised Workers",
    short_description: "Registration portal for unorganised workers providing a Universal Account Number and accident insurance.",
    full_description: "Government database to register unorganised sector workers (construction workers, migrant labourers, gig/platform workers, domestic workers, etc.) and link them to social security schemes.",
    category: "Employment",
    ministry: "Ministry of Labour and Employment",
    benefits: [
      "e-Shram card with a 12-digit Universal Account Number (UAN)",
      "Automatic accidental insurance cover of Rs 2 lakh (death/total disability) and Rs 1 lakh (partial disability) under PMSBY for one year, renewable",
      "Portability of benefits and easier access to future social security schemes"
    ],
    eligibility: {
      age_limit: "16 to 59 years",
      income_limit: "Not income-based",
      gender: "All genders",
      occupation: "Unorganised sector workers not covered under EPFO/ESIC and not an income-tax payee",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card (linked mobile number)",
      "Bank account details"
    ],
    application_steps: [
      "Self-register on eshram.gov.in using Aadhaar-linked mobile OTP, or visit a Common Service Centre",
      "Fill occupation, income and other details",
      "Download the e-Shram card with UAN"
    ],
    keywords: ["unorganised worker", "gig worker", "UAN", "accident insurance"],
    official_website: "https://eshram.gov.in",
    apply_link: "https://eshram.gov.in",
    helpline: "14434",
    last_verified_date: "2026-07-30",
    source_url: "https://eshram.gov.in"
  },
  {
    id: "apy",
    name: "Atal Pension Yojana (APY)",
    short_description: "Guaranteed monthly pension scheme for unorganised sector workers after age 60.",
    full_description: "Government-backed pension scheme launched in 2015 (with PMJJBY and PMSBY) providing a fixed monthly pension between Rs 1,000 and Rs 5,000 after age 60, based on contribution amount and age at joining. Extended by the Union Cabinet on 21 January 2026 till FY 2030-31.",
    category: "Employment",
    ministry: "Ministry of Finance (Department of Financial Services) / PFRDA",
    benefits: [
      "Guaranteed monthly pension of Rs 1,000 / 2,000 / 3,000 / 4,000 / 5,000 after age 60, chosen at enrolment",
      "Monthly contribution ranges roughly from Rs 42 to Rs 1,454 depending on age and pension slab chosen",
      "Spouse receives the same pension after subscriber's death; nominee receives accumulated corpus after both die",
      "Tax benefit under Section 80CCD"
    ],
    eligibility: {
      age_limit: "18 to 40 years at the time of joining",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Any individual with a savings bank/post office account, especially aimed at unorganised sector workers",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Bank/post office savings account",
      "Mobile number"
    ],
    application_steps: [
      "Approach your bank branch or post office with a filled APY registration form",
      "Choose desired monthly pension slab",
      "Auto-debit mandate set up for monthly/quarterly/half-yearly contribution"
    ],
    keywords: ["pension", "old age income", "unorganised workers", "APY"],
    official_website: "https://npscra.nsdl.co.in/scheme-details.php",
    apply_link: "https://enps.nsdl.com",
    helpline: "1800-889-1030",
    last_verified_date: "2026-07-30",
    source_url: "https://npscra.nsdl.co.in",
    notes: "Scheme extension till FY 2030-31 was approved 21 Jan 2026 — confirmed current as of this data pull."
  },
  {
    id: "pmjjby",
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
    short_description: "Renewable one-year life insurance cover of Rs 2 lakh at a low annual premium.",
    full_description: "Life insurance scheme launched in 2015 offering affordable, renewable term life cover for death due to any cause, targeted at financial inclusion of the unorganised and low-income population.",
    category: "Employment",
    ministry: "Ministry of Finance (Department of Financial Services)",
    benefits: [
      "Life cover of Rs 2 lakh for death due to any reason",
      "Annual premium of Rs 436 (revised from the original Rs 330), auto-debited from the bank account"
    ],
    eligibility: {
      age_limit: "18 to 50 years at enrolment (cover continues up to age 55 if premiums are paid)",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Any individual with a savings bank/post office account",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Bank/post office savings account",
      "Nominee details"
    ],
    application_steps: [
      "Fill the PMJJBY consent-cum-declaration form at your bank/post office (or via net banking)",
      "Set up annual auto-debit for the premium (usually deducted by end of May)",
      "Coverage active from the date of successful premium debit"
    ],
    keywords: ["life insurance", "term cover", "financial inclusion"],
    official_website: "https://jansuraksha.gov.in",
    apply_link: "https://jansuraksha.gov.in",
    helpline: "1800-180-1111",
    last_verified_date: "2026-07-30",
    source_url: "https://jansuraksha.gov.in",
    notes: "Premium revised from Rs 330 to Rs 436 per annum (effective FY2022-23 onward) — confirmed current in 2026 sources."
  },
  {
    id: "pmsby",
    name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    short_description: "Accidental death and disability insurance cover of Rs 2 lakh at Rs 20/year.",
    full_description: "Low-cost, renewable one-year accident insurance scheme launched in 2015 covering death and disability due to accidents, for individuals aged 18-70 with a bank account.",
    category: "Employment",
    ministry: "Ministry of Finance (Department of Financial Services)",
    benefits: [
      "Rs 2 lakh cover for accidental death or full disability",
      "Rs 1 lakh cover for partial disability",
      "Annual premium of just Rs 20, auto-debited"
    ],
    eligibility: {
      age_limit: "18 to 70 years",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Any individual with a savings bank/post office account",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Bank/post office savings account",
      "Nominee details"
    ],
    application_steps: [
      "Fill the PMSBY consent-cum-declaration form at your bank/post office or via net banking",
      "Auto-debit mandate set up for the annual premium (typically deducted by end of May/June)",
      "File claim with the bank along with FIR/medical certificate in case of an accident"
    ],
    keywords: ["accident insurance", "disability cover", "low premium insurance"],
    official_website: "https://jansuraksha.gov.in",
    apply_link: "https://jansuraksha.gov.in",
    helpline: "1800-180-1111",
    last_verified_date: "2026-07-30",
    source_url: "https://jansuraksha.gov.in"
  },
  {
    id: "pmjdy",
    name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    short_description: "Zero-balance bank account with accident insurance, overdraft facility and RuPay card.",
    full_description: "National Mission for Financial Inclusion launched in 2014, providing every unbanked household access to basic banking services, credit, insurance and pension.",
    category: "Employment",
    ministry: "Ministry of Finance (Department of Financial Services)",
    benefits: [
      "Zero-balance savings account (no minimum balance requirement)",
      "RuPay debit card with in-built accidental insurance cover of Rs 2 lakh (for accounts opened after Aug 2018) / Rs 1 lakh (opened earlier)",
      "Overdraft facility up to Rs 10,000 for eligible account holders",
      "Direct access to DBT for other government schemes"
    ],
    eligibility: {
      age_limit: "10 years and above (minors can operate with guardian)",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Any Indian citizen without a bank account",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card (or any officially valid document)",
      "Passport-size photograph"
    ],
    application_steps: [
      "Visit any bank branch or Bank Mitra (Business Correspondent) with identity proof",
      "Fill the account opening form",
      "Account activated with RuPay card issued"
    ],
    keywords: ["bank account", "zero balance", "financial inclusion", "RuPay card"],
    official_website: "https://pmjdy.gov.in",
    apply_link: "https://pmjdy.gov.in",
    helpline: "1800-11-0001 / 1800-180-1111",
    last_verified_date: "2026-07-30",
    source_url: "https://pmjdy.gov.in"
  },
  {
    id: "nsp-post-matric-sc",
    name: "Post-Matric Scholarship for SC Students",
    short_description: "Financial assistance for SC students studying at post-matriculation/post-secondary level.",
    full_description: "Centrally sponsored scheme to support SC students pursuing education beyond Class 10, covering maintenance allowance, tuition fee reimbursement and other charges, aimed at reducing dropout rates.",
    category: "Students",
    ministry: "Ministry of Social Justice and Empowerment",
    benefits: [
      "Maintenance allowance (varies by course and hostel/day scholar status)",
      "Reimbursement of compulsory non-refundable fees",
      "Full tuition fee reimbursement for many courses"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Family income up to Rs 2.5 lakh per annum",
      gender: "All genders",
      occupation: "SC students studying in Class 11 and above (post-matric level) in recognised institutions",
      state: "All India"
    },
    required_documents: [
      "Caste certificate",
      "Income certificate",
      "Aadhaar card",
      "Previous marksheet",
      "Bank account details",
      "Bonafide student certificate"
    ],
    application_steps: [
      "Register and apply on the National Scholarship Portal (scholarships.gov.in)",
      "Fill academic and bank details, upload documents",
      "Institution verifies the application",
      "State department sanctions and disburses via DBT"
    ],
    keywords: ["SC scholarship", "post matric", "tuition fee reimbursement"],
    official_website: "https://scholarships.gov.in",
    apply_link: "https://scholarships.gov.in",
    helpline: "0120-6619540",
    last_verified_date: "2026-07-30",
    source_url: "https://scholarships.gov.in",
    notes: "Income ceiling and allowance amounts are periodically revised — verify against the current NSP scheme guidelines each academic year."
  },
  {
    id: "pre-matric-minorities",
    name: "Pre-Matric Scholarship for Minorities",
    short_description: "Scholarship for minority community students studying in Class 1 to 10.",
    full_description: "Scheme to support students from notified minority communities (Muslim, Christian, Sikh, Buddhist, Parsi, Jain) studying in Classes 1 to 10, to reduce dropout and encourage school completion.",
    category: "Students",
    ministry: "Ministry of Minority Affairs",
    benefits: [
      "Admission/tuition fee support and maintenance allowance (varies for day scholars and hostellers)",
      "Direct benefit transfer to student/parent bank account"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Family income up to Rs 1 lakh per annum",
      gender: "All genders",
      occupation: "Students of notified minority communities studying in Class 1-10, with minimum 50% marks in the previous exam",
      state: "All India"
    },
    required_documents: [
      "Community/minority certificate",
      "Income certificate",
      "Aadhaar card",
      "Previous year marksheet",
      "Bank account details"
    ],
    application_steps: [
      "Apply via the National Scholarship Portal",
      "School verifies attendance and marks",
      "State nodal department approves and disburses"
    ],
    keywords: ["minority scholarship", "school students", "pre matric"],
    official_website: "https://scholarships.gov.in",
    apply_link: "https://scholarships.gov.in",
    helpline: "0120-6619540",
    last_verified_date: "2026-07-30",
    source_url: "https://scholarships.gov.in"
  },
  {
    id: "nmmss",
    name: "National Means-cum-Merit Scholarship Scheme (NMMSS)",
    short_description: "Scholarship to meritorious students from economically weaker sections to prevent dropout at Class 9.",
    full_description: "Scheme awarding scholarships to talented students of economically weaker sections to arrest their dropout at Class 8 and encourage them to continue education up to Class 12, selected via a state-level exam.",
    category: "Students",
    ministry: "Ministry of Education (Department of School Education and Literacy)",
    benefits: [
      "Rs 12,000 per annum (Rs 1,000/month) from Class 9 to Class 12, subject to continued eligibility"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Parental income not exceeding Rs 3.5 lakh per annum",
      gender: "All genders",
      occupation: "Students studying in Class 8 in a government/government-aided/local body school, qualifying the NMMS selection test",
      state: "All India"
    },
    required_documents: [
      "Income certificate",
      "Aadhaar card",
      "Class 7 marksheet (minimum 55% required, relaxation for SC/ST)",
      "Bank account details"
    ],
    application_steps: [
      "Apply for the state-conducted NMMS selection test (usually held in Nov)",
      "Qualify based on merit (SAT + MAT pattern exam)",
      "Register on the National Scholarship Portal after selection",
      "Scholarship credited annually via DBT, subject to minimum 55% marks and 75% attendance each year"
    ],
    keywords: ["means-cum-merit", "class 9 to 12", "dropout prevention"],
    official_website: "https://scholarships.gov.in",
    apply_link: "https://scholarships.gov.in",
    helpline: "0120-6619540",
    last_verified_date: "2026-07-30",
    source_url: "https://scholarships.gov.in"
  },
  {
    id: "central-sector-scholarship",
    name: "Central Sector Scheme of Scholarship for College and University Students",
    short_description: "Merit scholarship for meritorious students from lower-income families pursuing higher education.",
    full_description: "Scholarship for students who scored in the top percentile in Class 12 board exams and are pursuing regular degree courses, aimed at supporting meritorious students from economically weaker sections.",
    category: "Students",
    ministry: "Ministry of Education (Department of Higher Education)",
    benefits: [
      "Rs 12,000 per annum for the first 3 years of undergraduate study, and Rs 20,000 per annum for the 4th/5th year or postgraduate study"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Family income not exceeding Rs 4.5 lakh per annum",
      gender: "All genders",
      occupation: "Students who secured a place in the top 20th percentile of successful candidates in their Class 12 board and are enrolled in a regular undergraduate/professional course",
      state: "All India"
    },
    required_documents: [
      "Class 12 marksheet",
      "Income certificate",
      "Aadhaar card",
      "Bonafide certificate from college",
      "Bank account details"
    ],
    application_steps: [
      "Apply on the National Scholarship Portal within the notified window",
      "College verifies enrolment and marks",
      "Renewal each year subject to minimum 50% marks and regular attendance"
    ],
    keywords: ["merit scholarship", "college students", "undergraduate"],
    official_website: "https://scholarships.gov.in",
    apply_link: "https://scholarships.gov.in",
    helpline: "0120-6619540",
    last_verified_date: "2026-07-30",
    source_url: "https://scholarships.gov.in"
  },
  {
    id: "pm-yasasvi",
    name: "PM YASASVI Scholarship (Young Achievers Scholarship Award Scheme for Vibrant India)",
    short_description: "Scholarship for OBC, EBC and DNT students in Class 9-10 and 11-12.",
    full_description: "Merit-based entrance test scholarship scheme for students from Other Backward Classes, Economically Backward Classes and Denotified/Nomadic/Semi-Nomadic Tribes, to support secondary and senior secondary education.",
    category: "Students",
    ministry: "Ministry of Social Justice and Empowerment",
    benefits: [
      "Class 9-10: scholarship for day scholars/hostellers (amount as per NTA-conducted YET merit list)",
      "Class 11-12: higher-tier scholarship for continuing education",
      "Top-class scholarship for select institutions for undergraduate/postgraduate students"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Family income not exceeding Rs 2.5 lakh per annum",
      gender: "All genders",
      occupation: "Students belonging to OBC/EBC/DNT category, studying/seeking admission in Class 9 or Class 11",
      state: "All India"
    },
    required_documents: [
      "OBC/EBC/DNT category certificate",
      "Income certificate",
      "Aadhaar card",
      "Previous marksheet",
      "Bank account details"
    ],
    application_steps: [
      "Register for the YASASVI Entrance Test (YET) conducted by NTA",
      "Qualify based on merit rank",
      "Apply on the National Scholarship Portal for scholarship disbursal"
    ],
    keywords: ["OBC scholarship", "YASASVI", "entrance test", "secondary education"],
    official_website: "https://yet.nta.ac.in",
    apply_link: "https://scholarships.gov.in",
    helpline: "0120-6619540",
    last_verified_date: "2026-07-30",
    source_url: "https://yet.nta.ac.in"
  },
  {
    id: "aicte-pragati",
    name: "AICTE Pragati Scholarship for Girls",
    short_description: "Scholarship for girl students pursuing technical education in AICTE-approved institutions.",
    full_description: "Scheme by AICTE to encourage girl child participation in technical education, providing financial assistance to selected students each year for tuition-related and incidental expenses.",
    category: "Students",
    ministry: "Ministry of Education (AICTE)",
    benefits: [
      "Rs 50,000 per annum (or actual tuition fee, whichever is lower) plus incidental allowance",
      "Limited to one girl child per family (with sibling exceptions)"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Family income not exceeding Rs 8 lakh per annum",
      gender: "Female",
      occupation: "Girl students admitted to the first year (or lateral entry to second year) of a degree/diploma technical course in an AICTE-approved institution",
      state: "All India"
    },
    required_documents: [
      "Income certificate",
      "Aadhaar card",
      "Admission proof",
      "Bank account details"
    ],
    application_steps: [
      "Apply on the AICTE Pragati/Saksham portal (aicte-pragati-saksham-gov.in) or the National Scholarship Portal",
      "Institution verifies admission and category details",
      "Scholarship disbursed via DBT after selection (limited seats, merit-cum-means based)"
    ],
    keywords: ["girl child", "technical education", "AICTE", "engineering scholarship"],
    official_website: "https://www.aicte-pragati-saksham-gov.in",
    apply_link: "https://www.aicte-pragati-saksham-gov.in",
    helpline: "0120-6619540",
    last_verified_date: "2026-07-30",
    source_url: "https://www.aicte-pragati-saksham-gov.in"
  },
  {
    id: "aicte-saksham",
    name: "AICTE Saksham Scholarship for Differently-Abled Students",
    short_description: "Scholarship for specially-abled students pursuing technical education.",
    full_description: "Scheme by AICTE providing financial assistance to differently-abled students pursuing technical education to reduce financial burden and encourage inclusive higher education.",
    category: "Students",
    ministry: "Ministry of Education (AICTE)",
    benefits: [
      "Rs 50,000 per annum (or actual tuition fee, whichever is lower) plus incidental allowance"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Family income not exceeding Rs 8 lakh per annum",
      gender: "All genders",
      occupation: "Differently-abled students (minimum 40% disability) admitted to a technical degree/diploma programme in an AICTE-approved institution",
      state: "All India"
    },
    required_documents: [
      "Disability certificate (UDID)",
      "Income certificate",
      "Aadhaar card",
      "Admission proof",
      "Bank account details"
    ],
    application_steps: [
      "Apply on the AICTE Pragati/Saksham portal or National Scholarship Portal",
      "Institution verifies admission and disability certificate",
      "Scholarship disbursed via DBT after merit-based selection"
    ],
    keywords: ["disability scholarship", "technical education", "AICTE", "inclusive education"],
    official_website: "https://www.aicte-pragati-saksham-gov.in",
    apply_link: "https://www.aicte-pragati-saksham-gov.in",
    helpline: "0120-6619540",
    last_verified_date: "2026-07-30",
    source_url: "https://www.aicte-pragati-saksham-gov.in"
  },
  {
    id: "pm-poshan",
    name: "PM POSHAN (erstwhile Mid-Day Meal Scheme)",
    short_description: "Free nutritious meal for students in government and government-aided schools.",
    full_description: "Renamed from the Mid-Day Meal Scheme in 2021, PM POSHAN provides a free hot cooked meal to students of Class 1-8 in government/government-aided schools, supporting nutrition and school attendance.",
    category: "Students",
    ministry: "Ministry of Education",
    benefits: [
      "Free hot cooked meal on school days meeting prescribed calorie and protein norms",
      "Supplementary nutrition support in aspirational districts"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Students enrolled in Class 1-8 in government/government-aided/local body schools",
      state: "All India"
    },
    required_documents: [
      "School enrolment (no separate application needed)"
    ],
    application_steps: [
      "No individual application; benefit is automatic upon enrolment in an eligible school"
    ],
    keywords: ["mid-day meal", "school nutrition", "free meal"],
    official_website: "https://pmposhan.education.gov.in",
    apply_link: "https://pmposhan.education.gov.in",
    helpline: "1800-11-8004",
    last_verified_date: "2026-07-30",
    source_url: "https://pmposhan.education.gov.in"
  },
  {
    id: "ignoaps",
    name: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS)",
    short_description: "Monthly pension for elderly citizens living below the poverty line.",
    full_description: "A component of the National Social Assistance Programme (NSAP), providing monthly pension to elderly persons from BPL households as social assistance, with states typically topping up the central contribution.",
    category: "Senior Citizens",
    ministry: "Ministry of Rural Development",
    benefits: [
      "Central assistance of Rs 200/month for ages 60-79 and Rs 500/month for age 80+ (many states supplement this with additional state contribution)"
    ],
    eligibility: {
      age_limit: "60 years and above",
      income_limit: "Household must belong to a BPL family as per state-defined criteria",
      gender: "All genders",
      occupation: "Not applicable",
      state: "All India"
    },
    required_documents: [
      "Age proof",
      "BPL certificate",
      "Aadhaar card",
      "Bank/post office account details"
    ],
    application_steps: [
      "Apply at the gram panchayat/block office or urban local body with age and BPL proof",
      "Application verified by the local revenue/social welfare officer",
      "Pension credited monthly via DBT to bank/post office account"
    ],
    keywords: ["old age pension", "senior citizen", "BPL", "NSAP"],
    official_website: "https://nsap.nic.in",
    apply_link: "https://nsap.nic.in",
    helpline: "Refer to state social welfare department",
    last_verified_date: "2026-07-30",
    source_url: "https://nsap.nic.in",
    notes: "Central pension amount (Rs 200/500) is the base contribution — actual amount received depends heavily on state top-up. Reflect this clearly, don't present it as a fixed nationwide amount."
  },
  {
    id: "rashtriya-vayoshri",
    name: "Rashtriya Vayoshri Yojana (RVY)",
    short_description: "Free assistive devices and aids for senior citizens from BPL families.",
    full_description: "Scheme to provide physical aids and assisted-living devices (walking sticks, wheelchairs, hearing aids, spectacles, artificial dentures) free of cost to senior citizens suffering from age-related disabilities.",
    category: "Senior Citizens",
    ministry: "Ministry of Social Justice and Empowerment",
    benefits: [
      "Free assistive devices distributed through camps, based on assessed need"
    ],
    eligibility: {
      age_limit: "60 years and above",
      income_limit: "BPL or income below the notified threshold for senior citizens",
      gender: "All genders",
      occupation: "Not applicable",
      state: "All India"
    },
    required_documents: [
      "Age proof",
      "Income/BPL certificate",
      "Aadhaar card",
      "Medical assessment at the camp"
    ],
    application_steps: [
      "Register at a district-level distribution camp organised by ALIMCO (implementing agency)",
      "Undergo medical assessment to identify required aid",
      "Receive the assistive device free of cost at the camp"
    ],
    keywords: ["senior citizen", "assistive devices", "wheelchair", "hearing aid"],
    official_website: "https://rvy.alimco.in",
    apply_link: "https://rvy.alimco.in",
    helpline: "Refer to district social welfare office",
    last_verified_date: "2026-07-30",
    source_url: "https://rvy.alimco.in"
  },
  {
    id: "ignwps",
    name: "Indira Gandhi National Widow Pension Scheme (IGNWPS)",
    short_description: "Monthly pension support for BPL widows aged 40-79.",
    full_description: "NSAP component providing monthly financial assistance to widows from below-poverty-line households to support their basic needs.",
    category: "Senior Citizens",
    ministry: "Ministry of Rural Development",
    benefits: [
      "Central assistance of Rs 300/month (states often supplement this amount)"
    ],
    eligibility: {
      age_limit: "40 to 79 years",
      income_limit: "Household must belong to a BPL family",
      gender: "Female (widows)",
      occupation: "Not applicable",
      state: "All India"
    },
    required_documents: [
      "Husband death certificate",
      "BPL certificate",
      "Age proof",
      "Aadhaar card",
      "Bank account details"
    ],
    application_steps: [
      "Apply at the gram panchayat/block office or urban local body",
      "Application verified by local welfare officer",
      "Pension credited monthly via DBT"
    ],
    keywords: ["widow pension", "BPL", "NSAP"],
    official_website: "https://nsap.nic.in",
    apply_link: "https://nsap.nic.in",
    helpline: "Refer to state social welfare department",
    last_verified_date: "2026-07-30",
    source_url: "https://nsap.nic.in"
  },
  {
    id: "igndps",
    name: "Indira Gandhi National Disability Pension Scheme (IGNDPS)",
    short_description: "Monthly pension for BPL persons with severe/multiple disabilities.",
    full_description: "NSAP component providing monthly financial support to persons aged 18-79 with severe or multiple disabilities from below-poverty-line households.",
    category: "Senior Citizens",
    ministry: "Ministry of Rural Development",
    benefits: [
      "Central assistance of Rs 300/month for ages 18-79 (Rs 500/month for age 80+); states often supplement"
    ],
    eligibility: {
      age_limit: "18 to 79 years",
      income_limit: "Household must belong to a BPL family",
      gender: "All genders",
      occupation: "Not applicable",
      state: "All India"
    },
    required_documents: [
      "Disability certificate (80% or more / multiple disability)",
      "BPL certificate",
      "Age proof",
      "Aadhaar card",
      "Bank account details"
    ],
    application_steps: [
      "Apply at the gram panchayat/block office or urban local body with disability and BPL proof",
      "Application verified by local welfare officer",
      "Pension credited monthly via DBT"
    ],
    keywords: ["disability pension", "BPL", "NSAP"],
    official_website: "https://nsap.nic.in",
    apply_link: "https://nsap.nic.in",
    helpline: "Refer to state social welfare department",
    last_verified_date: "2026-07-30",
    source_url: "https://nsap.nic.in"
  },
  {
    id: "udid",
    name: "Unique Disability ID (UDID) Project",
    short_description: "Single national ID and disability certificate for persons with disabilities.",
    full_description: "Project to create a national database and issue a Unique Disability ID card, serving as a single document for identification and to access all disability-related government benefits and schemes.",
    category: "Senior Citizens",
    ministry: "Ministry of Social Justice and Empowerment (Department of Empowerment of Persons with Disabilities)",
    benefits: [
      "Single, nationally-recognised proof of disability for availing all government schemes/benefits and concessions (travel, tax, reservation, etc.)",
      "Digital record eliminating repeated certification"
    ],
    eligibility: {
      age_limit: "No age limit",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Persons with any of the 21 disabilities notified under the RPwD Act, 2016",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Passport-size photograph",
      "Medical assessment by a certifying authority"
    ],
    application_steps: [
      "Apply online at the UDID portal or through the nearest District Disability Rehabilitation Centre/hospital",
      "Attend medical assessment camp for disability certification",
      "Receive the UDID card by post/download digitally after approval"
    ],
    keywords: ["disability certificate", "UDID card", "accessibility"],
    official_website: "https://www.swavlambancard.gov.in",
    apply_link: "https://www.swavlambancard.gov.in",
    helpline: "1800-233-5956",
    last_verified_date: "2026-07-30",
    source_url: "https://www.swavlambancard.gov.in"
  },
  {
    id: "pmgkay",
    name: "Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY)",
    short_description: "Free monthly foodgrain (5 kg/person) to all NFSA ration card holders.",
    full_description: "Launched April 2020 as COVID relief, PMGKAY was merged into the National Food Security Act entitlement from January 2024, making the existing NFSA ration fully free (no subsidised rate) for Antyodaya Anna Yojana and Priority Household cardholders. Extended by the Union Cabinet through December 2028.",
    category: "Agriculture",
    ministry: "Ministry of Consumer Affairs, Food and Public Distribution",
    benefits: [
      "5 kg free foodgrain (wheat/rice) per person per month for Priority Household (PHH) cardholders",
      "35 kg free foodgrain per family per month for Antyodaya Anna Yojana (AAY) cardholders",
      "No payment required at the Fair Price Shop"
    ],
    eligibility: {
      age_limit: "Not applicable (household-based)",
      income_limit: "Households classified as AAY or PHH under state-notified NFSA criteria",
      gender: "All genders",
      occupation: "Priority given to landless labourers, marginal farmers, rural artisans, street vendors, widow/disabled/elderly-headed households, primitive tribal groups",
      state: "All India"
    },
    required_documents: [
      "NFSA ration card (AAY or PHH)",
      "Aadhaar card (linked to ration card via e-KYC)"
    ],
    application_steps: [
      "Apply for a ration card at the local Food & Civil Supplies office if not already held",
      "Complete Aadhaar e-KYC for the ration card (mandatory to avoid disruption)",
      "Collect ration monthly from the linked Fair Price Shop; portable nationwide under One Nation One Ration Card"
    ],
    keywords: ["free ration", "food security", "PDS", "NFSA"],
    official_website: "https://nfsa.gov.in",
    apply_link: "https://nfsa.gov.in",
    helpline: "1967 / 14445",
    last_verified_date: "2026-07-30",
    source_url: "https://nfsa.gov.in",
    notes: "Extension through Dec 2028 confirmed via Union Cabinet approval — stable through the medium term."
  },
  {
    id: "pm-kusum",
    name: "PM-KUSUM (Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan)",
    short_description: "Subsidy for solar irrigation pumps and grid-connected solar power plants on farmland.",
    full_description: "Scheme to help farmers install solar pumps and small solar power plants, reducing diesel dependency, providing energy security, and letting farmers earn extra income by selling surplus power to DISCOMs.",
    category: "Agriculture",
    ministry: "Ministry of New and Renewable Energy",
    benefits: [
      "Standalone off-grid solar pumps (3-10 HP) with central subsidy around 30% plus state subsidy",
      "Solarisation of existing grid-connected pumps",
      "Grid-connected solar plants on barren land with power sale to DISCOM"
    ],
    eligibility: {
      age_limit: "Not applicable",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Individual farmers, FPOs, panchayats, cooperatives, Water User Associations",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Land ownership/lease document",
      "Bank account details",
      "Electricity connection details"
    ],
    application_steps: [
      "Apply through state renewable energy nodal agency portal or DISCOM",
      "Site feasibility verification",
      "Empanelled vendor installs the system after subsidy approval"
    ],
    keywords: ["solar pump", "renewable energy", "irrigation", "farmer subsidy"],
    official_website: "https://pmkusum.mnre.gov.in",
    apply_link: "https://pmkusum.mnre.gov.in",
    helpline: "Refer to state renewable energy agency",
    last_verified_date: "2026-07-30",
    source_url: "https://pmkusum.mnre.gov.in"
  },
  {
    id: "scss",
    name: "Senior Citizen Savings Scheme (SCSS)",
    short_description: "Government-backed savings scheme for senior citizens offering high quarterly interest.",
    full_description: "Post office/bank savings scheme designed for individuals aged 60+ (and certain early retirees) offering a fixed, government-backed interest rate with quarterly payouts.",
    category: "Senior Citizens",
    ministry: "Ministry of Finance (Department of Economic Affairs) / India Post",
    benefits: [
      "Interest rate of 8.2% per annum, paid quarterly",
      "Deposit up to Rs 30 lakh, minimum Rs 1,000",
      "Tax deduction up to Rs 1.5 lakh under Section 80C"
    ],
    eligibility: {
      age_limit: "60 years and above; 55-60 years for retired under superannuation/VRS",
      income_limit: "Not applicable",
      gender: "All genders",
      occupation: "Not applicable",
      state: "All India"
    },
    required_documents: [
      "Age proof",
      "Aadhaar/PAN card",
      "Retirement benefit proof (for early retirees)",
      "Passport-size photograph"
    ],
    application_steps: [
      "Open an SCSS account at any post office or authorised bank branch",
      "Deposit the lump sum (up to Rs 30 lakh)",
      "Receive quarterly interest payout directly to a linked savings account"
    ],
    keywords: ["senior citizen savings", "SCSS", "quarterly interest", "retirement"],
    official_website: "https://www.nsiindia.gov.in",
    apply_link: "https://www.indiapost.gov.in",
    helpline: "1800-266-6868",
    last_verified_date: "2026-07-30",
    source_url: "https://www.nsiindia.gov.in",
    notes: "Interest rate (8.2%) is revised quarterly by the Ministry of Finance."
  },
  {
    id: "pm-internship-scheme",
    name: "PM Internship Scheme",
    short_description: "One-year paid internship for youth with India's top companies to gain real-world work exposure.",
    full_description: "Scheme launched to provide young people internship opportunities in top companies across sectors, combining a government stipend with corporate CSR contribution.",
    category: "Employment",
    ministry: "Ministry of Corporate Affairs / Ministry of Skill Development and Entrepreneurship",
    benefits: [
      "Monthly stipend of Rs 5,000 (Rs 4,500 from government DBT + Rs 500 from host company CSR)",
      "One-time grant of Rs 6,000 for incidental expenses",
      "12-month real work exposure with a top company"
    ],
    eligibility: {
      age_limit: "21 to 24 years",
      income_limit: "Family income not exceeding Rs 8 lakh per annum",
      gender: "All genders",
      occupation: "Candidates not enrolled in full-time education and not employed full-time (Class 10, 12, ITI, diploma, graduate passouts)",
      state: "All India"
    },
    required_documents: [
      "Aadhaar card",
      "Educational certificates",
      "Income declaration",
      "Bank account details"
    ],
    application_steps: [
      "Register on the PM Internship Scheme portal (pminternship.mca.gov.in)",
      "Browse and apply to internship postings from participating companies",
      "Selected candidates undergo onboarding and begin internship with monthly stipend"
    ],
    keywords: ["internship", "youth employment", "stipend", "corporate exposure"],
    official_website: "https://pminternship.mca.gov.in",
    apply_link: "https://pminternship.mca.gov.in",
    helpline: "1800-11-2222",
    last_verified_date: "2026-07-30",
    source_url: "https://pminternship.mca.gov.in",
    notes: "Newer scheme (2024 launch) still scaling up in phases."
  }
];
