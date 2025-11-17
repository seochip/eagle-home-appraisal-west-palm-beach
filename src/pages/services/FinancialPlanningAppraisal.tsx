import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function FinancialPlanningAppraisal() {
  const content = "Financial planning and wealth management appraisals provide current market values of real estate holdings for comprehensive financial planning, net worth statements, trust reporting, and investment portfolio analysis. Whether you're working with a financial advisor, preparing for retirement, establishing trust values, or documenting assets for lending purposes, our appraisals deliver accurate, defensible property values that integrate seamlessly into your overall financial picture. We coordinate with your financial planning team to ensure our valuations meet specific requirements and provide the documentation needed for informed decision-making.";

  const faqs = [
    { question: "Why do I need appraisals for financial planning?", answer: "Real estate is often the largest asset. Accurate current values are essential for proper asset allocation, retirement planning, estate planning, and wealth transfer strategies." },
    { question: "How often should I update property values?", answer: "Generally every 2-3 years for financial planning purposes, annually for trust reporting, or whenever making major financial decisions or market conditions change significantly." },
    { question: "Can you coordinate with my financial advisor?", answer: "Yes, we work directly with financial planners, CPAs, and wealth managers to ensure appraisals meet their specific needs and integrate into your overall plan." },
    { question: "What format do you provide?", answer: "Full appraisal reports with detailed analysis, or shorter summary formats for internal planning purposes, depending on your advisor's requirements." },
    { question: "Is this different from tax appraisals?", answer: "Yes, financial planning appraisals focus on current market value for decision-making, while tax appraisals may require specific dates, retrospective analysis, or IRS compliance." },
  ];

  const relatedServices = [
    { name: 'Portfolio Valuation', path: '/services/portfolio-valuation', description: 'Multiple property valuations' },
    { name: 'Estate Planning', path: '/services/estate-tax-appraisal', description: 'Estate tax valuations' },
    { name: 'Trust Appraisal', path: '/services/trust-appraisal', description: 'Trust asset valuations' },
    { name: 'Pre-Purchase Appraisal', path: '/services/pre-purchase-appraisal', description: 'Acquisition valuations' },
  ];

  return (
    <ServicePageTemplate
      title="Financial Planning & Wealth Management Appraisal"
      slug="/services/financial-planning-appraisal"
      metaDescription="Financial planning appraisals in West Palm Beach. Real estate valuations for wealth management, net worth statements, and investment portfolio analysis."
      breadcrumbCategory="Specialty & Complex Valuations"
      breadcrumbCategoryPath="/categories/specialty-complex-valuations"
      content={content}
      relatedServices={relatedServices}
      faqs={faqs}
    />
  );
}
