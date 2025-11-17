import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function TaxAppeals() {
  const faqs = [
    {
      question: "When is the deadline to file a tax appeal in my county?",
      answer: "Deadlines vary (often March–April); contact us early—we know every county's schedule."
    },
    {
      question: "How much can I save?",
      answer: "Average successful appeals reduce assessed value 10–25%, saving hundreds to thousands annually."
    },
    {
      question: "Do you appear at the hearing?",
      answer: "Yes—our appraisers regularly testify at informal and formal hearings."
    },
    {
      question: "What evidence do you include?",
      answer: "Recent comparable sales, photos, measurement verification, and inequity analysis."
    },
    {
      question: "Cost vs. potential savings?",
      answer: "Appraisal $450–$850; most clients recoup the fee in the first year."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tax Appeal Appraisal | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Property tax appeal appraisals in West Palm Beach. Challenge your assessment with professional evidence. Expert testimony available for tax court hearings." />
      </Helmet>
      <ServiceSchema
        name="Tax Appeal / Property Tax Grievance Appraisal"
        description="Professional tax appeal appraisal services providing evidence to challenge property tax assessments and reduce your tax burden."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Property tax appeal appraisal services"
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
                <span className="text-white">Tax Appeal</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Tax Appeal / Property Tax Grievance Appraisal
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Challenge your property tax assessment with professional evidence
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
                  Overassessed? Our tax appeal appraisals provide evidence of true market value to challenge your property tax assessment. We analyze recent comparable sales, assessment inequities, and local multiplier trends to build a strong case for county boards and tax courts.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  Thousands of homeowners and attorneys have successfully reduced their taxes using our reports.
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
              <h2 className="font-serif text-4xl font-bold mb-6">Ready to Challenge Your Assessment?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a tax appeal appraisal. Expert testimony available for hearings.
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
