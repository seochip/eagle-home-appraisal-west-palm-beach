import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';
import RelatedServices from './RelatedServices';
import FAQSection from './FAQSection';
import { ServicePageSchema, SpeakableSchema } from './Schema';

interface ServicePageProps {
  title: string;
  slug: string;
  metaDescription: string;
  breadcrumbCategory: string;
  breadcrumbCategoryPath: string;
  content: string;
  relatedServices: Array<{ name: string; path: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export default function ServicePageTemplate({
  title,
  slug,
  metaDescription,
  breadcrumbCategory,
  breadcrumbCategoryPath,
  content,
  relatedServices,
  faqs
}: ServicePageProps) {
  const canonicalUrl = `https://eaglehomeappraisalwestpalmbeach.com${slug}`;

  return (
    <>
      <Helmet>
        <title>{title} | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <ServicePageSchema
        name={title}
        description={metaDescription}
        url={slug}
        breadcrumbs={[
          { name: 'Services', path: '/services' },
          { name: breadcrumbCategory, path: breadcrumbCategoryPath }
        ]}
        faqs={faqs}
      />
      <SpeakableSchema cssSelectors={['h1', 'h2', '.prose']} />

      <div className="min-h-screen bg-white pt-24 lg:pt-32">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Breadcrumb items={[
                { name: 'Services', path: '/services' },
                { name: breadcrumbCategory, path: breadcrumbCategoryPath },
                { name: title }
              ]} />

              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                {title}
              </h1>

              <div className="prose prose-lg max-w-none text-navy-700 mb-8 leading-relaxed">
                {content}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="my-12 text-center"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  <span>Request This Appraisal – Free Quote</span>
                </Link>
              </motion.div>

              <FAQSection faqs={faqs} />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl p-8 lg:p-12 text-center text-white mt-12"
              >
                <h2 className="font-serif text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Contact us today for a professional appraisal. Fast turnaround and competitive rates.
                </p>
                <a
                  href="tel:5612825509"
                  className="inline-flex items-center space-x-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>(561) 282-5509</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <RelatedServices services={relatedServices} />
      </div>
    </>
  );
}
