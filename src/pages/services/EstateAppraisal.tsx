import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import RelatedServices from '../../components/RelatedServices';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function EstateAppraisal() {
  const relatedServices = [
    { name: 'Date of Death Valuation', path: '/services/date-of-death-valuation', description: 'Retrospective valuations for probate and estate tax' },
    { name: 'Trust Appraisal', path: '/services/trust-appraisal', description: 'Valuations for trust funding and distribution' },
    { name: 'Estate Tax Appraisal', path: '/services/estate-tax-appraisal', description: 'IRS Form 706 compliant valuations' },
    { name: 'Step-Up Basis Valuation', path: '/services/estate-planning-step-up-basis', description: 'Establish cost basis for inherited property' },
    { name: 'Family Transfer Appraisal', path: '/services/family-transfer-appraisal', description: 'Valuations for gifting property to family' },
    { name: 'Gift Tax Appraisal', path: '/services/gift-tax-appraisal', description: 'IRS-compliant valuations for property gifts' },
  ];

  const faqs = [
    {
      question: "Why do I need an estate appraisal for probate?",
      answer: "Most states require a professional valuation to establish fair market value for asset distribution and creditor claims."
    },
    {
      question: "Do you provide date-of-death valuations for IRS Form 706?",
      answer: "Yes—our retrospective reports are specifically formatted for federal estate tax filings."
    },
    {
      question: "How far back can you value the property?",
      answer: "We routinely perform date-of-death valuations going back several years with proper historical data."
    },
    {
      question: "What is the typical cost?",
      answer: "$600–$1,500 depending on property type and valuation date."
    },
    {
      question: "How quickly can I get the report?",
      answer: "Standard 7–10 business days; expedited 3–5 days available."
    },
    {
      question: "Do you appraise personal property too?",
      answer: "We focus on real estate; we can refer trusted personal-property appraisers when needed."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Estate & Probate Appraisal | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Professional estate and probate appraisals for date-of-death valuations. USPAP-compliant reports accepted by probate courts and IRS. West Palm Beach, FL." />
      </Helmet>
      <ServiceSchema
        name="Estate & Probate Appraisal"
        description="Professional estate and probate appraisal services providing accurate date-of-death valuations for probate court and IRS requirements."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Professional estate and probate appraisal services"
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
                <span className="text-white">Estate & Probate Appraisal</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Estate & Probate Appraisal
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Accurate date-of-death valuations for probate court and IRS requirements
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
                  When settling an estate or navigating probate, you need an accurate date-of-death or alternate valuation date report that satisfies the probate court and IRS requirements. Our certified appraisers specialize in retrospective estate valuations for homes, condominiums, and small income properties. Reports are USPAP-compliant, fully documented, and accepted nationwide.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  We help executors, trustees, and estate attorneys avoid penalties and disputes with clear, defensible market value opinions.
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
                Contact us today for a professional estate or probate appraisal. Accurate, court-accepted valuations.
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
