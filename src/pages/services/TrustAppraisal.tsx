import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import RelatedServices from '../../components/RelatedServices';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function TrustAppraisal() {
  const relatedServices = [
    { name: 'Estate & Probate Appraisal', path: '/services/estate-appraisal', description: 'Court-accepted valuations for estate settlement' },
    { name: 'Estate Planning & Step-Up Basis', path: '/services/estate-planning-step-up-basis', description: 'Establish cost basis for tax planning' },
    { name: 'Gift Tax Appraisal', path: '/services/gift-tax-appraisal', description: 'IRS-compliant valuations for gifted property' },
    { name: 'Family Transfer Appraisal', path: '/services/family-transfer-appraisal', description: 'Valuations for intrafamily transfers' },
    { name: 'Estate Tax Appraisal', path: '/services/estate-tax-appraisal', description: 'Form 706 compliant estate tax valuations' },
  ];

  const faqs = [
    {
      question: "When is a trust appraisal required?",
      answer: "Usually when real property is being placed into the trust, removed, or distributed to beneficiaries."
    },
    {
      question: "Do you handle irrevocable life insurance trusts (ILITs) too?",
      answer: "Yes, when real estate is involved."
    },
    {
      question: "Is the report confidential?",
      answer: "100%—only released to the ordering party or their attorney."
    },
    {
      question: "Typical fee range?",
      answer: "$600–$1,200."
    },
    {
      question: "How long does it take?",
      answer: "5–10 business days."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Trust Appraisal | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Trust appraisals in West Palm Beach. Professional valuations for revocable and irrevocable trusts. IRS-compliant reports for trustees and estate attorneys." />
      </Helmet>
      <ServiceSchema
        name="Trust Appraisal"
        description="Professional trust appraisal services for revocable living trusts, irrevocable trusts, and trust transfers with detailed, date-specific reports."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/8293641/pexels-photo-8293641.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Trust appraisal services"
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
                <span className="text-white">Trust Appraisal</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Trust Appraisal
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Professional valuations for trust funding and distributions
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
                  Trust appraisals establish fair market value for revocable living trusts, irrevocable trusts, or trust transfers. Required for proper funding, beneficiary distributions, or IRS compliance.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  We provide detailed, date-specific reports that trustees and estate attorneys rely on.
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
                Contact us today for a professional trust appraisal. Confidential, detailed reports for trustees and attorneys.
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
