import { motion } from 'framer-motion';
import { Star, Quote, Phone, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';
import { OrganizationSchema, BreadcrumbSchema } from '../components/Schema';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Michael Thompson',
      location: 'West Palm Beach, FL',
      rating: 5,
      text: 'Ray provided an incredibly detailed appraisal for our waterfront property. His knowledge of the local market was invaluable and the report exceeded all expectations. Highly professional service from start to finish.'
    },
    {
      name: 'Sarah Rodriguez',
      location: 'Palm Beach Gardens, FL',
      rating: 5,
      text: 'Fast, professional, and thorough. We needed an appraisal for PMI removal and Ray delivered quickly. Saved us over $200 per month on our mortgage payment!'
    },
    {
      name: 'David Chen',
      location: 'Jupiter, FL',
      rating: 5,
      text: 'Used Eagle for a divorce appraisal. Ray was professional, impartial, and the report was accepted without question by both attorneys and the court. Highly recommend for sensitive situations.'
    },
    {
      name: 'Jennifer Martinez',
      location: 'Boca Raton, FL',
      rating: 5,
      text: 'Ray appraised our estate property for tax purposes. His attention to detail and comprehensive report provided everything our attorney needed. Excellent communication throughout the process.'
    },
    {
      name: 'Robert Williams',
      location: 'Delray Beach, FL',
      rating: 5,
      text: 'Needed a pre-listing appraisal to price our home correctly. Ray\'s market analysis was spot-on. We listed at his suggested price and had multiple offers within a week. Worth every penny.'
    },
    {
      name: 'Amanda Foster',
      location: 'Wellington, FL',
      rating: 5,
      text: 'Outstanding service for our refinance appraisal. Ray was punctual, professional, and his report was delivered on time. Our lender accepted it immediately with no questions.'
    },
    {
      name: 'James Patterson',
      location: 'Palm Beach, FL',
      rating: 5,
      text: 'We\'ve used Eagle Home Appraisal multiple times for various properties. Ray\'s expertise with luxury waterfront homes is unmatched. Always accurate, always professional.'
    },
    {
      name: 'Lisa Anderson',
      location: 'Boynton Beach, FL',
      rating: 5,
      text: 'Ray helped us successfully appeal our property tax assessment. His detailed report and market analysis saved us thousands in annual property taxes. Couldn\'t be happier with the results.'
    },
    {
      name: 'Mark Sullivan',
      location: 'Lake Worth, FL',
      rating: 5,
      text: 'Fantastic experience from scheduling to final report. Ray answered all our questions and explained the appraisal process clearly. The report was comprehensive and easy to understand.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Client Testimonials | Eagle Home Appraisal - West Palm Beach</title>
        <meta name="description" content="Read reviews from satisfied clients across Palm Beach County. 5-star rated residential and commercial appraisal services by State-Certified Appraisers." />
      </Helmet>
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Testimonials', path: '/testimonials' }]} />

      <div className="min-h-screen bg-gradient-to-b from-white via-navy-50 to-white pt-24 lg:pt-32">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-6">
                <Quote className="w-16 h-16 text-gold-500" />
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 mb-6">
                Client <span className="text-gold-600">Testimonials</span>
              </h1>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto mb-8">
                Trusted by homeowners, attorneys, and lenders across Palm Beach County
              </p>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-gold-500 text-gold-500" />
                ))}
                <span className="ml-4 text-2xl font-bold text-navy-900">5.0</span>
                <span className="ml-2 text-navy-600">Average Rating</span>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  {...testimonial}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grain opacity-20" />
              <div className="relative text-center">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                  Experience the Eagle Home Appraisal Difference
                </h2>
                <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
                  Join hundreds of satisfied clients who trust us for accurate, professional appraisal services with exceptional customer care.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:5612825509"
                    className="inline-flex items-center space-x-3 px-10 py-5 bg-gold-500 text-white rounded-full font-semibold text-lg hover:bg-gold-600 transition-all duration-300 shadow-xl"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(561) 282-5509</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-3 px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 text-center"
            >
              <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8">
                What Sets Us Apart
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/60 backdrop-blur-sm border border-navy-100 rounded-2xl p-8">
                  <div className="text-4xl font-bold text-navy-900 mb-2">Rush</div>
                  <div className="text-navy-600">Appraisals Available</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-navy-100 rounded-2xl p-8">
                  <div className="text-4xl font-bold text-navy-900 mb-2">20+</div>
                  <div className="text-navy-600">Years Experience</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-navy-100 rounded-2xl p-8">
                  <div className="text-4xl font-bold text-navy-900 mb-2">100%</div>
                  <div className="text-navy-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
