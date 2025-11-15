import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CollectionPageSchema, OrganizationSchema } from '../components/Schema';

export default function AllAppraisalServices() {
  const services = [
    {
      category: 'Divorce & Family Law Appraisals',
      items: [
        { name: 'Divorce Appraisal', path: '/services/divorce-appraisal', description: 'Court-admissible valuations for equitable distribution in divorce proceedings' },
        { name: 'Prenuptial Agreement Appraisal', path: '/services/prenuptial-appraisal', description: 'Document property values before marriage to protect separate-property claims' },
        { name: 'Date of Marriage Valuation', path: '/services/date-of-marriage-valuation', description: 'Historical valuations to establish baseline property values for divorce cases' },
        { name: 'Equitable Distribution Appraisal', path: '/services/equitable-distribution-appraisal', description: 'Fair market valuations for division of marital assets' },
        { name: 'Non-Marital Property Division Appraisal', path: '/services/non-marital-property-division', description: 'Separate property valuations for divorce settlements' },
        { name: 'Co-Owner Buyout Appraisal', path: '/services/co-owner-buyout-appraisal', description: 'Independent valuations to eliminate buyout disputes' },
        { name: 'Partition Suit Appraisal', path: '/services/partition-suit-appraisal', description: 'Court-appointed valuations for co-ownership disputes' },
      ]
    },
    {
      category: 'Estate, Trust & Inheritance Appraisals',
      items: [
        { name: 'Estate & Probate Appraisal', path: '/services/estate-appraisal', description: 'Date-of-death valuations for probate court and IRS requirements' },
        { name: 'Date of Death Valuation', path: '/services/date-of-death-valuation', description: 'IRS-compliant retrospective valuations for estate settlement' },
        { name: 'Step-Up Basis Valuation', path: '/services/step-up-basis-valuation', description: 'Establish cost basis for inherited property to minimize capital gains' },
        { name: 'Trust Appraisal', path: '/services/trust-appraisal', description: 'Professional valuations for trust funding and distributions' },
        { name: 'Estate Tax Appraisal (Form 706)', path: '/services/estate-tax-appraisal', description: 'Qualified valuations for federal estate tax filings' },
        { name: 'Life Estate Appraisal', path: '/services/life-estate-appraisal', description: 'Valuations for life estate and remainder interest calculations' },
        { name: 'Family Transfer / Intra-Family Sale Appraisal', path: '/services/family-transfer-appraisal', description: 'Independent valuations for family property transfers' },
        { name: 'Inheritance / Estate Tax Appraisal', path: '/services/inheritance-tax-appraisal', description: 'Tax-compliant valuations for inherited real estate' },
      ]
    },
    {
      category: 'Tax Appeals & IRS',
      items: [
        { name: 'Property Tax Appeal / Tax Grievance', path: '/services/tax-appeals', description: 'Challenge unfair property tax assessments with professional evidence' },
        { name: 'Gift Tax Appraisal', path: '/services/gift-tax-appraisal', description: 'IRS-qualified appraisals for real estate gifts' },
        { name: 'Capital Gains Tax Appraisal', path: '/services/capital-gains-tax-appraisal', description: 'Establish cost basis for capital gains tax calculations' },
        { name: 'Charitable Contribution / Donation Appraisal', path: '/services/charitable-contribution-appraisal', description: 'IRS-qualified valuations for real estate donations' },
        { name: 'Conservation Easement Appraisal', path: '/services/conservation-easement-appraisal', description: 'Specialized valuations for conservation easement donations' },
      ]
    },
    {
      category: 'Litigation & Expert Witness Services',
      items: [
        { name: 'Expert Witness Appraisal Services', path: '/services/expert-witness-appraisal', description: 'Experienced testimony for litigation and legal proceedings' },
        { name: 'Litigation Support Appraisal', path: '/services/litigation-support-appraisal', description: 'Comprehensive appraisal reports for legal disputes' },
        { name: 'Diminution in Value Appraisal', path: '/services/diminution-in-value-appraisal', description: 'Measure property value loss due to damage or external factors' },
        { name: 'Eminent Domain / Condemnation Appraisal', path: '/services/eminent-domain-appraisal', description: 'Fair compensation valuations for government takings' },
        { name: 'Bankruptcy Valuation (Chapter 7 & 13)', path: '/services/bankruptcy-valuation', description: 'Fast, accurate valuations for bankruptcy proceedings' },
        { name: 'Partition Suit Appraisal', path: '/services/partition-suit-appraisal', description: 'Independent valuations for forced sale proceedings' },
      ]
    },
    {
      category: 'Specialty & Complex Valuations',
      items: [
        { name: 'Partial / Fractional Interest Valuation', path: '/services/fractional-interest-valuation', description: 'Valuations for partial ownership interests in real estate' },
        { name: 'Family Limited Partnership (FLP) Valuation', path: '/services/family-limited-partnership-valuation', description: 'Specialized valuations for FLP real estate holdings' },
        { name: 'Charitable Remainder Trust (CRT) Valuation', path: '/services/charitable-remainder-trust-valuation', description: 'Complex valuations for charitable remainder trusts' },
        { name: 'Portfolio Valuation for High-Net-Worth Individuals', path: '/services/portfolio-valuation', description: 'Comprehensive valuations for real estate portfolios' },
        { name: 'Insurance Replacement Cost Valuation', path: '/services/insurance-replacement-cost', description: 'Accurate replacement cost estimates for insurance purposes' },
        { name: 'Financial Planning & Wealth Management Appraisal', path: '/services/financial-planning-appraisal', description: 'Valuations for comprehensive financial planning' },
      ]
    },
    {
      category: 'Retrospective & Historical Valuations',
      items: [
        { name: 'Retrospective Appraisal (Any Past Date)', path: '/services/retrospective-appraisal', description: 'Historical valuations for any date in the past' },
        { name: 'Date of Marriage Valuation', path: '/services/date-of-marriage-valuation', description: 'Establish baseline property values as of marriage date' },
        { name: 'Step-Up Basis Valuation', path: '/services/step-up-basis-valuation', description: 'Date of death valuations for tax basis purposes' },
        { name: 'Date of Death Valuation', path: '/services/date-of-death-valuation', description: 'Retrospective valuations for estate settlement' },
      ]
    },
  ];

  const allServicesList = services.flatMap(cat => cat.items.map(item => ({ name: item.name, url: item.path })));

  return (
    <>
      <Helmet>
        <title>All Appraisal Services | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Complete directory of professional appraisal services. Divorce, estate, tax appeal, litigation, and specialty valuations in West Palm Beach, FL." />
      </Helmet>
      <OrganizationSchema />
      <CollectionPageSchema
        name="All Private Appraisal Services"
        description="Complete directory of professional real estate appraisal services including divorce, estate, tax appeal, litigation, and specialty valuations in West Palm Beach, FL."
        url="/services/all-appraisal-services"
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        items={allServicesList}
      />

      <div className="min-h-screen bg-white pt-24 lg:pt-32">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-2 text-sm text-gold-600 mb-4">
                <Link to="/" className="hover:text-gold-700 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-navy-900">All Appraisal Services</span>
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                All Private Appraisal Services We Offer
              </h1>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Comprehensive directory of specialized real estate appraisal services for every legal, financial, and personal need
              </p>
            </motion.div>

            <div className="space-y-12">
              {services.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6 pb-3 border-b-2 border-gold-500">
                    {category.category}
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {category.items.map((service, serviceIdx) => (
                      <div
                        key={serviceIdx}
                        className="group p-4 rounded-lg hover:bg-navy-50 transition-all duration-300 border border-transparent hover:border-gold-500"
                      >
                        <Link to={service.path}>
                          <h3 className="font-semibold text-lg text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                            {service.name}
                          </h3>
                        </Link>
                        <p className="text-navy-600 text-sm mb-3">
                          {service.description}
                        </p>
                        <Link
                          to={service.path}
                          className="inline-flex items-center space-x-1 text-sm text-gold-600 hover:text-gold-700 font-medium group/btn"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl p-12 text-center text-white"
            >
              <h2 className="font-serif text-3xl font-bold mb-4">
                Don't See Your Service Listed?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We handle many specialized appraisal types. Contact us to discuss your specific needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Get Your Free Quote Today</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
