import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function ConservationEasementAppraisal() {
  const content = "A conservation easement appraisal determines the diminution in property value resulting from donating development rights or use restrictions to a qualified conservation organization. Required for IRS charitable contribution deductions, these specialized appraisals must be performed by qualified appraisers following IRS guidelines in Publication 561 and IRC Section 170. We provide before-and-after valuations showing the reduction in fair market value caused by the easement restrictions, supporting your charitable deduction claim. Our reports are prepared to withstand IRS scrutiny and include detailed highest-and-best-use analysis.";

  const faqs = [
    { question: "What is a conservation easement?", answer: "A legal agreement that permanently restricts development or use of land to protect its conservation values, donated to a qualified organization for tax benefits." },
    { question: "Why do I need a qualified appraisal?", answer: "IRS requires a qualified appraisal for conservation easement donations to claim charitable deductions over $5,000, following strict guidelines in Publication 561." },
    { question: "How do you calculate the value?", answer: "We determine fair market value before the easement, then value with restrictions in place. The difference is your charitable contribution amount." },
    { question: "What are the IRS requirements?", answer: "Appraiser must be qualified under IRS rules, appraisal must be done within 60 days before donation, and follow USPAP and IRS Publication 561 guidelines." },
    { question: "Can you handle complex easements?", answer: "Yes, we have experience with various easement types including agricultural, scenic, historic, and habitat conservation easements." },
  ];

  const relatedServices = [
    { name: 'Charitable Contribution Appraisal', path: '/services/charitable-contribution-appraisal', description: 'Donation valuations' },
    { name: 'Gift Tax Appraisal', path: '/services/gift-tax-appraisal', description: 'Gift valuations' },
    { name: 'Estate Tax Appraisal', path: '/services/estate-tax-appraisal', description: 'Estate valuations' },
    { name: 'Financial Planning Appraisal', path: '/services/financial-planning-appraisal', description: 'Wealth management valuations' },
  ];

  return (
    <ServicePageTemplate
      title="Conservation Easement Appraisal"
      slug="/services/conservation-easement-appraisal"
      metaDescription="Conservation easement appraisals in West Palm Beach. IRS-qualified valuations for charitable contribution deductions. Before-and-after analysis per Publication 561."
      breadcrumbCategory="Tax Appeals & IRS"
      breadcrumbCategoryPath="/categories/tax-appeals-irs"
      content={content}
      relatedServices={relatedServices}
      faqs={faqs}
    />
  );
}
