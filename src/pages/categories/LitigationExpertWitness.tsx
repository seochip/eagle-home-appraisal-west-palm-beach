import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/Breadcrumb';
import { CollectionPageSchema, OrganizationSchema } from '../../components/Schema';

export default function LitigationExpertWitness() {
  const services = [
    { name: 'Expert Witness Appraisal Services', path: '/services/expert-witness-appraisal', description: 'Experienced testimony for litigation and legal proceedings' },
    { name: 'Litigation Support Appraisal', path: '/services/litigation-support-appraisal', description: 'Comprehensive appraisal reports for legal disputes' },
    { name: 'Diminution in Value Appraisal', path: '/services/diminution-in-value-appraisal', description: 'Measure property value loss due to damage or external factors' },
    { name: 'Eminent Domain / Condemnation Appraisal', path: '/services/eminent-domain-appraisal', description: 'Fair compensation valuations for government takings' },
    { name: 'Bankruptcy Valuation (Chapter 7 & 13)', path: '/services/bankruptcy-valuation', description: 'Fast, accurate valuations for bankruptcy proceedings' },
    { name: 'Partition Suit Appraisal', path: '/services/partition-suit-appraisal', description: 'Independent valuations for forced sale proceedings' },
  ];

  return (
    <>
      <Helmet>
        <title>Litigation & Expert Witness Appraisals | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Expert witness and litigation support appraisals in West Palm Beach. Court testimony, eminent domain, bankruptcy, and legal dispute valuations." />
      </Helmet>
      <OrganizationSchema />
      <CollectionPageSchema
        name="Litigation & Expert Witness Appraisals"
        description="Expert witness and litigation support appraisals in West Palm Beach. Court testimony, eminent domain, bankruptcy, and legal dispute valuations."
        url="/categories/litigation-expert-witness"
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        items={services.map(s => ({ name: s.name, url: s.path }))}
      />

      <div className="min-h-screen bg-white pt-24 lg:pt-32">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumb items={[{ name: 'Services', path: '/services' }, { name: 'Litigation & Expert Witness Services' }]} />
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-6">Litigation & Expert Witness Services</h1>
              <p className="text-xl text-navy-600 leading-relaxed mb-8">
                Credible, defensible appraisals for legal proceedings. Our experienced appraisers provide <Link to="/services/expert-witness-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">expert witness testimony</Link> and comprehensive <Link to="/services/litigation-support-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">litigation support</Link> for attorneys and parties in dispute.
              </p>
              <div className="prose prose-lg max-w-none text-navy-700 space-y-6 mb-12">
                <p>From <Link to="/services/eminent-domain-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">eminent domain cases</Link> to <Link to="/services/partition-suit-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">partition suits</Link>, <Link to="/services/diminution-in-value-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">diminution in value claims</Link>, and <Link to="/services/bankruptcy-valuation" className="text-gold-600 hover:text-gold-700 font-medium">bankruptcy proceedings</Link>, we deliver reports that withstand cross-examination and meet strict legal standards.</p>
              </div>
              <div className="bg-navy-50 rounded-xl p-8 mb-12">
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">Our Litigation Services</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {services.map((service) => (
                    <Link key={service.path} to={service.path} className="block p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 border border-transparent hover:border-gold-500 group">
                      <h3 className="font-semibold text-lg text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">{service.name}</h3>
                      <p className="text-navy-600 text-sm">{service.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl p-8 lg:p-12 text-center text-white">
                <h2 className="font-serif text-3xl font-bold mb-4">Need Litigation Support?</h2>
                <p className="text-xl text-gray-300 mb-8">Contact us for expert witness services and litigation appraisals.</p>
                <a href="tel:5612825509" className="inline-flex items-center space-x-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-all shadow-lg hover:shadow-xl">
                  <Phone className="w-5 h-5" />
                  <span>(561) 282-5509</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
