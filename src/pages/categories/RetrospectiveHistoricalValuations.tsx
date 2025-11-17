import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/Breadcrumb';
import { CollectionPageSchema, OrganizationSchema, SpeakableSchema } from '../../components/Schema';

export default function RetrospectiveHistoricalValuations() {
  const services = [
    { name: 'Retrospective Appraisal (Any Past Date)', path: '/services/retrospective-appraisal', description: 'Historical valuations for any date in the past' },
    { name: 'Date of Marriage Valuation', path: '/services/date-of-marriage-valuation', description: 'Establish baseline property values as of marriage date' },
    { name: 'Step-Up Basis Valuation', path: '/services/step-up-basis-valuation', description: 'Date of death valuations for tax basis purposes' },
    { name: 'Date of Death Valuation', path: '/services/date-of-death-valuation', description: 'Retrospective valuations for estate settlement' },
  ];

  return (
    <>
      <Helmet>
        <title>Retrospective & Historical Valuations | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Retrospective appraisals for any past date in West Palm Beach. Date of death, date of marriage, and historical property valuations." />
      </Helmet>
      <OrganizationSchema />
      <CollectionPageSchema
        name="Retrospective & Historical Valuations"
        description="Retrospective appraisals for any past date in West Palm Beach. Date of death, date of marriage, and historical property valuations."
        url="/categories/retrospective-historical-valuations"
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        items={services.map(s => ({ name: s.name, url: s.path }))}
      />
      <SpeakableSchema cssSelectors={['h1', 'h2', '.text-navy-700']} />

      <div className="min-h-screen bg-white pt-24 lg:pt-32">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumb items={[{ name: 'Services', path: '/services' }, { name: 'Retrospective & Historical Valuations' }]} />
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-6">Retrospective & Historical Valuations</h1>
              <p className="text-xl text-navy-600 leading-relaxed mb-8">
                Accurate property valuations as of any past date. Our <Link to="/services/retrospective-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">retrospective appraisals</Link> establish property values for legal, tax, and estate purposes, including <Link to="/services/date-of-death-valuation" className="text-gold-600 hover:text-gold-700 font-medium">date of death</Link>, <Link to="/services/date-of-marriage-valuation" className="text-gold-600 hover:text-gold-700 font-medium">date of marriage</Link>, and <Link to="/services/step-up-basis-valuation" className="text-gold-600 hover:text-gold-700 font-medium">step-up basis calculations</Link>.
              </p>
              <div className="prose prose-lg max-w-none text-navy-700 space-y-6 mb-12">
                <p>We use historical market data, comparable sales from the relevant time period, and adjustment techniques to accurately determine what a property was worth on any specific date in the past. These valuations are essential for IRS reporting, divorce proceedings, estate settlement, and legal disputes.</p>
              </div>
              <div className="bg-navy-50 rounded-xl p-8 mb-12">
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">Our Retrospective Services</h2>
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
                <h2 className="font-serif text-3xl font-bold mb-4">Need a Historical Valuation?</h2>
                <p className="text-xl text-gray-300 mb-8">Contact us for accurate retrospective appraisals for any past date.</p>
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
