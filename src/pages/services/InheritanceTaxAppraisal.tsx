import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function InheritanceTaxAppraisal() {
  const content = "An inheritance tax appraisal (also called estate tax appraisal) provides the fair market value of inherited real estate as of the date of death for IRS and state tax filings. Required for federal estate tax returns (Form 706) when estates exceed exemption limits, and for state-level inheritance taxes in applicable jurisdictions. Our USPAP-compliant, retrospective appraisals establish the stepped-up cost basis for inherited property, which is crucial for minimizing future capital gains taxes. We provide defensible valuations accepted by the IRS, estate attorneys, and probate courts.";

  const faqs = [
    { question: "When is an inheritance tax appraisal required?", answer: "For IRS Form 706 when estate value exceeds federal exemption ($13.61M in 2024), for state inheritance taxes, and to establish cost basis for inherited property." },
    { question: "What is step-up in basis?", answer: "Inherited property receives a new cost basis equal to fair market value on date of death, potentially eliminating capital gains on appreciation during the decedent's ownership." },
    { question: "How far back can you appraise?", answer: "We perform retrospective appraisals for any past date, using historical sales data, market conditions, and property records from that time period." },
    { question: "Do I need this if I'm keeping the property?", answer: "Yes—establishing basis now protects you from capital gains taxes when you eventually sell, even if that's years away." },
    { question: "How long does it take?", answer: "Typically 7-10 business days. Rush service available for urgent tax filing deadlines." },
  ];

  const relatedServices = [
    { name: 'Date of Death Valuation', path: '/services/date-of-death-valuation', description: 'Estate settlement valuations' },
    { name: 'Step-Up Basis Valuation', path: '/services/step-up-basis-valuation', description: 'Capital gains basis establishment' },
    { name: 'Estate Tax Appraisal', path: '/services/estate-tax-appraisal', description: 'Form 706 tax valuations' },
    { name: 'Estate Appraisal', path: '/services/estate-appraisal', description: 'Probate appraisals' },
  ];

  return (
    <ServicePageTemplate
      title="Inheritance / Estate Tax Appraisal"
      slug="/services/inheritance-tax-appraisal"
      metaDescription="Inheritance tax appraisals in West Palm Beach. IRS Form 706 compliant valuations for estate tax returns and step-up basis documentation."
      breadcrumbCategory="Estate, Trust & Inheritance Appraisals"
      breadcrumbCategoryPath="/categories/estate-trust-inheritance-appraisals"
      content={content}
      relatedServices={relatedServices}
      faqs={faqs}
    />
  );
}
