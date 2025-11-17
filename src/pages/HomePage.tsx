import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, Award, Clock, Shield } from 'lucide-react';
import { LocalBusinessSchema, BreadcrumbSchema } from '../components/Schema';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Eagle Home Appraisal | Professional Property Appraisals in West Palm Beach</title>
        <meta name="description" content="Expert residential appraisals in West Palm Beach, FL. Licensed appraisers for purchase, refinance, divorce, estate, PMI removal, and tax appeals. Fast, accurate service." />
      </Helmet>
      <LocalBusinessSchema />

      <div className="min-h-screen bg-beige-50">
        <section className="relative min-h-screen flex items-center pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=2000"
              alt="Luxury home in West Palm Beach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-beige-50 mb-8 leading-tight tracking-tight">
                Expert Property Appraisals
              </h1>
              <p className="text-2xl sm:text-3xl text-beige-100 mb-6 font-light leading-relaxed">
                West Palm Beach, Florida
              </p>
              <p className="text-xl text-beige-200 mb-12 leading-relaxed max-w-2xl">
                Certified residential appraisers delivering accurate valuations for purchase, refinance, legal matters, and more. Trusted by homeowners, attorneys, and lenders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="tel:+15614933707"
                  className="bg-beige-50 text-charcoal-900 px-10 py-5 hover:bg-beige-100 transition-all font-medium text-lg shadow-2xl flex items-center justify-center space-x-3 tracking-wide"
                >
                  <Phone className="h-6 w-6" />
                  <span>(561) 493-3707</span>
                </a>
                <a
                  href="#services"
                  className="bg-transparent border-2 border-beige-50 text-beige-50 px-10 py-5 hover:bg-beige-50 hover:text-charcoal-900 transition-all font-medium text-lg flex items-center justify-center space-x-3 tracking-wide"
                >
                  <span>View Services</span>
                  <ArrowRight className="h-6 w-6" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-2xl">
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-beige-50 mb-2">24-48hr</div>
                  <div className="text-sm text-beige-300 tracking-wide uppercase">Turnaround</div>
                </div>
                <div className="text-center border-l border-r border-beige-400">
                  <div className="text-4xl font-serif font-bold text-beige-50 mb-2">Licensed</div>
                  <div className="text-sm text-beige-300 tracking-wide uppercase">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-serif font-bold text-beige-50 mb-2">USPAP</div>
                  <div className="text-sm text-beige-300 tracking-wide uppercase">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-serif font-bold text-charcoal-900 mb-6">
                Appraisal Services
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive property valuations tailored to your specific needs. From residential purchases to complex legal matters, we provide the expertise you can trust.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Residential Appraisals',
                  description: 'Complete valuations for single-family homes, condos, townhouses, and multi-family properties.',
                  path: '/services/residential',
                  image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
                },
                {
                  title: 'Pre-Listing Appraisals',
                  description: 'Price your home correctly from day one. Sell faster and maximize your return.',
                  path: '/services/pre-listing',
                  image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800'
                },
                {
                  title: 'Divorce & Estate',
                  description: 'Objective, court-accepted valuations for equitable distribution and estate settlements.',
                  path: '/services/divorce-estate',
                  image: 'https://images.pexels.com/photos/8293700/pexels-photo-8293700.jpeg?auto=compress&cs=tinysrgb&w=800'
                },
                {
                  title: 'PMI Removal',
                  description: 'Eliminate private mortgage insurance and save thousands annually with a professional appraisal.',
                  path: '/services/pmi-removal',
                  image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800'
                },
                {
                  title: 'Tax Appeals',
                  description: 'Challenge unfair property assessments with professional documentation and reduce your tax burden.',
                  path: '/services/tax-appeals',
                  image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800'
                },
                {
                  title: 'FHA/VA Appraisals',
                  description: 'Government-backed loan appraisals meeting federal guidelines for veterans and homebuyers.',
                  path: '/services/fha-va',
                  image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
                }
              ].map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white border border-charcoal-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-4 group-hover:text-charcoal-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-charcoal-900 font-medium tracking-wide">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-beige-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/7578966/pexels-photo-7578966.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Professional appraiser with clipboard"
                  className="w-full h-full object-cover shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-5xl font-serif font-bold text-charcoal-900 mb-8">
                  Why Choose Eagle Home Appraisal
                </h2>
                <p className="text-xl text-charcoal-600 mb-12 leading-relaxed">
                  With years of experience serving West Palm Beach and surrounding areas, we provide accurate, timely appraisals that meet the highest professional standards.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: Award,
                      title: 'Licensed & Certified',
                      description: 'Florida-licensed residential appraisers with extensive training and credentials.'
                    },
                    {
                      icon: Clock,
                      title: 'Fast Turnaround',
                      description: 'Most appraisals completed within 24-48 hours without sacrificing quality.'
                    },
                    {
                      icon: Shield,
                      title: 'USPAP Compliant',
                      description: 'All appraisals follow Uniform Standards of Professional Appraisal Practice.'
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-charcoal-900 flex items-center justify-center">
                          <feature.icon className="h-8 w-8 text-beige-50" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-charcoal-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-charcoal-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl sm:text-6xl font-serif font-bold text-beige-50 mb-8">
              Get Your Appraisal Today
            </h2>
            <p className="text-2xl text-beige-200 mb-12 leading-relaxed">
              Contact us for a free consultation and quote. Professional service, accurate results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="tel:+15614933707"
                className="bg-beige-50 text-charcoal-900 px-12 py-6 hover:bg-beige-100 transition-all font-medium text-xl shadow-2xl flex items-center justify-center space-x-3 tracking-wide"
              >
                <Phone className="h-6 w-6" />
                <span>(561) 493-3707</span>
              </a>
              <a
                href="mailto:info@eaglehomeappraisalwpb.com"
                className="bg-transparent border-2 border-beige-50 text-beige-50 px-12 py-6 hover:bg-beige-50 hover:text-charcoal-900 transition-all font-medium text-xl flex items-center justify-center space-x-3 tracking-wide"
              >
                <span>Email Us</span>
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                <h3 className="text-2xl font-serif font-bold text-beige-50 mb-4">Service Areas</h3>
                <p className="text-beige-200 leading-relaxed">
                  West Palm Beach, Palm Beach Gardens, Jupiter, Lake Worth, Boynton Beach, Delray Beach, and surrounding Palm Beach County areas.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-beige-50 mb-4">Business Hours</h3>
                <div className="text-beige-200 space-y-2">
                  <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                  <p>Saturday: 9:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
