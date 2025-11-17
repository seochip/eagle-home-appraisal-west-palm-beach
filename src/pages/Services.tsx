import { motion } from 'framer-motion';
import { Home, Scale, FileText, Landmark, TrendingDown, Eye, Gavel, TreePine, Phone, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { OrganizationSchema, CollectionPageSchema } from '../components/Schema';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Real Estate Appraisals',
      description: 'Comprehensive valuations for single-family homes, condos, and townhouses. Essential for purchase, refinance, or home equity loans. Our detailed reports provide lenders and homeowners with accurate market values based on extensive local market analysis.'
    },
    {
      icon: Scale,
      title: 'Divorce Appraisals',
      description: 'Unbiased, court-accepted property valuations for equitable asset division in divorce proceedings. Our impartial appraisals help attorneys and families reach fair settlements. Reports meet all legal requirements and court standards.'
    },
    {
      icon: FileText,
      title: 'Estate & Date of Death Appraisals',
      description: 'Accurate property valuations for estate settlement, tax purposes, and probate court requirements. We provide IRS-compliant appraisals establishing fair market value as of the date of death for estate tax returns and distribution of assets.'
    },
    {
      icon: Landmark,
      title: 'Bankruptcy Appraisals',
      description: 'Professional appraisals required for bankruptcy filings and creditor negotiations. Our reports help establish accurate property values for Chapter 7 and Chapter 13 proceedings, ensuring fair treatment for all parties involved.'
    },
    {
      icon: TrendingDown,
      title: 'PMI Removal Appraisals',
      description: 'Save thousands by proving your home equity exceeds 20% to eliminate private mortgage insurance. Our detailed appraisals demonstrate increased property values and built equity, helping homeowners reduce monthly payments significantly.'
    },
    {
      icon: Eye,
      title: 'Pre-Listing / Pre-Purchase Appraisals',
      description: 'Strategic property valuations to help sellers price right and buyers make informed offers. Get an accurate market value before listing to maximize sale price and minimize time on market, or verify asking prices before making an offer.'
    },
    {
      icon: Gavel,
      title: 'Tax Appeal / Reassessment Appraisals',
      description: 'Challenge unfair property tax assessments with professionally documented appraisals. Our comprehensive reports provide the evidence needed to appeal inflated assessments and potentially reduce your annual property taxes.'
    },
    {
      icon: TreePine,
      title: 'Land Appraisals',
      description: 'Vacant lot and acreage valuations for development, purchase, or financing purposes. We analyze comparable land sales, zoning regulations, utilities access, and development potential to establish accurate market values.'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Contact Us',
      description: 'Call or submit an online request with your property details and appraisal needs.'
    },
    {
      step: '2',
      title: 'Schedule Inspection',
      description: 'We schedule a convenient time to inspect the property, typically within 24-48 hours.'
    },
    {
      step: '3',
      title: 'Property Analysis',
      description: 'We conduct a thorough inspection and comprehensive market analysis.'
    },
    {
      step: '4',
      title: 'Receive Report',
      description: 'You receive a detailed appraisal report within 48-72 hours of inspection.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Appraisal Services | Eagle Home Appraisal - West Palm Beach</title>
        <meta name="description" content="Comprehensive residential appraisal services including divorce, estate, PMI removal, tax appeals, and more. State-certified appraiser serving Palm Beach County." />
      </Helmet>
      <OrganizationSchema />
      <CollectionPageSchema
        name="Professional Appraisal Services"
        description="Comprehensive residential appraisal services in West Palm Beach, FL"
        url="/services"
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
        items={[
          { name: 'Residential Real Estate Appraisals', url: '/services/residential-appraisals' },
          { name: 'Divorce Appraisals', url: '/services/divorce-appraisal' },
          { name: 'Estate & Date of Death Appraisals', url: '/services/estate-appraisal' },
          { name: 'Bankruptcy Appraisals', url: '/services/bankruptcy-valuation' },
          { name: 'PMI Removal Appraisals', url: '/services/pmi-removal' },
          { name: 'Pre-Listing / Pre-Purchase Appraisals', url: '/services/pre-purchase-appraisal' },
          { name: 'Tax Appeal / Reassessment Appraisals', url: '/services/tax-appeals' },
          { name: 'Land Appraisals', url: '/services/residential-appraisals' }
        ]}
      />

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
                Professional <span className="text-gold-600">Appraisal Services</span>
              </h1>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Comprehensive property valuations for every need, backed by 20+ years of local market expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-12 lg:p-16 text-white mb-24 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grain opacity-20" />
              <div className="relative">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-12 text-center">
                  Our Process
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {process.map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gold-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg">
                        {item.step}
                      </div>
                      <h3 className="font-serif text-xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-navy-200 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gold-50 to-navy-50 rounded-3xl p-12 lg:p-16 text-center"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                Need an Appraisal?
              </h2>
              <p className="text-xl text-navy-700 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Rush appraisals available when needed.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:5612825509"
                  className="inline-flex items-center space-x-3 px-10 py-5 bg-gold-600 text-white rounded-full font-semibold text-lg hover:bg-gold-700 transition-all duration-300 shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>(561) 282-5509</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-3 px-10 py-5 bg-navy-900 text-white rounded-full font-semibold text-lg hover:bg-navy-800 transition-all duration-300"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
