import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function DateOfDeathValuation() {
  const faqs = [
    {
      question: "Is a date-of-death valuation the same as a probate appraisal?",
      answer: "Very similar—both are usually retrospective, but date-of-death is specifically for IRS stepped-up basis and estate tax."
    },
    {
      question: "How do you determine value on a past date?",
      answer: "We use MLS data, public records, and historical market trends from that exact time period."
    },
    {
      question: "Can you also provide an alternate valuation date (6 months later)?",
      answer: "Yes—many estates elect the alternate date to reduce tax liability; we provide both when requested."
    },
    {
      question: "How much does it cost?",
      answer: "$650–$1,400 based on property complexity and age of valuation date."
    },
    {
      question: "How long does it take?",
      answer: "7–14 business days standard; rush service available."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Date of Death Valuation | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="IRS-compliant date of death valuations for estate tax and stepped-up basis. Retrospective appraisals by certified appraisers in West Palm Beach, FL." />
      </Helmet>
      <ServiceSchema
        name="Date of Death Valuation"
        description="Professional date of death valuation services providing IRS-compliant retrospective appraisals for estate tax and stepped-up basis purposes."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Professional date of death valuation services"
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
                <span className="text-white">Date of Death Valuation</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Date of Death Valuation
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                IRS-compliant valuations for estate tax and stepped-up basis
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
                  A date-of-death valuation establishes the fair market value of real property as of the decedent's exact date of death for federal estate tax (Form 706) and stepped-up basis purposes. Our retrospective reports are IRS-compliant, USPAP-conforming, and prepared by state-certified residential appraisers with decades of estate experience.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  We research historical sales, adjustments, and market conditions specific to that date to deliver bulletproof documentation.
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
                Contact us today for a professional date of death valuation. IRS-compliant reports with historical market analysis.
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
