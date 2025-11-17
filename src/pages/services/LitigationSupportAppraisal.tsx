import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function LitigationSupportAppraisal() {
  const content = "Litigation support appraisals provide expert property valuations and consulting services for attorneys and parties involved in legal disputes. Our certified appraisers deliver court-admissible reports and expert testimony for contract disputes, fraud cases, construction defects, property damage claims, boundary disputes, and other real estate litigation. We provide thorough documentation, defensible methodology, and clear communication to support your legal strategy. Our appraisers have extensive courtroom experience and understand how to present complex valuation issues to judges and juries.";

  const faqs = [
    { question: "What types of cases do you support?", answer: "Contract disputes, fraud cases, construction defects, property damage, boundary disputes, partnership dissolutions, and any litigation involving real estate values." },
    { question: "Can you provide expert witness testimony?", answer: "Yes, our appraisers are qualified expert witnesses with extensive courtroom experience and can testify and defend valuations under cross-examination." },
    { question: "How is this different from a standard appraisal?", answer: "Litigation appraisals include more detailed analysis, extensive documentation of methodology, and are written specifically to withstand legal scrutiny and opposing expert challenges." },
    { question: "When should I engage an appraiser?", answer: "As early as possible in the litigation process. Early involvement helps develop litigation strategy and identify valuation issues before they become problems." },
    { question: "What is your experience in court?", answer: "Our appraisers have testified in circuit courts, federal courts, and arbitration hearings throughout Florida with a strong track record of credibility." },
  ];

  const relatedServices = [
    { name: 'Expert Witness Services', path: '/services/expert-witness-appraisal', description: 'Court testimony and depositions' },
    { name: 'Diminution in Value', path: '/services/diminution-in-value-appraisal', description: 'Property damage valuations' },
    { name: 'Eminent Domain', path: '/services/eminent-domain-appraisal', description: 'Condemnation valuations' },
    { name: 'Partition Suit', path: '/services/partition-suit-appraisal', description: 'Co-ownership disputes' },
  ];

  return (
    <ServicePageTemplate
      title="Litigation Support Appraisal"
      slug="/services/litigation-support-appraisal"
      metaDescription="Litigation support appraisals in West Palm Beach. Expert witness testimony, court-admissible reports for legal disputes. Experienced trial testimony."
      breadcrumbCategory="Litigation & Expert Witness Services"
      breadcrumbCategoryPath="/categories/litigation-expert-witness"
      content={content}
      relatedServices={relatedServices}
      faqs={faqs}
    />
  );
}
