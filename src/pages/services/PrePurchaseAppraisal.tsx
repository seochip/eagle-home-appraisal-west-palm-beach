import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function PrePurchaseAppraisal() {
  const faqs = [
    {
      question: "Why get an appraisal before buying instead of relying on the lender's?",
      answer: "Your lender's appraisal is for the bank, not you—and you may not even see the full report. Ours is 100% yours."
    },
    {
      question: "Can this help me negotiate a lower price?",
      answer: "Absolutely—many buyers save thousands by presenting our objective report to the seller."
    },
    {
      question: "How fast can I get it?",
      answer: "Inspection within 24–48 hours of order, full report in 3–5 business days (rush available)."
    },
    {
      question: "Do you appraise condos, townhomes, and new construction too?",
      answer: "Yes—any residential property up to 4 units."
    },
    {
      question: "Typical fee?",
      answer: "$500–$800 depending on property type and location."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pre-Purchase Appraisal | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Pre-purchase appraisals in West Palm Beach. Independent property valuations before you buy. Negotiate confidently with professional market analysis." />
      </Helmet>
      <ServiceSchema
        name="Pre-Purchase Appraisal"
        description="Professional pre-purchase appraisal services providing independent property valuations to help buyers negotiate confidently and make informed decisions."
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-white">
        <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Pre-purchase appraisal services"
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
                <span className="text-white">Pre-Purchase Appraisal</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-6">
                Pre-Purchase Appraisal
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Independent professional valuation before you make an offer
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
                  A pre-purchase appraisal gives you an independent, professional opinion of value before you make an offer or remove contingencies. Perfect for competitive markets, new construction, or unique properties where you suspect the asking price may not match true market value. Our USPAP-compliant report arms you with data to negotiate confidently or walk away.
                </p>
                <p className="text-lg text-navy-700 leading-relaxed mb-6">
                  We serve buyers, buyer agents, and attorneys throughout your state.
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
              <h2 className="font-serif text-4xl font-bold mb-6">Ready to Buy with Confidence?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a pre-purchase appraisal. Get the independent valuation you need to negotiate from strength.
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
