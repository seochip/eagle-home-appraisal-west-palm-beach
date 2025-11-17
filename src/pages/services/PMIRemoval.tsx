import { Link } from 'react-router-dom';
import { TrendingDown, CheckCircle, Phone, ArrowRight, Clock, Award, Shield, DollarSign } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function PMIRemoval() {
  const faqs = [
    {
      question: "What is PMI and why do I pay it?",
      answer: "Private Mortgage Insurance (PMI) is required by lenders when your down payment is less than 20% of the home's value. It protects the lender if you default on the loan, typically costing $30-$70 per $100,000 borrowed annually."
    },
    {
      question: "When can I request PMI removal?",
      answer: "You can request PMI removal once your loan balance reaches 80% of your home's current value. This can happen through regular payments or if your home has appreciated in value since purchase."
    },
    {
      question: "How much can I save by removing PMI?",
      answer: "Homeowners typically save $100-$300 per month by eliminating PMI, which equals $1,200-$3,600 annually. Over the life of your loan, this can mean tens of thousands of dollars in savings."
    },
    {
      question: "What does my lender need to remove PMI?",
      answer: "Most lenders require a professional appraisal showing your loan-to-value ratio is 80% or less, a good payment history, and proof that no junior liens exist on the property."
    },
    {
      question: "How quickly can I get my PMI removal appraisal?",
      answer: "We can complete PMI removal appraisals quickly, with rush services available for urgent needs. Once you receive the appraisal, you can submit it to your lender for immediate processing."
    },
    {
      question: "What if my home hasn't appreciated enough?",
      answer: "If your appraisal shows you haven't reached 80% loan-to-value, we'll provide guidance on when to try again or what improvements might help increase your home's value."
    }
  ];

  return (
    <>
      <Helmet>
        <title>PMI Removal Appraisals West Palm Beach | Eliminate Mortgage Insurance</title>
        <meta name="description" content="Remove private mortgage insurance with a professional appraisal. Save hundreds monthly on your West Palm Beach home. Fast PMI removal valuations." />
      </Helmet>
      <ServiceSchema
        name="PMI Removal Appraisals"
        description="Professional appraisals to help homeowners eliminate private mortgage insurance and reduce monthly payments in West Palm Beach"
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
                <span className="text-gold-600">PMI Removal</span>
              </div>

              <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingDown className="h-4 w-4" />
                <span>Cost Savings Service</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-navy-900 mb-6 leading-tight">
                PMI Removal Appraisals
              </h1>
              <p className="text-xl text-navy-600 leading-relaxed mb-4 max-w-3xl">
                Stop paying private mortgage insurance. Save hundreds per month with a professional PMI removal appraisal.
              </p>
              <p className="text-2xl font-serif font-bold text-gold-600 mb-8">
                Typical savings: $1,200-$3,600 annually
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="tel:5612825509" className="inline-flex items-center justify-center space-x-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-all shadow-xl">
                  <Phone className="h-5 w-5" />
                  <span>(561) 282-5509</span>
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center space-x-2 bg-white text-gold-600 px-8 py-4 rounded-full font-semibold hover:bg-navy-50 transition-all border-2 border-gold-600">
                  <span>Calculate Your Savings</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {[
                  { icon: Shield, text: 'State-Certified Appraisers' },
                  { icon: Award, text: 'Lender-Approved Reports' },
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
                <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6">Eliminate Your PMI Payment</h2>
                <p className="text-lg text-navy-600 mb-6 leading-relaxed">
                  If your home has increased in value or you've paid down your mortgage, you may be eligible to remove PMI and save thousands annually. Our professional appraisal provides the documentation your lender needs.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    'Stop paying unnecessary insurance',
                    'Reduce monthly mortgage payment',
                    'Keep more money in your pocket',
                    'Fast turnaround with rush options',
                    'Lender-approved reports',
                    'Simple submission process'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-gold-600 flex-shrink-0" />
                      <span className="text-navy-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Family celebrating savings on mortgage payment"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-50 to-white rounded-3xl p-12 mb-20"
            >
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-12 text-center">How PMI Removal Works</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Contact Us',
                    description: 'Call or submit a request. We will verify your eligibility and schedule your appraisal.'
                  },
                  {
                    step: '02',
                    title: 'Appraisal',
                    description: 'Our appraiser inspects your property and analyzes recent comparable sales.'
                  },
                  {
                    step: '03',
                    title: 'Report Delivery',
                    description: 'Receive your comprehensive appraisal report quickly.'
                  },
                  {
                    step: '04',
                    title: 'Submit to Lender',
                    description: 'Forward the appraisal to your lender and eliminate your PMI payment.'
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="text-6xl font-serif font-bold text-navy-200 mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                    <p className="text-navy-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-12 text-white text-center relative overflow-hidden mb-20"
            >
              <div className="absolute inset-0 bg-grain opacity-20" />
              <div className="relative">
                <h2 className="font-serif text-4xl font-bold mb-6">Calculate Your Potential Savings</h2>
                <p className="text-xl text-navy-100 mb-12">If you're paying PMI, you could save $1,200-$3,600 per year</p>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-6">
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="w-8 h-8 text-gold-400" />
                    </div>
                    <div className="text-4xl font-serif font-bold text-gold-400 mb-2">$150</div>
                    <div className="text-navy-200">Average Monthly PMI</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-6">
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="w-8 h-8 text-gold-400" />
                    </div>
                    <div className="text-4xl font-serif font-bold text-gold-400 mb-2">$1,800</div>
                    <div className="text-navy-200">Annual Savings</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-gold-400/30 rounded-2xl p-6">
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="w-8 h-8 text-gold-400" />
                    </div>
                    <div className="text-4xl font-serif font-bold text-gold-400 mb-2">$18,000</div>
                    <div className="text-navy-200">10-Year Savings</div>
                  </div>
                </div>
                <p className="text-lg text-navy-100">Appraisal cost: $400-$500 | Pays for itself in 3 months</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6">Start Saving Today</h2>
            <p className="text-xl text-navy-600 mb-8">
              Contact us for a PMI removal appraisal and take the first step toward eliminating your mortgage insurance payment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5612825509" className="inline-flex items-center justify-center space-x-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-all shadow-xl">
                <Phone className="h-5 w-5" />
                <span>(561) 282-5509</span>
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center space-x-2 bg-white text-gold-600 px-8 py-4 rounded-full font-semibold hover:bg-navy-50 transition-all border-2 border-gold-600">
                <span>Request Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
