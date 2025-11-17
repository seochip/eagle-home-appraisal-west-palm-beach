import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import RelatedServices from '../../components/RelatedServices';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function DivorceEstateAppraisals() {
  const relatedServices = [
    { name: 'Prenuptial Agreement Appraisal', path: '/services/prenuptial-appraisal', description: 'Document property values before marriage' },
    { name: 'Date of Marriage Valuation', path: '/services/date-of-marriage-valuation', description: 'Establish baseline value for separate property claims' },
    { name: 'Co-Owner Buyout Appraisal', path: '/services/co-owner-buyout-appraisal', description: 'Independent valuations for property buyouts' },
    { name: 'Expert Witness Appraisal', path: '/services/expert-witness-appraisal', description: 'Court testimony and litigation support' },
    { name: 'Retrospective Appraisal', path: '/services/retrospective-appraisal', description: 'Value property as of a past date' },
    { name: 'Partition Suit Appraisal', path: '/services/partition-suit-appraisal', description: 'Court-appointed valuations for forced sales' },
  ];

  const faqs = [
    {
      question: "What is a divorce appraisal?",
      answer: "An unbiased, court-admissible valuation of real estate owned during the marriage to help determine fair division of assets."
    },
    {
      question: "Does only one spouse have to order it?",
      answer: "Either spouse (or their attorney) can order it privately. Jointly ordered appraisals are often preferred to avoid disputes."
    },
    {
      question: "How is it different from a bank or refinance appraisal?",
      answer: "It follows only USPAP and state guidelines—no lender overlays—and can include retrospective values or detailed adjustment explanations."
    },
    {
      question: "How long does the report take?",
      answer: "Inspection within 48–72 hours, full report in 5–10 business days (2–3 days rush available)."
    },
    {
      question: "Is the report court-admissible?",
      answer: "Yes—our appraisers are experienced expert witnesses and the report is written to withstand cross-examination."
    },
    {
      question: "What documents do you need from us?",
      answer: "Divorce decree (if available), previous appraisals, settlement agreements, and any renovation receipts."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Divorce Appraisal | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Court-admissible divorce appraisals in West Palm Beach. USPAP-compliant valuations for equitable distribution in divorce proceedings. Expert witness testimony available." />
      </Helmet>
      <ServiceSchema
        name="Divorce Appraisal"
        description="Professional divorce appraisal services providing unbiased, court-admissible property valuations for equitable distribution in divorce proceedings."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Professional divorce appraisal services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/50" />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center space-x-2 text-sm text-gold-400 mb-4">
                <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-gold-300 transition-colors">Services</Link>
                <span>/</span>
                <span className="text-white">Divorce Appraisal</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Divorce Appraisal
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Unbiased, court-admissible property valuations for equitable distribution
              </p>
              <a
                href="tel:5612825509"
                className="inline-flex items-center space-x-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Request This Appraisal</span>
              </a>
            </motion.div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-50 via-white to-navy-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  A divorce appraisal (also called matrimonial or marital dissolution appraisal) is an independent, USPAP-compliant valuation of the marital home or investment properties performed by a certified residential appraiser for equitable distribution in divorce proceedings. Unlike lender appraisals, our divorce appraisals have no lender influence and are accepted by courts, mediators, and attorneys throughout your state.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  We provide a detailed, defensible report that withstands scrutiny in settlement negotiations or litigation. Typical turnaround is 5–10 business days with rush options available. Fees usually range $550–$1,200 depending on property complexity.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a professional divorce appraisal. Confidential service with expert witness testimony available.
              </p>
              <a
                href="tel:5612825509"
                className="inline-flex items-center space-x-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>(561) 282-5509</span>
              </a>
            </motion.div>
          </div>
        </section>

        <RelatedServices services={relatedServices} />
      </div>
    </>
  );
}
