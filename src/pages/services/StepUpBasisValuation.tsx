import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function StepUpBasisValuation() {
  const content = "A step-up basis valuation determines the fair market value of inherited property as of the date of death, establishing the new cost basis for the heirs. This IRS-compliant retrospective appraisal is crucial for minimizing capital gains taxes when you eventually sell inherited real estate. Under IRC Section 1014, inherited property receives a 'stepped-up' basis to the date-of-death value, potentially eliminating all capital gains that accumulated during the decedent's ownership. Our detailed appraisals provide the documentation needed for your tax records, supporting your basis claim if ever questioned by the IRS.";

  const faqs = [
    { question: "What is step-up in basis?", answer: "A tax provision allowing heirs to reset the cost basis of inherited property to its fair market value on the date of death, potentially eliminating decades of capital gains." },
    { question: "Why is this important if I'm not selling now?", answer: "Establishing basis now protects you from capital gains taxes in the future. Without documentation, IRS may assume zero basis, maximizing your tax liability." },
    { question: "How far back can you appraise?", answer: "We perform retrospective appraisals for any past date, using historical market data, comparable sales from that time period, and property records." },
    { question: "What if there's no estate tax due?", answer: "Step-up basis still applies. Even if the estate is below IRS filing thresholds, documenting basis protects heirs from future capital gains taxes." },
    { question: "What documents do you need?", answer: "Date of death, property address, any previous appraisals, and we'll research historical sales and market conditions from that time period." },
  ];

  const relatedServices = [
    { name: 'Date of Death Valuation', path: '/services/date-of-death-valuation', description: 'Estate settlement valuations' },
    { name: 'Estate Appraisal', path: '/services/estate-appraisal', description: 'Probate appraisals' },
    { name: 'Capital Gains Tax Appraisal', path: '/services/capital-gains-tax-appraisal', description: 'Cost basis valuations' },
    { name: 'Inheritance Tax Appraisal', path: '/services/inheritance-tax-appraisal', description: 'Tax compliance valuations' },
  ];

  return (
    <ServicePageTemplate
      title="Step-Up Basis Valuation"
      slug="/services/step-up-basis-valuation"
      metaDescription="Step-up basis valuations in West Palm Beach. Date of death appraisals for inherited property. Minimize capital gains taxes with IRS-compliant basis documentation."
      breadcrumbCategory="Estate, Trust & Inheritance Appraisals"
      breadcrumbCategoryPath="/categories/estate-trust-inheritance-appraisals"
      content={content}
      relatedServices={relatedServices}
      faqs={faqs}
    />
  );
}
