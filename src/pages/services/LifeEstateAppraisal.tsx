import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function LifeEstateAppraisal() {
  const content = "A life estate appraisal values property where one party (life tenant) has the right to live in or use the property for their lifetime, while another party (remainderman) will receive full ownership upon the life tenant's death. These valuations are essential for estate planning, trust funding, tax reporting, and Medicaid planning. We calculate both the life estate interest and remainder interest values using IRS actuarial tables and current market data, providing defensible valuations for IRS Form 706, gift tax returns, and estate settlements.";

  const faqs = [
    { question: "What is a life estate?", answer: "A legal arrangement where one person has the right to live in or use property for their lifetime, with ownership transferring to others upon death." },
    { question: "Why do I need this valuation?", answer: "For estate tax returns (Form 706), gift tax reporting, Medicaid planning, trust funding, and estate settlement documentation." },
    { question: "How do you calculate the values?", answer: "We use IRS actuarial tables based on the life tenant's age, combined with the property's fair market value to determine present value of both interests." },
    { question: "Is this IRS-compliant?", answer: "Yes, our appraisals follow IRS guidelines for life estate and remainder interest valuations and are accepted by the IRS and courts." },
    { question: "How long does it take?", answer: "Typically 5-10 business days after property inspection, with expedited service available for urgent filings." },
  ];

  const relatedServices = [
    { name: 'Estate Appraisal', path: '/services/estate-appraisal', description: 'Probate and estate valuations' },
    { name: 'Trust Appraisal', path: '/services/trust-appraisal', description: 'Trust property valuations' },
    { name: 'Estate Tax Appraisal', path: '/services/estate-tax-appraisal', description: 'IRS Form 706 valuations' },
    { name: 'Gift Tax Appraisal', path: '/services/gift-tax-appraisal', description: 'Gift property valuations' },
  ];

  return (
    <ServicePageTemplate
      title="Life Estate Appraisal"
      slug="/services/life-estate-appraisal"
      metaDescription="Life estate appraisals in West Palm Beach. IRS-compliant valuations for life tenant and remainderman interests using actuarial tables."
      breadcrumbCategory="Estate, Trust & Inheritance Appraisals"
      breadcrumbCategoryPath="/categories/estate-trust-inheritance-appraisals"
      content={content}
      relatedServices={relatedServices}
      faqs={faqs}
    />
  );
}
