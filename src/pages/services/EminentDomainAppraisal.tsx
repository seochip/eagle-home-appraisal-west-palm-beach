import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function EminentDomainAppraisal() {
  const faqs = [
    {
      question: "Do you testify in condemnation trials?",
      answer: "Yes—regularly."
    },
    {
      question: "Can you value severance damages?",
      answer: "Yes—impact on remainder parcel is fully analyzed."
    },
    {
      question: "Typical fee?",
      answer: "$2,000–$10,000+."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Eminent Domain / Condemnation Appraisal | Eagle Home Appraisal</title>
        <meta name="description" content="Eminent domain appraisals in West Palm Beach. Professional condemnation valuations with highest-and-best-use analysis and damage calculations." />
      </Helmet>
      <ServiceSchema
        name="Eminent Domain / Condemnation Appraisal"
        description="Professional eminent domain appraisal services with highest-and-best-use analysis, partial-taking valuations, and damage calculations for condemnation proceedings."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/4164850/pexels-photo-4164850.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Eminent domain appraisal services"
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
                <span className="text-white">Eminent Domain</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Eminent Domain / Condemnation Appraisal
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Fair compensation valuations for government takings
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
                  When government takes private property, you deserve full and fair compensation.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  We provide highest-and-best-use analysis, partial-taking valuations, and damage calculations for condemnation proceedings.
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
              <h2 className="font-serif text-4xl font-bold mb-6">Protect Your Rights</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for an eminent domain appraisal. Expert testimony for full and fair compensation.
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
