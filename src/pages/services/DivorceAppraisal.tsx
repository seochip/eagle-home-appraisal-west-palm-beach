import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function DivorceAppraisal() {
  const relatedServices = [
    { name: 'Prenuptial Agreement Appraisal', path: '/services/prenuptial-appraisal', description: 'Document property values before marriage' },
    { name: 'Date of Marriage Valuation', path: '/services/date-of-marriage-valuation', description: 'Establish baseline values for divorce cases' },
    { name: 'Equitable Distribution Appraisal', path: '/services/equitable-distribution-appraisal', description: 'Fair division of marital assets' },
    { name: 'Co-Owner Buyout Appraisal', path: '/services/co-owner-buyout-appraisal', description: 'Independent valuations for buyouts' },
    { name: 'Expert Witness Appraisal', path: '/services/expert-witness-appraisal', description: 'Court testimony and litigation support' },
  ];

  const faqs = [
    { question: "What is a divorce appraisal?", answer: "An unbiased, court-admissible valuation of real estate to help determine fair division of assets in divorce proceedings." },
    { question: "Does only one spouse need to order it?", answer: "Either spouse or their attorney can order an appraisal. Jointly ordered appraisals are often preferred to avoid disputes." },
    { question: "How is it different from a bank appraisal?", answer: "Divorce appraisals follow USPAP and state guidelines without lender overlays, and can include retrospective values or detailed adjustment explanations." },
    { question: "How long does the report take?", answer: "Inspection within 48-72 hours, full report in 5-10 business days (2-3 days rush available)." },
    { question: "Is the report court-admissible?", answer: "Yes. Our appraisers are experienced expert witnesses and reports are written to withstand cross-examination." },
  ];

  const content = `
    <p className="text-xl">Professional divorce appraisals providing unbiased, court-accepted property valuations for equitable distribution of marital assets in West Palm Beach and throughout Palm Beach County.</p>

    <h2>When Do You Need a Divorce Appraisal?</h2>
    <p>If you're going through a divorce and own real estate together, an independent appraisal is essential for:</p>
    <ul>
      <li>Establishing current fair market value for asset division</li>
      <li>Supporting buyout negotiations when one spouse keeps the property</li>
      <li>Providing court-admissible evidence in contested divorces</li>
      <li>Refinancing to remove an ex-spouse from the mortgage</li>
    </ul>

    <h2>Our Divorce Appraisal Process</h2>
    <p>We provide detailed, USPAP-compliant reports that are accepted by Florida family courts and attorneys statewide. Our reports include comprehensive market analysis, detailed property descriptions, and clear explanations of valuation methodology.</p>

    <p>Unlike lender appraisals, our divorce valuations are performed solely under professional appraisal standards without lender-imposed restrictions. This often provides a more accurate representation of true market value.</p>

    <h2>Expert Witness Testimony Available</h2>
    <p>If your case goes to trial, our appraisers are experienced expert witnesses who can testify and defend their valuations under cross-examination.</p>
  `;

  const content2 = "A divorce appraisal (also called matrimonial or marital dissolution appraisal) is an independent, USPAP-compliant valuation of the marital home or investment properties performed by a certified residential appraiser for equitable distribution in divorce proceedings. Unlike lender appraisals, our divorce appraisals have no lender influence and are accepted by courts, mediators, and attorneys throughout Florida. We provide a detailed, defensible report that withstands scrutiny in settlement negotiations or litigation. Typical turnaround is 5–10 business days with rush options available. Fees usually range $550–$1,200 depending on property complexity.";

  const faqs2 = [
    { question: "What is a divorce appraisal?", answer: "An unbiased, court-admissible valuation of real estate owned during the marriage to help determine fair division of assets." },
    { question: "Does only one spouse have to order it?", answer: "Either spouse (or their attorney) can order it privately. Jointly ordered appraisals are often preferred to avoid disputes." },
    { question: "How is it different from a bank or refinance appraisal?", answer: "It follows only USPAP and state guidelines—no lender overlays—and can include retrospective values or detailed adjustment explanations." },
    { question: "How long does the report take?", answer: "Inspection within 48–72 hours, full report in 5–10 business days (2–3 days rush available)." },
    { question: "Is the report court-admissible?", answer: "Yes—our appraisers are experienced expert witnesses and the report is written to withstand cross-examination." },
    { question: "What documents do you need from us?", answer: "Divorce decree (if available), previous appraisals, settlement agreements, and any renovation receipts." },
  ];

  const relatedServices2 = [
    { name: 'Prenuptial Agreement Appraisal', path: '/services/prenuptial-appraisal', description: 'Document property values before marriage' },
    { name: 'Date of Marriage Valuation', path: '/services/date-of-marriage-valuation', description: 'Establish baseline values for divorce cases' },
    { name: 'Equitable Distribution Appraisal', path: '/services/equitable-distribution-appraisal', description: 'Fair division of marital assets' },
    { name: 'Co-Owner Buyout Appraisal', path: '/services/co-owner-buyout-appraisal', description: 'Independent valuations for buyouts' },
    { name: 'Non-Marital Property Division', path: '/services/non-marital-property-division', description: 'Separate property valuations' },
    { name: 'Expert Witness Services', path: '/services/expert-witness-appraisal', description: 'Court testimony support' },
  ];

  return (
    <ServicePageTemplate
      title="Divorce Appraisal"
      slug="/services/divorce-appraisal"
      metaDescription="Court-admissible divorce appraisals in West Palm Beach. USPAP-compliant valuations for equitable distribution. Fees $550-$1,200."
      breadcrumbCategory="Divorce & Family Law Appraisals"
      breadcrumbCategoryPath="/categories/divorce-family-law-appraisals"
      content={content2}
      relatedServices={relatedServices2}
      faqs={faqs2}
    />
  );
}
