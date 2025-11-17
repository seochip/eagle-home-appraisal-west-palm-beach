import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function BankruptcyValuation() {
  const faqs = [
    {
      question: "How quickly can you complete a bankruptcy appraisal?",
      answer: "Rush service: 3–5 business days."
    },
    {
      question: "Do you appraise for debtors or trustees?",
      answer: "Both—completely impartial."
    },
    {
      question: "Cost?",
      answer: "$500–$1,200."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bankruptcy Valuation (Chapter 7 & 13) | Eagle Home Appraisal</title>
        <meta name="description" content="Bankruptcy valuations in West Palm Beach. Fast, USPAP-compliant appraisals for Chapter 7 and Chapter 13 proceedings." />
      </Helmet>
      <ServiceSchema
        name="Bankruptcy Valuation (Chapter 7 & 13)"
        description="Professional bankruptcy valuation services for Chapter 7 liquidation and Chapter 13 repayment plans with fast turnaround times."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Bankruptcy valuation services"
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
                <span className="text-white">Bankruptcy Valuation</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Bankruptcy Valuation (Chapter 7 & 13)
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Fast, accurate valuations for bankruptcy proceedings
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
                  Bankruptcy trustees and attorneys require current, accurate valuations for Chapter 7 liquidation or Chapter 13 repayment plans.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  We deliver fast, USPAP-compliant reports that satisfy the U.S. Trustee and bankruptcy court.
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
              <h2 className="font-serif text-4xl font-bold mb-6">Need a Fast Valuation?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a bankruptcy valuation. Rush service available for time-sensitive filings.
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
