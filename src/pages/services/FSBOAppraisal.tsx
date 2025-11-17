import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function FSBOAppraisal() {
  const faqs = [
    {
      question: "Is an appraisal better than online estimates for pricing my FSBO?",
      answer: "Yes—online estimates can be off by 10–30%. Our report uses verified closed sales and adjustments."
    },
    {
      question: "Will buyers take my appraisal seriously?",
      answer: "Absolutely—our reports are USPAP-compliant and signed by state-certified appraisers."
    },
    {
      question: "Can I use the same report later for the buyer's lender?",
      answer: "Usually not (lenders require their own), but it dramatically reduces appraisal contingency issues."
    },
    {
      question: "Turnaround time?",
      answer: "3–7 business days standard."
    },
    {
      question: "Cost?",
      answer: "$450–$750."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FSBO Appraisal | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="For Sale By Owner appraisals in West Palm Beach. Professional valuations for FSBO sellers. Price your home correctly without an agent." />
      </Helmet>
      <ServiceSchema
        name="FSBO (For Sale By Owner) Appraisal"
        description="Professional FSBO appraisal services providing unbiased valuations for homeowners selling without an agent."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="FSBO appraisal services"
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
                <span className="text-white">FSBO Appraisal</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                FSBO (For Sale By Owner) Appraisal
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Professional valuations for homeowners selling without an agent
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
                  Selling without an agent? Our FSBO appraisals provide the same professional, unbiased valuation that listing agents use to set asking prices. Avoid leaving money on the table or pricing too high and sitting on the market.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  Report is delivered in a buyer-friendly format you can share during showings.
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
              <h2 className="font-serif text-4xl font-bold mb-6">Ready to Price Your FSBO Right?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a professional FSBO appraisal. Get the accurate valuation you need to sell confidently.
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
      </div>
    </>
  );
}
