import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function PreListingAppraisals() {
  const faqs = [
    {
      question: "Why pay for an appraisal instead of a free agent opinion?",
      answer: "Appraisers are impartial and state-licensed; agents have an incentive to list high or low."
    },
    {
      question: "Will this help me sell faster?",
      answer: "Yes—correctly priced homes sell 20–50% faster and for closer to asking price."
    },
    {
      question: "Do you provide a full written report?",
      answer: "Yes—USPAP-compliant report you can share with buyers or agents."
    },
    {
      question: "Typical fee?",
      answer: "$450–$750 for single-family homes."
    },
    {
      question: "Turnaround time?",
      answer: "Inspection next day, report in 3–5 business days."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pre-Listing Appraisal | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Pre-listing appraisals in West Palm Beach. Know your home's true value before listing. Independent valuations for confident pricing and faster sales." />
      </Helmet>
      <ServiceSchema
        name="Pre-Listing / Pre-Sale Appraisal"
        description="Professional pre-listing appraisal services providing independent valuations to help you price your home correctly and sell faster."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Pre-listing appraisal services"
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
                <span className="text-white">Pre-Listing Appraisal</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Pre-Listing / Pre-Sale Appraisal
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Know your home's true value before you list
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
                  Know your home's true value before you list. A professional pre-listing appraisal helps you (and your agent) price correctly the first time, avoid price reductions, and negotiate from strength.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  Our independent opinion is based on current market data—not Zillow estimates or hopeful agent CMAs.
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
              <h2 className="font-serif text-4xl font-bold mb-6">Ready to List with Confidence?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a pre-listing appraisal. Get the accurate value you need to price right the first time.
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
