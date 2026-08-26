import { jsPDF } from 'jspdf';
import { Scheme } from '../types';

export function generateSchemePDF(scheme: Scheme) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  let y = 15;

  // Header Banner Background
  doc.setFillColor(6, 78, 59); // Emerald 900
  doc.rect(0, 0, pageWidth, 28, 'F');

  // Gold accent bar
  doc.setFillColor(245, 158, 11); // Amber 500
  doc.rect(0, 28, pageWidth, 2, 'F');

  // Header Text
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('JanSahayak Citizen Welfare Portal', margin, 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('Official Government Scheme Summary & Application Guide', margin, 18);
  doc.text(`Generated: ${new Date().toLocaleDateString('en-IN')}`, pageWidth - margin, 18, { align: 'right' });

  y = 36;

  // Ministry & Category Badges
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(16, 128, 87); // Emerald 700
  doc.text(`CATEGORY: ${scheme.category.toUpperCase()}`, margin, y);
  
  doc.setTextColor(100, 116, 139); // Slate 500
  doc.setFont('helvetica', 'normal');
  doc.text(`Ministry: ${scheme.ministry}`, pageWidth - margin, y, { align: 'right' });

  y += 7;

  // Scheme Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42); // Slate 900
  const titleLines = doc.splitTextToSize(scheme.name, contentWidth);
  doc.text(titleLines, margin, y);
  y += titleLines.length * 7 + 2;

  // Short Description Box
  doc.setFillColor(241, 245, 249); // Slate 100
  doc.setDrawColor(203, 213, 225); // Slate 300
  const shortDescLines = doc.splitTextToSize(scheme.short_description, contentWidth - 8);
  const boxHeight = shortDescLines.length * 4.5 + 6;
  doc.roundedRect(margin, y, contentWidth, boxHeight, 2, 2, 'FD');

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  doc.text(shortDescLines, margin + 4, y + 5);
  y += boxHeight + 8;

  // Helper function for Section Headers
  const drawSectionHeader = (title: string) => {
    if (y > pageHeight - 30) {
      doc.addPage();
      y = 15;
    }
    doc.setFillColor(16, 185, 129); // Emerald 500
    doc.rect(margin, y, 3, 5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(title, margin + 6, y + 4);
    y += 8;
  };

  // Helper function for Page Overflow Check
  const checkPageOverflow = (heightNeeded: number) => {
    if (y + heightNeeded > pageHeight - 20) {
      doc.addPage();
      y = 15;
    }
  };

  // 1. Full Description
  drawSectionHeader('1. Overview & Scheme Objectives');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const fullDescLines = doc.splitTextToSize(scheme.full_description, contentWidth);
  checkPageOverflow(fullDescLines.length * 4.5);
  doc.text(fullDescLines, margin, y);
  y += fullDescLines.length * 4.5 + 6;

  // 2. Key Benefits
  drawSectionHeader('2. Key Benefits & Financial Assistance');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(15, 23, 42);

  scheme.benefits.forEach((benefit) => {
    const lines = doc.splitTextToSize(`• ${benefit}`, contentWidth - 4);
    checkPageOverflow(lines.length * 4.5 + 2);
    doc.text(lines, margin + 2, y);
    y += lines.length * 4.5 + 2;
  });
  y += 4;

  // 3. Eligibility Criteria Table / Grid
  drawSectionHeader('3. Eligibility Criteria');
  checkPageOverflow(30);

  const eligData = [
    ['Age Requirement:', scheme.eligibility.age_limit || 'All ages'],
    ['Income Limit:', scheme.eligibility.income_limit || 'No income ceiling'],
    ['Target Gender:', scheme.eligibility.gender || 'All genders'],
    ['Occupation:', scheme.eligibility.occupation || 'All citizens'],
  ];

  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(margin, y, contentWidth, 24, 2, 2, 'FD');

  let gridY = y + 5;
  eligData.forEach(([label, val], idx) => {
    const isCol2 = idx % 2 === 1;
    const xPos = isCol2 ? margin + contentWidth / 2 + 2 : margin + 4;
    if (idx === 2) gridY += 9;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(label, xPos, gridY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(val, xPos, gridY + 4);
  });

  y += 30;

  if (scheme.eligibility.exclusions) {
    checkPageOverflow(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(185, 28, 28); // Red 700
    doc.text('Exclusions:', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    const exclLines = doc.splitTextToSize(scheme.eligibility.exclusions, contentWidth - 20);
    doc.text(exclLines, margin + 20, y);
    y += exclLines.length * 4 + 4;
  }

  // 4. Required Documents
  drawSectionHeader('4. Required Documents Checklist');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 41, 59);

  scheme.required_documents.forEach((docName) => {
    checkPageOverflow(6);
    doc.setDrawColor(16, 185, 129);
    doc.rect(margin + 2, y - 3, 3, 3);
    doc.text(docName, margin + 8, y);
    y += 5.5;
  });
  y += 4;

  // 5. Application Steps
  drawSectionHeader('5. Step-by-Step Application Roadmap');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(30, 41, 59);

  scheme.application_steps.forEach((step, idx) => {
    const stepText = `Step ${idx + 1}: ${step}`;
    const lines = doc.splitTextToSize(stepText, contentWidth - 4);
    checkPageOverflow(lines.length * 4.5 + 2);
    doc.text(lines, margin + 2, y);
    y += lines.length * 4.5 + 3;
  });
  y += 6;

  // Official Helpline & Notes
  if (scheme.notes) {
    checkPageOverflow(15);
    doc.setFillColor(254, 243, 199); // Amber 100
    doc.setDrawColor(245, 158, 11); // Amber 500
    const noteLines = doc.splitTextToSize(`Advisory: ${scheme.notes}`, contentWidth - 8);
    const noteBoxH = noteLines.length * 4 + 6;
    doc.roundedRect(margin, y, contentWidth, noteBoxH, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(146, 64, 14); // Amber 800
    doc.text(noteLines, margin + 4, y + 4.5);
    y += noteBoxH + 6;
  }

  // Footer on bottom
  checkPageOverflow(20);
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, y, pageWidth - margin, y);
  y += 5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(16, 128, 87);
  doc.text(`Official Website: ${scheme.official_website}`, margin, y);

  doc.setTextColor(100, 116, 139);
  doc.text(`Helpline: ${scheme.helpline}  |  Last Verified: ${scheme.last_verified_date}`, pageWidth - margin, y, { align: 'right' });

  // Save the PDF file
  const fileName = `${scheme.id}_Summary_JanSahayak.pdf`;
  doc.save(fileName);
}
