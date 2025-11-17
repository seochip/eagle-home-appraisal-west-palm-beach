import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { OrganizationSchema, BreadcrumbSchema, SpeakableSchema } from '../components/Schema';
import { westPalmBeachNeighborhoods, otherCities } from '../data/serviceAreas';
import Breadcrumb from '../components/Breadcrumb';

export default function AreasWeServe() {
  const groupedWPBNeighborhoods = {
    'Downtown & Historic': westPalmBeachNeighborhoods.filter(n => n.group === 'downtown'),
    'North': westPalmBeachNeighborhoods.filter(n => n.group === 'north'),
    'South': westPalmBeachNeighborhoods.filter(n => n.group === 'south'),
    'West': westPalmBeachNeighborhoods.filter(n => n.group === 'west'),
    'Waterfront': westPalmBeachNeighborhoods.filter(n => n.group === 'waterfront')
  };

  return (
    <>
      <Helmet>
        <title>Areas We Serve | West Palm Beach Neighborhoods & Palm Beach County | Eagle Home Appraisal</title>
        <meta name="description" content="Professional home appraisals in 20+ West Palm Beach neighborhoods including Flamingo Park, El Cid, Old Northwood, and throughout Palm Beach County. Serving Palm Beach Gardens, Jupiter, Wellington, Boca Raton, and Delray Beach." />
        <meta name="keywords" content="west palm beach appraiser, palm beach county appraisal, flamingo park appraisal, el cid home appraiser, old northwood property valuation, palm beach gardens appraiser, jupiter appraisal services" />
        <link rel="canonical" href="https://eaglehomeappraisalwestpalmbeach.com/areas-we-serve" />
      </Helmet>
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Areas We Serve', path: '/areas-we-serve' }]} />
      <SpeakableSchema cssSelectors={['h1', 'h2', '.neighborhood-description']} />

      <div className="min-h-screen bg-gradient-to-b from-white via-navy-50 to-white pt-24 lg:pt-32">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ name: 'Areas We Serve' }]} />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 mb-6">
                Areas We <span className="text-gold-600">Serve</span>
              </h1>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Expert residential appraisals across <strong>20+ West Palm Beach neighborhoods</strong> and throughout <strong>Palm Beach County</strong>. Local expertise with deep knowledge of each community's unique characteristics and market trends.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 rounded-3xl overflow-hidden shadow-2xl bg-navy-100"
            >
              <div className="w-full h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456890.77867729726!2d-80.43629064443123!3d26.708048841476043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5d318c2fb71%3A0x75bf9a82b765052d!2sPalm%20Beach%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1731783600000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Eagle Home Appraisal Service Area Map - Palm Beach County, Florida"
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mb-4 text-center">
                West Palm Beach Neighborhoods
              </h2>
              <p className="text-lg text-navy-600 text-center mb-12 max-w-3xl mx-auto neighborhood-description">
                We provide comprehensive <Link to="/services/divorce-appraisal" className="text-gold-600 hover:text-gold-700 font-semibold">divorce appraisals</Link>, <Link to="/services/estate-appraisal" className="text-gold-600 hover:text-gold-700 font-semibold">estate valuations</Link>, <Link to="/services/tax-appeals" className="text-gold-600 hover:text-gold-700 font-semibold">tax appeals</Link>, and <Link to="/services/retrospective-appraisal" className="text-gold-600 hover:text-gold-700 font-semibold">retrospective appraisals</Link> throughout every West Palm Beach neighborhood. Our deep local expertise ensures accurate valuations that reflect each community's unique characteristics.
              </p>

              {Object.entries(groupedWPBNeighborhoods).map(([groupName, neighborhoods]) => (
                <div key={groupName} className="mb-12">
                  <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-6 flex items-center">
                    <Home className="w-6 h-6 text-gold-600 mr-3" />
                    {groupName} West Palm Beach
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {neighborhoods.map((area, index) => (
                      <motion.div
                        key={area.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                        className="group bg-white border border-navy-100 rounded-xl p-5 hover:border-gold-500 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <Link
                              to={`/areas/${area.slug}`}
                              className="font-serif text-lg font-semibold text-navy-900 group-hover:text-gold-600 transition-colors block mb-1"
                            >
                              {area.name}
                            </Link>
                            <p className="text-navy-600 text-xs leading-relaxed line-clamp-2">
                              {area.description}
                            </p>
                            {area.medianHomeValue && (
                              <p className="text-gold-600 text-xs font-semibold mt-2">
                                Median: {area.medianHomeValue}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mb-4 text-center">
                Palm Beach County Cities
              </h2>
              <p className="text-lg text-navy-600 text-center mb-12 max-w-3xl mx-auto neighborhood-description">
                Beyond West Palm Beach, we serve all major cities and communities throughout Palm Beach County with the same level of expertise and professionalism. From waterfront estates in <Link to="/areas/palm-beach" className="text-gold-600 hover:text-gold-700 font-semibold">Palm Beach</Link> to equestrian properties in <Link to="/areas/wellington" className="text-gold-600 hover:text-gold-700 font-semibold">Wellington</Link>, we understand the nuances of each market.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {otherCities.map((city, index) => (
                  <motion.div
                    key={city.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="group bg-white border border-navy-100 rounded-xl p-6 hover:border-gold-500 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-600 to-navy-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/areas/${city.slug}`}
                          className="font-serif text-xl font-semibold text-navy-900 group-hover:text-gold-600 transition-colors block mb-2"
                        >
                          {city.name}
                        </Link>
                        <p className="text-navy-600 text-sm leading-relaxed mb-2">
                          {city.description}
                        </p>
                        {city.population && (
                          <p className="text-navy-500 text-xs">
                            Population: {city.population}
                          </p>
                        )}
                        {city.medianHomeValue && (
                          <p className="text-gold-600 text-sm font-semibold mt-2">
                            Median: {city.medianHomeValue}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden mb-16"
            >
              <div className="absolute inset-0 bg-grain opacity-20" />
              <div className="relative text-center">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                  Don't See Your Neighborhood or City?
                </h2>
                <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
                  We serve properties throughout Palm Beach County and surrounding areas. Whether you need a <Link to="/services/divorce-appraisal" className="text-gold-400 hover:text-gold-300 underline">divorce appraisal</Link>, <Link to="/services/estate-appraisal" className="text-gold-400 hover:text-gold-300 underline">estate valuation</Link>, or <Link to="/services/expert-witness-appraisal" className="text-gold-400 hover:text-gold-300 underline">expert witness services</Link>, contact us to confirm service availability for your location.
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
                    <span>Contact Us</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 text-center"
            >
              <div className="bg-white border border-navy-100 rounded-2xl p-8">
                <div className="text-4xl font-bold text-navy-900 mb-2">35+</div>
                <div className="text-navy-600">Neighborhoods & Cities Served</div>
              </div>
              <div className="bg-white border border-navy-100 rounded-2xl p-8">
                <div className="text-4xl font-bold text-navy-900 mb-2">20+</div>
                <div className="text-navy-600">Years Local Market Experience</div>
              </div>
              <div className="bg-white border border-navy-100 rounded-2xl p-8">
                <div className="text-4xl font-bold text-navy-900 mb-2">100%</div>
                <div className="text-navy-600">Palm Beach County Coverage</div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
