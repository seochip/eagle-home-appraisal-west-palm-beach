import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function CharitableContributionAppraisal() {
  const faqs = [
    {
      question: "What is a qualified appraisal for the IRS?",
      answer: "One performed by a qualified appraiser following specific IRS guidelines (we meet every requirement)."
    },
    {
      question: "Do you appraise conservation easements?",
      answer: "Yes—our appraisers have completed dozens."
    },
    {
      question: "Cost?",
      answer: "$1,500–$15,000+ depending on property and easement complexity."
    },
    {
      question: "Timeline?",
      answer: "2–8 weeks."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Charitable Contribution Appraisal | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Charitable contribution appraisals in West Palm Beach. IRS-qualified valuations for real estate donations and conservation easements." />
      </Helmet>
      <ServiceSchema
        name="Charitable Contribution / Donation Appraisal"
        description="Professional charitable contribution appraisal services providing IRS-qualified valuations for real estate donations and conservation easements."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Charitable contribution appraisal services"
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
                <span className="text-white">Charitable Contribution</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Charitable Contribution / Donation Appraisal
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                IRS-qualified appraisals for real estate donations
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
                  Donating real estate or a conservation easement? IRS rules require a qualified appraisal for deductions over $5,000.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  We provide fully substantiated reports that withstand IRS scrutiny for bargain sales, outright gifts, or remainder interests.
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
                Contact us today for a charitable contribution appraisal. IRS-qualified reports that withstand scrutiny.
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
