import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function FamilyLimitedPartnershipValuation() {
  const content = "A Family Limited Partnership (FLP) valuation determines the fair market value of partnership interests in real estate held within an FLP structure, commonly used for estate planning and wealth transfer. These complex appraisals value both the underlying real estate and the partnership interests themselves, applying appropriate discounts for lack of control and lack of marketability. Required for gift tax returns when transferring limited partnership interests, estate tax returns, and FLP formations, our valuations follow IRS guidelines and court precedents to support legitimate valuation discounts while avoiding aggressive positions that trigger IRS audits.";

  const faqs = [
    { question: "What is a Family Limited Partnership?", answer: "A legal entity that holds family assets (often real estate) with general partners controlling operations and limited partners having passive interests, used for estate planning and asset protection." },
    { question: "Why are FLP interests discounted?", answer: "Limited partners lack control over decisions and cannot force distributions or sales. These restrictions justify valuation discounts typically 25-45% from pro-rata asset value." },
    { question: "When do I need this appraisal?", answer: "When forming an FLP, gifting limited partnership interests to family members, preparing estate tax returns, or documenting basis for tax planning." },
    { question: "What do you appraise?", answer: "We value the underlying real estate at fair market value, then apply appropriate discounts to value the limited partnership interests themselves." },
    { question: "How do you support the discounts?", answer: "Through analysis of partnership agreement restrictions, marketability studies, case law review, and comparison to similar partnership transfers and public market data." },
  ];

  const relatedServices = [
    { name: 'Fractional Interest Valuation', path: '/services/fractional-interest-valuation', description: 'Partial ownership valuations' },
    { name: 'Estate Tax Appraisal', path: '/services/estate-tax-appraisal', description: 'Estate tax valuations' },
    { name: 'Gift Tax Appraisal', path: '/services/gift-tax-appraisal', description: 'Gift valuations' },
    { name: 'Financial Planning', path: '/services/financial-planning-appraisal', description: 'Wealth planning valuations' },
  ];

  return (
    <ServicePageTemplate
      title="Family Limited Partnership (FLP) Valuation"
      slug="/services/family-limited-partnership-valuation"
      metaDescription="Family Limited Partnership valuations in West Palm Beach. IRS-compliant FLP interest appraisals with defensible discounts for estate and gift tax."
      breadcrumbCategory="Specialty & Complex Valuations"
      breadcrumbCategoryPath="/categories/specialty-complex-valuations"
      content={content}
      relatedServices={relatedServices}
      faqs={faqs}
    />
  );
}
