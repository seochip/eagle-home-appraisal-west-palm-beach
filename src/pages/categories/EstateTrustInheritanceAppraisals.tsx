import { Link } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/Breadcrumb';
import { CollectionPageSchema, OrganizationSchema, SpeakableSchema } from '../../components/Schema';

export default function EstateTrustInheritanceAppraisals() {
  const services = [
    {
      name: 'Estate & Probate Appraisal',
      path: '/services/estate-appraisal',
      description: 'Date-of-death valuations for probate court and IRS requirements'
    },
    {
      name: 'Date of Death Valuation',
      path: '/services/date-of-death-valuation',
      description: 'IRS-compliant retrospective valuations for estate settlement'
    },
    {
      name: 'Step-Up Basis Valuation',
      path: '/services/step-up-basis-valuation',
      description: 'Establish cost basis for inherited property to minimize capital gains'
    },
    {
      name: 'Trust Appraisal',
      path: '/services/trust-appraisal',
      description: 'Professional valuations for trust funding and distributions'
    },
    {
      name: 'Estate Tax Appraisal (Form 706)',
      path: '/services/estate-tax-appraisal',
      description: 'Qualified valuations for federal estate tax filings'
    },
    {
      name: 'Life Estate Appraisal',
      path: '/services/life-estate-appraisal',
      description: 'Valuations for life estate and remainder interest calculations'
    },
    {
      name: 'Family Transfer / Intra-Family Sale Appraisal',
      path: '/services/family-transfer-appraisal',
      description: 'Independent valuations for family property transfers'
    },
    {
      name: 'Inheritance / Estate Tax Appraisal',
      path: '/services/inheritance-tax-appraisal',
      description: 'Tax-compliant valuations for inherited real estate'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Estate, Trust & Inheritance Appraisals | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Professional estate, trust, and inheritance appraisals in West Palm Beach. Date of death valuations, probate appraisals, and IRS Form 706 compliant reports." />
      </Helmet>
      <OrganizationSchema />
      <CollectionPageSchema
        name="Estate, Trust & Inheritance Appraisals"
        description="Professional estate, trust, and inheritance appraisals in West Palm Beach. Date of death valuations, probate appraisals, and IRS Form 706 compliant reports."
        url="/categories/estate-trust-inheritance-appraisals"
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        items={services.map(s => ({ name: s.name, url: s.path }))}
      />
      <SpeakableSchema cssSelectors={['h1', 'h2', '.text-navy-700']} />

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
                { name: 'Estate, Trust & Inheritance Appraisals' }
              ]} />

              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                Estate, Trust & Inheritance Appraisals
              </h1>

              <p className="text-xl text-navy-600 leading-relaxed mb-8">
                Navigate probate, estate planning, and trust administration with confidence. Our certified appraisers provide IRS-compliant, court-accepted valuations for estate settlement, tax reporting, and trust funding across Palm Beach County.
              </p>

              <div className="prose prose-lg max-w-none text-navy-700 space-y-6 mb-12">
                <h2 className="font-serif text-2xl font-bold text-navy-900">Why Estate Appraisals Matter</h2>
                <p>
                  When a loved one passes away or you're planning your estate, accurate property valuations are essential for IRS compliance, fair distribution among heirs, and establishing cost basis for inherited assets. Our <Link to="/services/estate-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">estate and probate appraisals</Link> meet the strictest standards required by probate courts, the IRS, and financial institutions.
                </p>

                <p>
                  We specialize in <Link to="/services/date-of-death-valuation" className="text-gold-600 hover:text-gold-700 font-medium">date of death valuations</Link> that establish property values as of a specific past date, which is critical for IRS Form 706 filings and stepped-up basis calculations. Whether you're settling an estate, funding a trust, or planning for the future, our reports provide the documentation you need.
                </p>

                <h2 className="font-serif text-2xl font-bold text-navy-900">Our Estate & Trust Appraisal Services</h2>
                <p>
                  From simple probate valuations to complex trust administrations, we handle every type of estate-related appraisal. Our <Link to="/services/trust-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">trust appraisals</Link> support both funding and distribution phases, while our <Link to="/services/step-up-basis-valuation" className="text-gold-600 hover:text-gold-700 font-medium">step-up basis valuations</Link> help heirs minimize future capital gains taxes when they eventually sell inherited property.
                </p>

                <p>
                  For families transferring wealth to the next generation, we provide <Link to="/services/family-transfer-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">family transfer appraisals</Link> and <Link to="/services/estate-tax-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">estate tax appraisals</Link> that satisfy IRS requirements for gift and estate tax reporting. Our experience with <Link to="/services/life-estate-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">life estate valuations</Link> ensures proper calculation of present and remainder interests.
                </p>

                <h2 className="font-serif text-2xl font-bold text-navy-900">What Makes Our Reports Different</h2>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                    <span><strong>IRS Form 706 Compliant:</strong> Our reports meet all IRS requirements for estate tax returns and federal filings</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                    <span><strong>Court-Accepted:</strong> Probate courts throughout Florida recognize and accept our appraisals without question</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                    <span><strong>Retrospective Expertise:</strong> We accurately value properties as of any past date, even years ago</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
                    <span><strong>Fast Turnaround:</strong> Standard 7-10 days, with rush service available for time-sensitive estate matters</span>
                  </li>
                </ul>

                <p>
                  Whether you're an executor, trustee, estate attorney, or family member, we provide professional, compassionate service during difficult times. Our detailed reports include comprehensive market analysis, property descriptions, and all documentation required for legal and tax purposes.
                </p>
              </div>

              <div className="bg-navy-50 rounded-xl p-8 mb-12">
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">Our Estate & Trust Services</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 border border-transparent hover:border-gold-500 group"
                    >
                      <h3 className="font-semibold text-lg text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-navy-600 text-sm">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl p-8 lg:p-12 text-center text-white"
              >
                <h2 className="font-serif text-3xl font-bold mb-4">Need an Estate or Trust Appraisal?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get a professional, IRS-compliant appraisal from West Palm Beach's trusted estate appraisal experts.
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
      </div>
    </>
  );
}
