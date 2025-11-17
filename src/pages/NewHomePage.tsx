import { motion } from 'framer-motion';
import { Shield, Award, Clock, MapPin, Phone, ArrowRight, Home, Scale, FileText, Landmark, TrendingDown, Eye, Gavel, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { OrganizationSchema } from '../components/Schema';

export default function NewHomePage() {
  const services = [
    {
      icon: Scale,
      title: 'Divorce Appraisal',
      description: 'Unbiased, court-accepted property valuations for equitable asset division in divorce proceedings.',
      link: '/services/divorce-appraisal'
    },
    {
      icon: FileText,
      title: 'Estate & Probate Appraisal',
      description: 'Date-of-death valuations for probate court and IRS requirements.',
      link: '/services/estate-appraisal'
    },
    {
      icon: Landmark,
      title: 'Date of Death Valuation',
      description: 'IRS-compliant retrospective valuations for estate settlement and stepped-up basis.',
      link: '/services/date-of-death-valuation'
    },
    {
      icon: Gavel,
      title: 'Property Tax Appeal',
      description: 'Challenge unfair property tax assessments with professional evidence.',
      link: '/services/tax-appeals'
    },
    {
      icon: Eye,
      title: 'Pre-Listing Appraisal',
      description: 'Know your home\'s true value before you list in West Palm Beach.',
      link: '/services/pre-listing-appraisals'
    },
    {
      icon: TreePine,
      title: 'Expert Witness Services',
      description: 'Experienced testimony for litigation and legal proceedings throughout Florida.',
      link: '/services/expert-witness-appraisal'
    },
    {
      icon: TrendingDown,
      title: 'Trust Appraisal',
      description: 'Professional valuations for trust funding and distributions.',
      link: '/services/trust-appraisal'
    },
    {
      icon: Home,
      title: 'PMI Removal',
      description: 'Save thousands by eliminating private mortgage insurance with updated home valuations.',
      link: '/services/pmi-removal'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      location: 'West Palm Beach, FL',
      rating: 5,
      text: 'Ray provided an incredibly detailed appraisal for our waterfront property. His knowledge of the local market was invaluable and the report exceeded all expectations.'
    },
    {
      name: 'Sarah Rodriguez',
      location: 'Palm Beach Gardens, FL',
      rating: 5,
      text: 'Fast, professional, and thorough. We needed an appraisal for PMI removal and Ray delivered quickly. Saved us over $200/month!'
    },
    {
      name: 'David Chen',
      location: 'Jupiter, FL',
      rating: 5,
      text: 'Used Eagle for a divorce appraisal. Ray was professional, impartial, and the report was accepted without question. Highly recommend for sensitive situations.'
    }
  ];

  const areas = [
    'West Palm Beach', 'Palm Beach Gardens', 'Jupiter', 'Wellington',
    'Boca Raton', 'Delray Beach', 'Boynton Beach', 'Lake Worth',
    'Riviera Beach', 'North Palm Beach', 'Palm Beach Island', 'Royal Palm Beach'
  ];

  return (
    <>
      <Helmet>
        <title>Real Estate Appraiser West Palm Beach, FL | Eagle Home Appraisal</title>
        <meta name="description" content="Independent real estate appraiser in West Palm Beach, FL specializing in divorce, estate, tax appeal, and private valuations. Fast, court-accepted, USPAP-compliant reports with no lender influence. Serving Palm Beach County since 2003. Get your free quote today." />
      </Helmet>
      <OrganizationSchema />

      <div className="min-h-screen bg-gradient-to-b from-navy-50 via-white to-navy-50">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/25 to-navy-900/40 z-10" />
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: 'easeOut' }}
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=2000&brightness=20"
              alt="Real estate appraiser inspecting luxury home in West Palm Beach, Florida"
              className="w-full h-full object-cover brightness-110"
            />
          </div>

          <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                Trusted Real Estate Appraiser in <span className="text-gold-400">West Palm Beach, Florida</span>
              </h1>

              <h2 className="text-2xl sm:text-3xl text-white/95 mb-6 font-light max-w-3xl mx-auto drop-shadow-md">
                Independent, Private-Fee Residential Appraisals – Divorce • Estate • Tax Appeals • Litigation
              </h2>

              <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                As a certified real estate appraiser in West Palm Beach, we deliver unbiased, USPAP-compliant valuations for homeowners, attorneys, CPAs, and trustees throughout Palm Beach County and South Florida. Unlike lender appraisals, our reports are 100% independent and accepted by courts, the IRS, and probate offices.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-gold-500 text-white rounded-full font-semibold text-lg hover:bg-gold-600 transition-all duration-300 shadow-2xl flex items-center space-x-3"
                >
                  <span>Get Your Free Appraisal Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="tel:5612825509"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center space-x-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>(561) 282-5509</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-white/70 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        <section className="py-16 bg-white border-y border-navy-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Shield, label: 'State-Certified Appraisers' },
                { icon: Award, label: 'FHA Approved' },
                { icon: Clock, label: '20+ Years Experience' },
                { icon: MapPin, label: 'Local Market Expert' }
              ].map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center shadow-lg">
                    <badge.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-medium text-navy-800 text-sm sm:text-base">{badge.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-navy-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
                Why Homeowners & Attorneys Trust Our Real Estate Appraisal Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Local Expertise', description: 'Certified real estate appraiser with decades serving West Palm Beach and Palm Beach County' },
                { title: 'Private & Non-Lending', description: 'No bank influence, perfect for divorce, estate, tax grievance, and litigation' },
                { title: 'Fast Turnaround', description: 'Most reports in 5–10 business days (rush available)' },
                { title: 'Court & IRS Accepted', description: 'Experienced expert witness throughout Florida' },
                { title: 'Transparent Pricing', description: 'Flat fees, no surprises' },
                { title: 'USPAP Compliant', description: '100% independent reports following strict professional standards' }
              ].map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-semibold text-xl text-navy-900 mb-3">{feature.title}</h3>
                  <p className="text-navy-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-grain opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
                Most Requested Real Estate Appraisal Services in West Palm Beach
              </h2>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Independent, private-fee appraisals for every situation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                  Your Local <span className="text-gold-400">West Palm Beach Real Estate Appraiser</span>
                </h2>
                <div className="space-y-4 text-navy-100 leading-relaxed">
                  <p className="text-lg">
                    Eagle Home Appraisal is a leading independent real estate appraiser serving West Palm Beach, Palm Beach Gardens, Jupiter, Boca Raton, and all of Palm Beach County. We focus exclusively on private-fee work — divorce settlements, estate planning, tax grievances, trust valuations, and litigation support. As a state-certified residential real estate appraiser, we adhere strictly to USPAP standards and have testified hundreds of times in Florida courts.
                  </p>
                  <p>
                    Whether you need a <Link to="/services/retrospective-appraisal" className="text-gold-400 hover:text-gold-300 font-medium underline">retrospective valuation</Link> for stepped-up basis or an expert report for partition actions, our detailed reports give you the clarity and defensibility you deserve. Our real estate appraisal services include comprehensive market analysis, property inspections, and documentation that courts, the IRS, and trustees throughout South Florida rely on.
                  </p>
                  <p>
                    We specialize in complex situations like <Link to="/services/date-of-death-valuation" className="text-gold-400 hover:text-gold-300 font-medium underline">date of death valuations</Link>, <Link to="/services/trust-appraisal" className="text-gold-400 hover:text-gold-300 font-medium underline">trust appraisals</Link>, <Link to="/services/divorce-appraisal" className="text-gold-400 hover:text-gold-300 font-medium underline">divorce appraisals</Link>, and <Link to="/services/prenuptial-appraisal" className="text-gold-400 hover:text-gold-300 font-medium underline">prenuptial agreements</Link>. As your trusted West Palm Beach real estate appraiser, our commitment to accuracy, independence, and fast turnaround times has made Eagle Home Appraisal the first choice for property valuations throughout Palm Beach County.
                  </p>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 mt-8 px-8 py-4 bg-gold-500 text-white rounded-full font-semibold hover:bg-gold-600 transition-all duration-300 group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional appraiser reviewing property"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-500/20 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
                Areas We Serve
              </h2>
              <p className="text-xl text-navy-600">
                Proudly serving Palm Beach County and surrounding communities
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/60 backdrop-blur-sm border border-navy-100 rounded-xl p-4 text-center hover:border-gold-500 hover:shadow-lg transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 text-gold-600 mx-auto mb-2" />
                  <p className="font-medium text-navy-800">{area}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                to="/areas-we-serve"
                className="inline-flex items-center space-x-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors group"
              >
                <span>View Full Service Area</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-navy-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-navy-600">
                Trusted by homeowners, attorneys, and lenders across Palm Beach County
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  {...testimonial}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                to="/testimonials"
                className="inline-flex items-center space-x-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors group"
              >
                <span>Read More Reviews</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-20" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-navy-200 mb-12 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Fast, professional service with rush appraisals available.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="tel:5612825509"
                  className="w-full sm:w-auto px-10 py-5 bg-gold-500 text-white rounded-full font-semibold text-lg hover:bg-gold-600 transition-all duration-300 shadow-xl flex items-center justify-center space-x-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>(561) 282-5509</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
                >
                  Request a Quote Online
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
