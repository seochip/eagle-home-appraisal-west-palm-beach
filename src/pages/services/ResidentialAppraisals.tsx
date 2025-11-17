import { Link } from 'react-router-dom';
import { Home, CheckCircle, Phone, ArrowRight, Clock, Award, Shield } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function ResidentialAppraisals() {
  const faqs = [
    {
      question: "How long does a residential appraisal take?",
      answer: "The inspection itself typically takes 30-60 minutes depending on the property size and complexity. Most residential appraisals are completed and delivered within a few days to a week from the inspection date. Rush services are available for urgent needs."
    },
    {
      question: "What do I need to prepare for the appraisal?",
      answer: "Ensure all areas of the home are accessible, including attic, basement, and garage. Provide a list of recent improvements or renovations with costs. Have HOA documents ready if applicable. The appraiser will need to access all rooms and measure the exterior."
    },
    {
      question: "How much does a residential appraisal cost?",
      answer: "Residential appraisal costs vary based on property size, location, and complexity. Single-family homes typically range from $350-$600. Contact us for a free quote specific to your property."
    },
    {
      question: "What factors affect my home's appraised value?",
      answer: "Key factors include location, property condition, square footage, number of bedrooms and bathrooms, recent upgrades, comparable sales in the area, lot size, and current market conditions. The appraiser evaluates all these elements to determine fair market value."
    },
    {
      question: "Is the appraisal the same as a home inspection?",
      answer: "No. An appraisal determines the market value of your property, while a home inspection identifies potential defects and needed repairs. Appraisals are required by lenders, while inspections are typically optional but recommended for buyers."
    },
    {
      question: "Can I use the appraisal for multiple lenders?",
      answer: "Generally yes, though some lenders may have specific requirements or time limits. Most appraisals are valid for 120 days. Check with your lenders about their acceptance policies before ordering."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Residential Home Appraisals West Palm Beach | Eagle Home Appraisal</title>
        <meta name="description" content="Professional residential appraisals for single-family homes, condos, and townhouses in West Palm Beach. Fast turnaround, USPAP compliant, lender approved." />
      </Helmet>
      <ServiceSchema
        name="Residential Appraisals"
        description="Professional residential property appraisals for single-family homes, condos, townhouses, and multi-family properties in West Palm Beach, FL"
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gradient-to-b from-white via-navy-50 to-white pt-24 lg:pt-32">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 text-sm text-navy-600 mb-6">
                <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-gold-600 transition-colors">Services</Link>
                <span>/</span>
                <span className="text-gold-600">Residential Appraisals</span>
              </div>

              <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Home className="h-4 w-4" />
                <span>Residential Services</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-navy-900 mb-6 leading-tight">
                Residential Property Appraisals
              </h1>
              <p className="text-xl text-navy-600 leading-relaxed mb-8 max-w-3xl">
                Comprehensive, accurate valuations for single-family homes, condos, townhouses, and multi-family properties up to 4 units in West Palm Beach and surrounding areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="tel:5612825509" className="inline-flex items-center justify-center space-x-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-all shadow-xl">
                  <Phone className="h-5 w-5" />
                  <span>(561) 282-5509</span>
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center space-x-2 bg-white text-gold-600 px-8 py-4 rounded-full font-semibold hover:bg-navy-50 transition-all border-2 border-gold-600">
                  <span>Get Free Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {[
                  { icon: Shield, text: 'State-Certified Appraisers' },
                  { icon: Award, text: 'FHA Approved' },
                  { icon: Clock, text: 'Rush Services Available' }
                ].map((badge, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm border border-navy-100 rounded-xl p-4">
                    <badge.icon className="w-6 h-6 text-gold-600" />
                    <span className="font-medium text-navy-800">{badge.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Beautiful residential home in West Palm Beach"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6">Complete Residential Appraisal Services</h2>
                <p className="text-lg text-navy-600 mb-6 leading-relaxed">
                  Our residential appraisals provide detailed, objective evaluations of your property's market value. Whether you're purchasing, refinancing, or selling, we deliver accurate assessments that lenders trust and homeowners rely on.
                </p>
                <p className="text-lg text-navy-600 mb-6 leading-relaxed">
                  Each appraisal includes a comprehensive inspection, detailed market analysis, and comparison with recent sales of similar properties in your area.
                </p>
                <div className="space-y-4">
                  {[
                    'Single-family homes',
                    'Condominiums',
                    'Townhouses',
                    'Multi-family properties (2-4 units)',
                    'New construction',
                    'Investment properties'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-gold-600 flex-shrink-0" />
                      <span className="text-navy-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-50 to-white rounded-3xl p-12 mb-20"
            >
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-12 text-center">Common Uses for Residential Appraisals</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Purchase',
                    description: 'Required by lenders to confirm the property value matches the loan amount. Protects buyers from overpaying.'
                  },
                  {
                    title: 'Refinance',
                    description: 'Determine current market value to secure better loan terms or access home equity through refinancing.'
                  },
                  {
                    title: 'Home Equity Loans',
                    description: 'Establish property value to qualify for home equity loans or lines of credit (HELOC).'
                  },
                  {
                    title: 'Estate Planning',
                    description: 'Accurate valuations for estate settlements, inheritance planning, and tax purposes.'
                  },
                  {
                    title: 'Divorce Settlement',
                    description: 'Impartial property valuations for equitable distribution of assets during divorce proceedings.'
                  },
                  {
                    title: 'Financial Planning',
                    description: 'Know your property value for retirement planning, insurance coverage, or investment decisions.'
                  }
                ].map((use, index) => (
                  <div key={index} className="bg-white border border-navy-100 rounded-2xl p-6 hover:shadow-lg transition-all">
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{use.title}</h3>
                    <p className="text-navy-600 leading-relaxed">{use.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-12 text-white mb-20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grain opacity-20" />
              <div className="relative">
                <h2 className="font-serif text-4xl font-bold mb-12 text-center">What's Included in Your Appraisal Report</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Complete property description and characteristics',
                    'Detailed interior and exterior inspection notes',
                    'Analysis of comparable recent sales',
                    'Neighborhood and market trend analysis',
                    'High-quality property photographs',
                    'Property measurements and floor plan sketch',
                    'Assessment of property condition',
                    'Final market value estimate',
                    'Explanation of valuation methodology',
                    'Compliance with USPAP standards'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-gold-400 flex-shrink-0 mt-1" />
                      <span className="text-navy-100 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-navy-600 mb-8">
              Contact us today for a free quote on your residential appraisal. Professional service with rush options available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5612825509" className="inline-flex items-center justify-center space-x-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-all shadow-xl">
                <Phone className="h-5 w-5" />
                <span>(561) 282-5509</span>
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center space-x-2 bg-white text-gold-600 px-8 py-4 rounded-full font-semibold hover:bg-navy-50 transition-all border-2 border-gold-600">
                <span>Request Quote Online</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
