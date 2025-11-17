import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function EstatePlanningStepUpBasis() {
  const faqs = [
    {
      question: "What is a step-up basis valuation?",
      answer: "It establishes the fair market value of inherited property as of the date of death, which becomes the new tax basis for beneficiaries."
    },
    {
      question: "Why is this important for estate planning?",
      answer: "Proper step-up basis documentation can save heirs thousands in capital gains taxes when they eventually sell the property."
    },
    {
      question: "When should I get this appraisal?",
      answer: "Ideally within 6-12 months of the inheritance, while market data from the date of death is still fresh."
    },
    {
      question: "Is this the same as an estate tax appraisal?",
      answer: "Similar, but step-up basis focuses on the beneficiary's new tax basis rather than estate tax liability."
    },
    {
      question: "Typical cost?",
      answer: "$650–$1,500."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Estate Planning & Step-Up Basis Valuation | Eagle Home Appraisal</title>
        <meta name="description" content="Estate planning and step-up basis valuations in West Palm Beach. Professional appraisals to minimize capital gains taxes for inherited property." />
      </Helmet>
      <ServiceSchema
        name="Estate Planning & Step-Up Basis Valuation"
        description="Professional estate planning and step-up basis valuation services establishing tax basis for inherited property to minimize capital gains liability."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/7876741/pexels-photo-7876741.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Estate planning and step-up basis valuation services"
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
                <span className="text-white">Estate Planning & Step-Up Basis</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Estate Planning & Step-Up Basis Valuation
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Minimize capital gains taxes on inherited property
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
                  Estate planning and step-up basis valuations establish the fair market value of inherited real estate as of the date of death, creating the new tax basis for beneficiaries. This critical documentation can save heirs thousands in capital gains taxes when they eventually sell the property.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  Our USPAP-compliant, IRS-accepted reports provide the detailed historical analysis and market data needed to support stepped-up basis claims and minimize future tax liability for your heirs.
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
              <h2 className="font-serif text-4xl font-bold mb-6">Protect Your Heirs from Excess Taxes</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for estate planning and step-up basis valuations. IRS-compliant reports that minimize capital gains liability.
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
