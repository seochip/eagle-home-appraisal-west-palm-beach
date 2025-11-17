import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function EquitableDistributionAppraisal() {
  return (
    <ServicePageTemplate
      title="Equitable Distribution Appraisal"
      metaDescription="Fair market valuations for equitable distribution of marital assets in divorce. Court-accepted appraisals in West Palm Beach, FL."
      breadcrumbCategory="Divorce & Family Law Appraisals"
      breadcrumbCategoryPath="/categories/divorce-family-law-appraisals"
      content="<p>Professional appraisals for fair division of marital real estate assets. Our reports provide unbiased valuations accepted by Florida family courts for equitable distribution proceedings.</p><p>We help ensure both parties receive accurate, defensible valuations for property settlement negotiations or court-ordered asset division.</p>"
      relatedServices={[
        { name: 'Divorce Appraisal', path: '/services/divorce-appraisal', description: 'Court-admissible divorce valuations' },
        { name: 'Date of Marriage Valuation', path: '/services/date-of-marriage-valuation', description: 'Establish baseline values' },
        { name: 'Co-Owner Buyout Appraisal', path: '/services/co-owner-buyout-appraisal', description: 'Independent buyout valuations' },
      ]}
      faqs={[
        { question: "What is equitable distribution?", answer: "Fair (not necessarily equal) division of marital assets based on various factors including contributions, economic circumstances, and duration of marriage." },
        { question: "Is this the same as a divorce appraisal?", answer: "Yes, it's another term for the same service—an independent valuation used to divide marital property fairly." },
      ]}
    />
  );
}
