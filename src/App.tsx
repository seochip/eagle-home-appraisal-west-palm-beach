import { useState } from 'react';
import { Home, Phone, Mail, MapPin, CheckCircle, Clock, Shield, Award, Menu, X, Star, FileText, TrendingUp, Users } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
                <Home className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Eagle Home Appraisal</h1>
                <p className="text-xs text-gray-600">West Palm Beach, FL</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('why-choose-us')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Why Choose Us</button>
              <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Process</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg">
                Get Started
              </button>
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 hover:text-blue-600 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="flex flex-col space-y-1 px-4 py-4">
              <button onClick={() => scrollToSection('services')} className="text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('why-choose-us')} className="text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">Why Choose Us</button>
              <button onClick={() => scrollToSection('process')} className="text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">Process</button>
              <button onClick={() => scrollToSection('about')} className="text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="mx-4 mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">Get Started</button>
            </nav>
          </div>
        )}
      </header>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4" />
                <span>Certified Residential Appraisers</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Home Appraisals in <span className="text-blue-600">West Palm Beach</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get accurate, reliable property valuations from licensed experts. Fast turnaround, competitive pricing, and unmatched service quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                  <span>Request Appraisal</span>
                  <CheckCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
                <a href="tel:+15619000000" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold shadow-md hover:shadow-lg flex items-center justify-center space-x-2 border-2 border-blue-600">
                  <Phone className="h-5 w-5" />
                  <span>(561) 900-0000</span>
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">5.0 Rating</span>
                </div>
                <div className="h-6 w-px bg-gray-300"></div>
                <div className="text-sm text-gray-600">
                  <span className="font-bold text-gray-900">500+</span> Appraisals Completed
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Beautiful West Palm Beach home"
                  className="rounded-xl shadow-lg w-full h-80 object-cover"
                />
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Clock className="h-6 w-6 text-white mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">24-48 Hr</p>
                    <p className="text-blue-100 text-xs">Turnaround</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Shield className="h-6 w-6 text-white mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">Licensed</p>
                    <p className="text-blue-100 text-xs">Appraisers</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Award className="h-6 w-6 text-white mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">Certified</p>
                    <p className="text-blue-100 text-xs">FL State</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Appraisal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive valuation solutions for every property type and purpose
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: 'Residential Appraisals',
                description: 'Complete valuations for single-family homes, condos, townhouses, and multi-family properties up to 4 units.',
                features: ['Purchase', 'Refinance', 'Estate Planning']
              },
              {
                icon: TrendingUp,
                title: 'Pre-Listing Appraisals',
                description: 'Determine the optimal listing price for your property to maximize your sale potential and reduce time on market.',
                features: ['Market Analysis', 'Price Optimization', 'Competitive Edge']
              },
              {
                icon: FileText,
                title: 'Divorce & Estate Appraisals',
                description: 'Unbiased property valuations for legal proceedings, estate settlements, and equitable distribution.',
                features: ['Court-Accepted', 'Objective Analysis', 'Detailed Reports']
              },
              {
                icon: Shield,
                title: 'PMI Removal',
                description: 'Help eliminate private mortgage insurance by proving your home equity meets lender requirements.',
                features: ['Cost Savings', 'Quick Process', 'Lender Approved']
              },
              {
                icon: Users,
                title: 'Tax Appeals',
                description: 'Professional appraisals to support property tax assessments and potential reduction requests.',
                features: ['Documented Evidence', 'Appeal Support', 'Fair Assessment']
              },
              {
                icon: CheckCircle,
                title: 'FHA/VA Appraisals',
                description: 'Specialized appraisals meeting federal guidelines for FHA and VA loan programs.',
                features: ['Compliant Reports', 'Fast Processing', 'Expert Knowledge']
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-300 group">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Eagle Home Appraisal</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the difference of working with dedicated appraisal professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: 'Fast Turnaround',
                description: 'Most appraisals completed within 24-48 hours. Rush services available for urgent needs.'
              },
              {
                icon: Award,
                title: 'Certified Experts',
                description: 'Florida-licensed and certified residential appraisers with years of local market experience.'
              },
              {
                icon: Shield,
                title: 'USPAP Compliant',
                description: 'All appraisals follow Uniform Standards of Professional Appraisal Practice guidelines.'
              },
              {
                icon: Star,
                title: 'Local Knowledge',
                description: 'Deep understanding of West Palm Beach neighborhoods, trends, and property values.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <benefit.icon className="h-10 w-10 text-white mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-100 text-lg">Appraisals Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">24-48</div>
                <div className="text-blue-100 text-lg">Hour Turnaround</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-blue-100 text-lg">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Simple, Streamlined Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your property appraised is easy with our straightforward approach
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" style={{ top: '3rem' }}></div>

            {[
              {
                step: '01',
                title: 'Contact Us',
                description: 'Reach out via phone, email, or our online form. Provide basic property details and appraisal purpose.'
              },
              {
                step: '02',
                title: 'Schedule Inspection',
                description: 'We arrange a convenient time for our appraiser to visit and inspect your property thoroughly.'
              },
              {
                step: '03',
                title: 'Market Analysis',
                description: 'Our experts analyze comparable sales, market trends, and property features to determine value.'
              },
              {
                step: '04',
                title: 'Receive Report',
                description: 'Get your comprehensive appraisal report within 24-48 hours, delivered digitally or by mail.'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg relative z-10">
                  {item.step}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="West Palm Beach neighborhood"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Eagle Home Appraisal</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Eagle Home Appraisal is West Palm Beach's trusted name in residential property valuation. Our team of Florida-licensed, certified appraisers brings extensive local market knowledge and professional expertise to every assignment.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We understand that accurate appraisals are critical for your financial decisions. Whether you're buying, selling, refinancing, or settling an estate, our commitment is to provide you with reliable, objective valuations backed by thorough research and analysis.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our appraisals comply with all federal and state regulations, including USPAP standards, and are accepted by all major lenders and institutions throughout Florida.
              </p>
              <div className="space-y-4">
                {[
                  'Florida State Certified Residential Appraisers',
                  'USPAP Compliant Appraisal Reports',
                  'Accepted by All Major Lenders',
                  'Comprehensive Market Knowledge'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Get Your Appraisal Started Today</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Contact us for a free quote or to schedule your property appraisal. Our team is ready to provide you with fast, accurate, and professional service.
              </p>

              <div className="space-y-6 mb-8">
                <a href="tel:+15619000000" className="flex items-center space-x-4 p-4 bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl hover:shadow-lg transition-all group">
                  <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-700 transition-colors">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium">Call Us</div>
                    <div className="text-xl font-bold text-gray-900">(561) 900-0000</div>
                  </div>
                </a>

                <a href="mailto:info@eaglehomeappraisalwpb.com" className="flex items-center space-x-4 p-4 bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl hover:shadow-lg transition-all group">
                  <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-700 transition-colors">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium">Email Us</div>
                    <div className="text-lg font-bold text-gray-900">info@eaglehomeappraisalwpb.com</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium">Service Area</div>
                    <div className="text-lg font-bold text-gray-900">West Palm Beach & Surrounding Areas</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="(561) 555-1234"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Property Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="123 Main St, West Palm Beach, FL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Appraisal Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all">
                    <option>Purchase</option>
                    <option>Refinance</option>
                    <option>Pre-Listing</option>
                    <option>Estate/Divorce</option>
                    <option>PMI Removal</option>
                    <option>Tax Appeal</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Any additional information about your property or appraisal needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <span>Submit Request</span>
                  <CheckCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Eagle Home Appraisal</h3>
                  <p className="text-sm text-gray-400">West Palm Beach, FL</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Your trusted partner for professional residential appraisals in West Palm Beach and surrounding areas. Licensed, certified, and committed to excellence.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('why-choose-us')} className="text-gray-400 hover:text-white transition-colors">Why Choose Us</button></li>
                <li><button onClick={() => scrollToSection('process')} className="text-gray-400 hover:text-white transition-colors">Process</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+15619000000" className="hover:text-white transition-colors">(561) 900-0000</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@eaglehomeappraisalwpb.com" className="hover:text-white transition-colors">info@eaglehomeappraisalwpb.com</a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>West Palm Beach, FL</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Eagle Home Appraisal. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-4 md:mt-0">
                Florida Licensed & Certified Residential Appraisers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
