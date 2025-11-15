import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function CapitalGainsTaxAppraisal() {
  const content = "A capital gains tax appraisal establishes the cost basis of property for IRS capital gains calculations when you sell real estate. Whether you inherited property, received it as a gift, bought it years ago without good records, or need to calculate gain on a portion of a property, our retrospective valuations provide defensible documentation for your tax return. We determine fair market value as of the acquisition date, date of death (for inherited property), or conversion date (for personal-use to rental), helping minimize your capital gains tax liability with accurate basis determination.";

  const faqs = [
    { question: "When do I need a capital gains appraisal?", answer: "When selling property and you need to establish original cost basis, especially for inherited property, gifts, old purchases without records, or converted rental properties." },
    { question: "Can you appraise for dates in the past?", answer: "Yes, we perform retrospective appraisals for any past date using historical market data, comparable sales from that time, and property records." },
    { question: "What if I inherited the property?", answer: "Inherited property gets stepped-up basis to date-of-death value. Our appraisal documents this to minimize or eliminate capital gains tax." },
    { question: "Does this reduce my tax bill?", answer: "A proper basis appraisal ensures you don't overpay taxes by documenting the highest defensible value at acquisition, which reduces your taxable gain." },
    { question: "Is this IRS-compliant?", answer: "Yes, our USPAP-compliant retrospective appraisals are accepted by the IRS and tax courts as basis documentation." },
  ];

  const relatedServices = [
    { name: 'Step-Up Basis Valuation', path: '/services/step-up-basis-valuation', description: 'Inherited property basis' },
    { name: 'Retrospective Appraisal', path: '/services/retrospective-appraisal', description: 'Historical date valuations' },
    { name: 'Gift Tax Appraisal', path: '/services/gift-tax-appraisal', description: 'Gift property valuations' },
    { name: 'Date of Death Valuation', path: '/services/date-of-death-valuation', description: 'Estate settlement values' },
  ];

  return (
    <ServicePageTemplate
      title="Capital Gains Tax Appraisal"
      slug="/services/capital-gains-tax-appraisal"
      metaDescription="Capital gains tax appraisals in West Palm Beach. Establish cost basis for IRS with retrospective valuations. Minimize capital gains tax liability."
      breadcrumbCategory="Tax Appeals & IRS"
      breadcrumbCategoryPath="/categories/tax-appeals-irs"
      content={content}
      relatedServices={relatedServices}
      faqs={faqs}
    />
  );
}
