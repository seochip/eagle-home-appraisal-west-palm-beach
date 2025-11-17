import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/Breadcrumb';
import { CollectionPageSchema, OrganizationSchema, SpeakableSchema } from '../../components/Schema';

export default function TaxAppealsIRS() {
  const services = [
    { name: 'Property Tax Appeal / Tax Grievance', path: '/services/tax-appeals', description: 'Challenge unfair property tax assessments with professional evidence' },
    { name: 'Gift Tax Appraisal', path: '/services/gift-tax-appraisal', description: 'IRS-qualified appraisals for real estate gifts' },
    { name: 'Capital Gains Tax Appraisal', path: '/services/capital-gains-tax-appraisal', description: 'Establish cost basis for capital gains tax calculations' },
    { name: 'Charitable Contribution / Donation Appraisal', path: '/services/charitable-contribution-appraisal', description: 'IRS-qualified valuations for real estate donations' },
    { name: 'Conservation Easement Appraisal', path: '/services/conservation-easement-appraisal', description: 'Specialized valuations for conservation easement donations' },
  ];

  return (
    <>
      <Helmet>
        <title>Tax Appeals & IRS Appraisals | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Property tax appeals and IRS-compliant appraisals in West Palm Beach. Gift tax, capital gains, and charitable contribution valuations." />
      </Helmet>
      <OrganizationSchema />
      <CollectionPageSchema
        name="Tax Appeals & IRS Appraisals"
        description="Property tax appeals and IRS-compliant appraisals in West Palm Beach. Gift tax, capital gains, and charitable contribution valuations."
        url="/categories/tax-appeals-irs"
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        items={services.map(s => ({ name: s.name, url: s.path }))}
      />
      <SpeakableSchema cssSelectors={['h1', 'h2', '.text-navy-700']} />

      <div className="min-h-screen bg-white pt-24 lg:pt-32">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumb items={[{ name: 'Services', path: '/services' }, { name: 'Tax Appeals & IRS' }]} />
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-6">Tax Appeals & IRS Appraisals</h1>
              <p className="text-xl text-navy-600 leading-relaxed mb-8">
                Protect your financial interests with IRS-compliant appraisals and professional property tax appeal support. Our certified appraisers provide the documentation you need for tax challenges, charitable donations, and compliance reporting.
              </p>
              <div className="prose prose-lg max-w-none text-navy-700 space-y-6 mb-12">
                <p>Whether you're challenging an unfair <Link to="/services/tax-appeals" className="text-gold-600 hover:text-gold-700 font-medium">property tax assessment</Link>, documenting a <Link to="/services/gift-tax-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">gift tax valuation</Link>, or claiming deductions for <Link to="/services/charitable-contribution-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">charitable contributions</Link>, our reports meet all IRS and local tax authority requirements.</p>
                <p>We specialize in <Link to="/services/capital-gains-tax-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">capital gains tax appraisals</Link> and <Link to="/services/conservation-easement-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">conservation easement valuations</Link> that withstand IRS scrutiny and provide the supporting documentation needed for your tax filings.</p>
              </div>
              <div className="bg-navy-50 rounded-xl p-8 mb-12">
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">Our Tax & IRS Services</h2>
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
                <h2 className="font-serif text-3xl font-bold mb-4">Need a Tax or IRS Appraisal?</h2>
                <p className="text-xl text-gray-300 mb-8">Contact us for IRS-compliant appraisals and tax appeal support.</p>
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
