import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function DiminutionInValueAppraisal() {
  const content = "A diminution in value appraisal measures the loss in property value caused by defects, damage, environmental contamination, construction defects, neighboring nuisances, or other adverse conditions. Used in litigation, insurance claims, construction disputes, and environmental cases, these specialized appraisals compare the property's value before and after the damage or discovery of the defect. We provide expert analysis and testimony showing the economic impact and supporting your damage claims with defensible methodology accepted in Florida courts.";

  const faqs = [
    { question: "What causes diminution in value?", answer: "Construction defects, foundation damage, mold, environmental contamination, adjacent property issues, stigma from crimes/deaths, or any condition that negatively affects marketability." },
    { question: "How do you calculate the loss?", answer: "We determine market value before the condition (as if perfect), then value in current condition with the defect/damage. The difference is the diminution in value." },
    { question: "Is this accepted in court?", answer: "Yes, our before-and-after methodology follows accepted appraisal standards and has been successfully used in litigation throughout Florida." },
    { question: "When should I get this appraisal?", answer: "As soon as damage is discovered or litigation begins. Early documentation protects your claim and prevents disputes about value loss." },
    { question: "Can you testify as an expert witness?", answer: "Yes, our appraisers are experienced expert witnesses and can explain valuation conclusions to judges and juries in clear, compelling terms." },
  ];

  const relatedServices = [
    { name: 'Litigation Support', path: '/services/litigation-support-appraisal', description: 'Legal dispute valuations' },
    { name: 'Expert Witness Services', path: '/services/expert-witness-appraisal', description: 'Court testimony' },
    { name: 'Insurance Claims', path: '/services/insurance-replacement-cost', description: 'Insurance valuations' },
    { name: 'Eminent Domain', path: '/services/eminent-domain-appraisal', description: 'Condemnation appraisals' },
  ];

  return (
    <ServicePageTemplate
      title="Diminution in Value Appraisal"
      slug="/services/diminution-in-value-appraisal"
      metaDescription="Diminution in value appraisals in West Palm Beach. Measure property value loss from defects, damage, contamination. Expert litigation support."
      breadcrumbCategory="Litigation & Expert Witness Services"
      breadcrumbCategoryPath="/categories/litigation-expert-witness"
      content={content}
      relatedServices={relatedServices}
      faqs={faqs}
    />
  );
}
