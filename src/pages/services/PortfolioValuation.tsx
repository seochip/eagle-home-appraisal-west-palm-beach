import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function PortfolioValuation() {
  const content = "Portfolio valuation services for high-net-worth individuals provide comprehensive appraisals of multiple properties held for investment, estate planning, or wealth management purposes. Whether you own rental properties, vacation homes, development land, or mixed-use assets, we deliver detailed valuations of your entire real estate portfolio with consistent methodology and coordinated timing. Ideal for financial planning, estate planning, divorce settlements, partnership accounting, and wealth management reporting, our portfolio appraisals provide the complete picture needed for strategic decision-making.";

  const faqs = [
    { question: "What qualifies as a portfolio valuation?", answer: "Appraisal of multiple properties (typically 3 or more) owned by the same individual, family, trust, or entity, valued as a coordinated package rather than individual orders." },
    { question: "Do you offer portfolio discounts?", answer: "Yes, we provide competitive pricing for multiple properties appraised simultaneously, with discounts increasing based on quantity, proximity, and similarity of properties." },
    { question: "Can you appraise different property types?", answer: "Yes, we handle single-family rentals, multi-family, vacation homes, land, and other residential property types within a portfolio." },
    { question: "What's included in the report?", answer: "Individual appraisals for each property plus an executive summary showing aggregate values, property-by-property breakdown, and portfolio analysis." },
    { question: "How long does portfolio valuation take?", answer: "Depends on quantity and locations, typically 2-3 weeks for 5-10 properties. We can coordinate inspection schedules to minimize disruption." },
  ];

  const relatedServices = [
    { name: 'Financial Planning', path: '/services/financial-planning-appraisal', description: 'Wealth management valuations' },
    { name: 'Estate Tax Appraisal', path: '/services/estate-tax-appraisal', description: 'Estate planning valuations' },
    { name: 'Divorce Appraisal', path: '/services/divorce-appraisal', description: 'Asset division valuations' },
    { name: 'Trust Appraisal', path: '/services/trust-appraisal', description: 'Trust asset valuations' },
  ];

  return (
    <ServicePageTemplate
      title="Portfolio Valuation for High-Net-Worth Individuals"
      slug="/services/portfolio-valuation"
      metaDescription="Real estate portfolio valuations in West Palm Beach. Multi-property appraisals for high-net-worth individuals. Estate planning and wealth management."
      breadcrumbCategory="Specialty & Complex Valuations"
      breadcrumbCategoryPath="/categories/specialty-complex-valuations"
      content={content}
      relatedServices={relatedServices}
      faqs={faqs}
    />
  );
}
