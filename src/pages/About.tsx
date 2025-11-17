import { motion } from 'framer-motion';
import { Shield, Award, Clock, CheckCircle, Target, Users, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BreadcrumbSchema, OrganizationSchema } from '../components/Schema';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Accuracy',
      description: 'Meticulous attention to detail in every appraisal, using comprehensive market data and analysis.'
    },
    {
      icon: Clock,
      title: 'Flexible Timelines',
      description: 'Rush appraisals welcomed. We work with your schedule while maintaining quality standards.'
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Responsive communication and personalized service throughout the appraisal process.'
    },
    {
      icon: TrendingUp,
      title: 'Market Expertise',
      description: '20+ years of local market knowledge across Florida real estate markets.'
    }
  ];

  const credentials = [
    'Certified Residential Appraisers on Staff',
    'Certified General Appraisers on Staff',
    'FHA Approved Appraisers',
    '20+ Years Combined Professional Experience',
    'Thousands of Completed Appraisals',
    'Court-Accepted Expert Testimony'
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Eagle Home Appraisal - West Palm Beach</title>
        <meta name="description" content="Learn about Eagle Home Appraisal. State-Certified Residential and General Appraisers, FHA Approved with 20+ years serving West Palm Beach and Palm Beach County." />
      </Helmet>
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'About', path: '/about' }]} />

      <div className="min-h-screen bg-gradient-to-b from-white via-navy-50 to-white pt-24 lg:pt-32">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 mb-6">
                About <span className="text-gold-600">Eagle Home Appraisal</span>
              </h1>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Trusted expertise in residential and commercial property appraisals since 2004
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center lg:justify-start"
              >
                <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/Ray Hall Standing in a Suit.jpg"
                    alt="Ray Hall - Certified General Appraiser"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold-500/20 rounded-full blur-3xl -z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6">
                  Ray Hall
                  <span className="block text-2xl text-gold-600 mt-2">
                    Certified General Appraiser
                  </span>
                </h2>

                <div className="space-y-4 text-navy-700 leading-relaxed mb-8">
                  <p>
                    Ray Hall is the President and Chief Appraiser at Eagle Home Appraisal, bringing extensive experience as a Certified General Appraiser in Florida. Ray began his appraisal career in 2004, working with a large residential appraisal firm before transitioning to commercial appraisal work on diverse property types.
                  </p>
                  <p>
                    In 2011, Ray worked as a review appraiser for JP Morgan Chase, gaining valuable insight into institutional lending requirements and quality standards. He founded his own company in 2017, with a focus on providing quality appraisals and educating clients about real estate valuation.
                  </p>
                  <p>
                    Known as "Ray the Appraiser" on social media, Ray is committed to transparency in the appraisal process. He created online advice shows "Ask #raytheappraiser" and "Driving with #raytheappraiser" to help educate property owners about appraisals and real estate values.
                  </p>
                  <p>
                    Ray provides expert witness testimony in court proceedings and serves clients throughout West Palm Beach, Palm Beach County, and the greater Florida market. His commitment to accuracy, professionalism, and client education has made Eagle Home Appraisal a trusted name in property valuation.
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-gold-600 mb-4">
                  <Shield className="w-6 h-6" />
                  <span className="font-semibold text-lg">Certified General Appraiser</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-12 lg:p-16 text-white mb-24 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grain opacity-20" />
              <div className="relative">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-8 text-center">
                  Professional Credentials
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {credentials.map((credential, index) => (
                    <motion.div
                      key={credential}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span className="text-navy-100">{credential}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mb-12 text-center">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/60 backdrop-blur-md border border-navy-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-navy-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gold-50 to-navy-50 rounded-3xl p-12 lg:p-16 text-center"
            >
              <div className="flex justify-center space-x-12 mb-8">
                <div>
                  <div className="text-5xl font-bold text-navy-900 mb-2">20+</div>
                  <div className="text-navy-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-navy-900 mb-2">5000+</div>
                  <div className="text-navy-600">Appraisals Completed</div>
                </div>
              </div>
              <p className="text-xl text-navy-700 max-w-3xl mx-auto">
                Serving homeowners, legal professionals, financial institutions, and government agencies with integrity, precision, and professionalism.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
