import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface RelatedService {
  name: string;
  path: string;
  description?: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Related Appraisal Services
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Explore other specialized appraisal services that may meet your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                to={service.path}
                className="group block bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gold-500 h-full"
              >
                <h3 className="font-semibold text-lg text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {service.name}
                </h3>
                {service.description && (
                  <p className="text-navy-600 text-sm mb-4">
                    {service.description}
                  </p>
                )}
                <div className="flex items-center text-gold-600 text-sm font-medium group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
