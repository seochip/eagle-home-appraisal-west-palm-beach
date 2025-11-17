import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function NonMaritalPropertyDivision() {
  const content = "A non-marital (or separate) property appraisal establishes the value of real estate owned before marriage or received as a gift/inheritance during the marriage. In Florida divorce proceedings, non-marital property is not subject to equitable distribution if properly documented. Our certified appraisers provide USPAP-compliant valuations with date-specific retrospective analysis to prove separate property claims. We help protect assets that should remain with the original owner, supported by thorough documentation and expert testimony if needed.";

  const faqs = [
    { question: "What qualifies as non-marital property in Florida?", answer: "Property acquired before marriage, inherited property, gifts to one spouse only, and assets excluded by valid prenuptial agreement." },
    { question: "Why do I need an appraisal for separate property?", answer: "To establish and document the value, especially if the property increased in value during marriage or if marital funds were used for improvements." },
    { question: "Can I use an old appraisal from before the marriage?", answer: "Historic appraisals help but courts usually require current valuations plus retrospective analysis to show value changes over time." },
    { question: "What if marital funds paid the mortgage?", answer: "The court may award a marital interest in appreciation. Our appraisal can help quantify this for fair division." },
    { question: "How long does the appraisal take?", answer: "Typically 5-10 business days after inspection, with rush options available for urgent court deadlines." },
  ];

  const relatedServices = [
    { name: 'Divorce Appraisal', path: '/services/divorce-appraisal', description: 'Court-admissible divorce valuations' },
    { name: 'Prenuptial Appraisal', path: '/services/prenuptial-appraisal', description: 'Pre-marriage property documentation' },
    { name: 'Date of Marriage Valuation', path: '/services/date-of-marriage-valuation', description: 'Retrospective valuations' },
    { name: 'Equitable Distribution', path: '/services/equitable-distribution-appraisal', description: 'Fair asset division' },
  ];

  return (
    <ServicePageTemplate
      title="Non-Marital Property Division Appraisal"
      slug="/services/non-marital-property-division"
      metaDescription="Non-marital property appraisals in West Palm Beach. Protect separate assets in Florida divorce with retrospective valuations and expert documentation."
      breadcrumbCategory="Divorce & Family Law Appraisals"
      breadcrumbCategoryPath="/categories/divorce-family-law-appraisals"
      content={content}
      relatedServices={relatedServices}
      faqs={faqs}
    />
  );
}
