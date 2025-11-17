import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function FamilyTransferAppraisal() {
  const faqs = [
    {
      question: "Why do I need an appraisal if it's a family deal?",
      answer: "To support the gift-of-equity amount and avoid IRS challenges."
    },
    {
      question: "Can you value discounted sales (e.g., to heirs)?",
      answer: "Yes—full FMV plus explanation of discount."
    },
    {
      question: "Fee range?",
      answer: "$600–$1,400."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Family Transfer Appraisal | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Family transfer appraisals in West Palm Beach. Independent valuations for intra-family sales and gift-of-equity transactions." />
      </Helmet>
      <ServiceSchema
        name="Family Transfer / Intra-Family Sale Appraisal"
        description="Professional family transfer appraisal services documenting fair market value for intra-family sales and gift tax purposes."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/7876741/pexels-photo-7876741.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Family transfer appraisal services"
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
                <span className="text-white">Family Transfer</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Family Transfer / Intra-Family Sale Appraisal
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Independent valuations for family property transfers
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
                  Transferring property to children or relatives at below-market value? Banks and the IRS often require an independent appraisal to document fair market value for gift tax or financing purposes.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  Our reports protect both parties and ensure IRS compliance.
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
              <h2 className="font-serif text-4xl font-bold mb-6">Ready to Transfer Property?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a family transfer appraisal. Documentation for gift-of-equity and IRS compliance.
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
