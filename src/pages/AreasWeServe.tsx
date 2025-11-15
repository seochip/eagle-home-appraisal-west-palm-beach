import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { OrganizationSchema, BreadcrumbSchema } from '../components/Schema';

export default function AreasWeServe() {
  const cities = [
    { name: 'West Palm Beach', description: 'Downtown, Northwood, El Cid, Flamingo Park' },
    { name: 'Palm Beach Gardens', description: 'PGA National, Frenchman\'s Reserve, Mirasol' },
    { name: 'Jupiter', description: 'Jupiter Island, Abacoa, Jupiter Farms' },
    { name: 'Wellington', description: 'Equestrian estates and premier communities' },
    { name: 'Boca Raton', description: 'Mizner Park, Addison Reserve, The Sanctuary' },
    { name: 'Delray Beach', description: 'Atlantic Avenue, Tropic Isle, Seagate' },
    { name: 'Boynton Beach', description: 'Ocean Ridge, Villages of Oriole, Canyon Lakes' },
    { name: 'Lake Worth', description: 'College Park, Palm Heights, Lake Osborne' },
    { name: 'Riviera Beach', description: 'Singer Island, Harbour Isle, Old Port Cove' },
    { name: 'North Palm Beach', description: 'Lost Tree Village, Anchorage Park' },
    { name: 'Palm Beach Island', description: 'Worth Avenue, El Brillo Way, luxury estates' },
    { name: 'Royal Palm Beach', description: 'Madison Green, Toscana, Saratoga' },
    { name: 'Juno Beach', description: 'Beachfront condos and oceanfront properties' },
    { name: 'Tequesta', description: 'Jupiter Hills, Tequesta Country Club' },
    { name: 'Greenacres', description: 'Greenacres neighborhoods and communities' },
    { name: 'Lantana', description: 'Hypoluxo Island, oceanfront properties' }
  ];

  return (
    <>
      <Helmet>
        <title>Areas We Serve | Eagle Home Appraisal - Palm Beach County</title>
        <meta name="description" content="Serving West Palm Beach, Palm Beach Gardens, Jupiter, Wellington, Boca Raton, Delray Beach, and all of Palm Beach County with professional appraisal services." />
      </Helmet>
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Areas We Serve', path: '/areas-we-serve' }]} />

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
                Areas We <span className="text-gold-600">Serve</span>
              </h1>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Proudly serving Palm Beach County and surrounding communities with professional residential appraisal services
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[21/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224104.83816198452!2d-80.23351974999999!3d26.7153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d678c3733fc1%3A0x4e5622e8dd44c4ff!2sWest%20Palm%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Eagle Home Appraisal Service Area Map"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>

            <div className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                  Communities We Serve
                </h2>
                <p className="text-lg text-navy-600">
                  Extensive local knowledge across Palm Beach County
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city, index) => (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white/60 backdrop-blur-sm border border-navy-100 rounded-2xl p-6 hover:border-gold-500 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                          {city.name}
                        </h3>
                        <p className="text-navy-600 text-sm leading-relaxed">
                          {city.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                  Don't See Your Area?
                </h2>
                <p className="text-xl text-navy-200 mb-8 max-w-2xl mx-auto">
                  We serve properties throughout Palm Beach County and surrounding areas. Contact us to confirm service availability for your location.
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
              className="mt-24 grid md:grid-cols-3 gap-8 text-center"
            >
              <div className="bg-white/60 backdrop-blur-sm border border-navy-100 rounded-2xl p-8">
                <div className="text-4xl font-bold text-navy-900 mb-2">20+</div>
                <div className="text-navy-600">Years Local Experience</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-navy-100 rounded-2xl p-8">
                <div className="text-4xl font-bold text-navy-900 mb-2">16+</div>
                <div className="text-navy-600">Cities Served</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-navy-100 rounded-2xl p-8">
                <div className="text-4xl font-bold text-navy-900 mb-2">100%</div>
                <div className="text-navy-600">Coverage of Palm Beach County</div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
