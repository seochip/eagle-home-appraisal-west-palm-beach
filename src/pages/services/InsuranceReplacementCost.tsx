import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function InsuranceReplacementCost() {
  const content = "An insurance replacement cost valuation determines the cost to rebuild your home from the ground up in the event of total loss, ensuring adequate insurance coverage to avoid being underinsured. Unlike market value appraisals, replacement cost focuses on construction costs, materials, labor, and building to current code—not what the property would sell for. Essential after renovations, for high-value homes, historic properties, or when you suspect your coverage is inadequate, our detailed cost analysis protects you from devastating financial loss and helps negotiate fair insurance settlements after damage.";

  const faqs = [
    { question: "How is replacement cost different from market value?", answer: "Market value is what a buyer would pay. Replacement cost is what it costs to rebuild from scratch, including demolition, construction, and meeting current building codes." },
    { question: "Why might I be underinsured?", answer: "Construction costs increase faster than market values, renovations may not be reported to insurers, or initial coverage was based on outdated estimates rather than detailed analysis." },
    { question: "When should I get this appraisal?", answer: "After major renovations, when buying a high-value home, for historic or custom properties, or when insurance renewal shows coverage hasn't kept pace with construction costs." },
    { question: "What does the analysis include?", answer: "Detailed quantity survey of all building components, current local construction costs, code compliance costs, demolition/debris removal, and professional fees." },
    { question: "Will this help after a claim?", answer: "Yes, documentation of proper replacement cost before a loss strengthens your position in insurance negotiations and helps ensure full recovery." },
  ];

  const relatedServices = [
    { name: 'Diminution in Value', path: '/services/diminution-in-value-appraisal', description: 'Property damage valuations' },
    { name: 'Pre-Listing Appraisal', path: '/services/pre-listing-appraisals', description: 'Market value estimates' },
    { name: 'Portfolio Valuation', path: '/services/portfolio-valuation', description: 'Multiple property valuations' },
    { name: 'Financial Planning', path: '/services/financial-planning-appraisal', description: 'Asset valuations' },
  ];

  return (
    <ServicePageTemplate
      title="Insurance Replacement Cost Valuation"
      slug="/services/insurance-replacement-cost"
      metaDescription="Insurance replacement cost valuations in West Palm Beach. Ensure adequate coverage with detailed rebuild cost analysis. Avoid being underinsured."
      breadcrumbCategory="Specialty & Complex Valuations"
      breadcrumbCategoryPath="/categories/specialty-complex-valuations"
      content={content}
      relatedServices={relatedServices}
      faqs={faqs}
    />
  );
}
