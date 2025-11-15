import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/Breadcrumb';
import { CollectionPageSchema, OrganizationSchema } from '../../components/Schema';

export default function SpecialtyComplexValuations() {
  const services = [
    { name: 'Partial / Fractional Interest Valuation', path: '/services/fractional-interest-valuation', description: 'Valuations for partial ownership interests in real estate' },
    { name: 'Family Limited Partnership (FLP) Valuation', path: '/services/family-limited-partnership-valuation', description: 'Specialized valuations for FLP real estate holdings' },
    { name: 'Charitable Remainder Trust (CRT) Valuation', path: '/services/charitable-remainder-trust-valuation', description: 'Complex valuations for charitable remainder trusts' },
    { name: 'Portfolio Valuation for High-Net-Worth Individuals', path: '/services/portfolio-valuation', description: 'Comprehensive valuations for real estate portfolios' },
    { name: 'Insurance Replacement Cost Valuation', path: '/services/insurance-replacement-cost', description: 'Accurate replacement cost estimates for insurance purposes' },
    { name: 'Financial Planning & Wealth Management Appraisal', path: '/services/financial-planning-appraisal', description: 'Valuations for comprehensive financial planning' },
  ];

  return (
    <>
      <Helmet>
        <title>Specialty & Complex Valuations | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Complex and specialty real estate appraisals in West Palm Beach. Fractional interests, FLP valuations, portfolio appraisals for high-net-worth clients." />
      </Helmet>
      <OrganizationSchema />
      <CollectionPageSchema
        name="Specialty & Complex Valuations"
        description="Complex and specialty real estate appraisals in West Palm Beach. Fractional interests, FLP valuations, portfolio appraisals for high-net-worth clients."
        url="/categories/specialty-complex-valuations"
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        items={services.map(s => ({ name: s.name, url: s.path }))}
      />

      <div className="min-h-screen bg-white pt-24 lg:pt-32">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumb items={[{ name: 'Services', path: '/services' }, { name: 'Specialty & Complex Valuations' }]} />
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-6">Specialty & Complex Valuations</h1>
              <p className="text-xl text-navy-600 leading-relaxed mb-8">
                Advanced valuation services for sophisticated estate planning, wealth management, and complex ownership structures. We specialize in <Link to="/services/fractional-interest-valuation" className="text-gold-600 hover:text-gold-700 font-medium">fractional interest valuations</Link>, <Link to="/services/family-limited-partnership-valuation" className="text-gold-600 hover:text-gold-700 font-medium">family limited partnerships</Link>, and <Link to="/services/portfolio-valuation" className="text-gold-600 hover:text-gold-700 font-medium">real estate portfolio appraisals</Link> for high-net-worth individuals.
              </p>
              <div className="prose prose-lg max-w-none text-navy-700 space-y-6 mb-12">
                <p>Whether you need <Link to="/services/charitable-remainder-trust-valuation" className="text-gold-600 hover:text-gold-700 font-medium">charitable remainder trust valuations</Link>, <Link to="/services/insurance-replacement-cost" className="text-gold-600 hover:text-gold-700 font-medium">insurance replacement cost estimates</Link>, or <Link to="/services/financial-planning-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">financial planning appraisals</Link>, our experienced appraisers deliver the technical expertise required for complex situations.</p>
              </div>
              <div className="bg-navy-50 rounded-xl p-8 mb-12">
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-6">Our Specialty Services</h2>
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
                <h2 className="font-serif text-3xl font-bold mb-4">Need Complex Valuation Services?</h2>
                <p className="text-xl text-gray-300 mb-8">Contact us for specialized appraisals tailored to your unique situation.</p>
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
