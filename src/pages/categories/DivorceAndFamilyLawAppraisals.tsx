import { Link } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/Breadcrumb';
import { CollectionPageSchema, OrganizationSchema, SpeakableSchema } from '../../components/Schema';

export default function DivorceAndFamilyLawAppraisals() {
  const services = [
    {
      name: 'Divorce Appraisal',
      path: '/services/divorce-appraisal',
      description: 'Court-admissible valuations for equitable distribution in divorce proceedings'
    },
    {
      name: 'Prenuptial Agreement Appraisal',
      path: '/services/prenuptial-appraisal',
      description: 'Document property values before marriage to protect separate-property claims'
    },
    {
      name: 'Date of Marriage Valuation',
      path: '/services/date-of-marriage-valuation',
      description: 'Retrospective valuations establishing property values on your wedding date'
    },
    {
      name: 'Equitable Distribution Appraisal',
      path: '/services/equitable-distribution-appraisal',
      description: 'Fair market valuations for division of marital assets'
    },
    {
      name: 'Non-Marital Property Division Appraisal',
      path: '/services/non-marital-property-division',
      description: 'Separate property valuations for divorce settlements'
    },
    {
      name: 'Co-Owner Buyout Appraisal',
      path: '/services/co-owner-buyout-appraisal',
      description: 'Independent valuations to eliminate disputes when one party buys out the other'
    },
    {
      name: 'Partition Suit Appraisal',
      path: '/services/partition-suit-appraisal',
      description: 'Court-appointed or private appraisals for forced sale or buyout situations'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Divorce & Family Law Appraisals | Expert Valuations West Palm Beach</title>
        <meta name="description" content="Specialized divorce appraisals, prenuptial valuations, and family law property assessments in West Palm Beach. Court-accepted, USPAP-compliant reports." />
      </Helmet>
      <OrganizationSchema />
      <CollectionPageSchema
        name="Divorce & Family Law Appraisals"
        description="Specialized divorce appraisals, prenuptial valuations, and family law property assessments in West Palm Beach. Court-accepted, USPAP-compliant reports."
        url="/categories/divorce-family-law-appraisals"
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
                { name: 'Divorce & Family Law Appraisals' }
              ]} />
              <div className="hidden items-center space-x-2 text-sm text-gold-600 mb-6">
                <Link to="/" className="hover:text-gold-700 transition-colors">Home</Link>
                <span>/</span>
                <Link to="/services" className="hover:text-gold-700 transition-colors">Services</Link>
                <span>/</span>
                <span className="text-navy-900">Divorce & Family Law Appraisals</span>
              </div>

              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                Divorce & Family Law Appraisals
              </h1>

              <p className="text-xl text-navy-600 mb-8 leading-relaxed">
                Court-accepted property valuations for divorce, separation, prenuptial agreements, and family disputes throughout Palm Beach County.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy-50 via-white to-navy-50">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                When marriages end or family disputes arise, accurate <Link to="/services/divorce-estate-appraisals" className="text-gold-600 hover:text-gold-700 font-medium">property valuations</Link> become essential for fair division of assets. Our certified appraisers provide independent, USPAP-compliant reports that courts, attorneys, and mediators trust to establish true market value—free from emotional bias or lender influence.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy-900 mt-8 mb-4">
                Why Family Law Cases Require Specialized Appraisals
              </h2>

              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                Unlike refinance or purchase appraisals, family law valuations must withstand legal scrutiny. Florida family courts require <strong>date-specific valuations</strong> that reflect market conditions at critical moments—whether that's the date of marriage, date of separation, or current market value for equitable distribution.
              </p>

              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                Our <Link to="/services/divorce-estate-appraisals" className="text-gold-600 hover:text-gold-700 font-medium">divorce appraisals</Link> meet all legal requirements and can be used for settlement negotiations, mediation, or trial testimony. We've worked with hundreds of family law attorneys across Palm Beach County and understand exactly what courts expect to see in a valuation report.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy-900 mt-8 mb-4">
                Protecting Separate vs. Marital Property
              </h2>

              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                One of the most contentious issues in divorce is distinguishing separate property from marital assets. If you owned real estate before marriage, a <Link to="/services/prenuptial-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">prenuptial agreement appraisal</Link> or <Link to="/services/date-of-marriage-valuation" className="text-gold-600 hover:text-gold-700 font-medium">date of marriage valuation</Link> establishes the baseline value—proving what was yours before the marriage began.
              </p>

              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                This is crucial for protecting your separate property claim. Without professional documentation, you may lose thousands (or millions) to marital property division. Our retrospective valuations use historical MLS data, county records, and market trend analysis to recreate accurate values from years or even decades ago.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy-900 mt-8 mb-4">
                Co-Ownership Disputes & Buyout Scenarios
              </h2>

              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                When siblings inherit property together, or unmarried partners split up, disputes over value often arise. A <Link to="/services/co-owner-buyout-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">co-owner buyout appraisal</Link> provides an independent, third-party opinion that both parties can trust—eliminating arguments over who gets what or how much the buyout should be.
              </p>

              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                If co-owners cannot agree, courts may order a <Link to="/services/partition-suit-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">partition suit appraisal</Link> to set a fair auction reserve or establish a forced buyout price. We serve as court-appointed or privately retained appraisers in these cases.
              </p>

              <h2 className="font-serif text-2xl font-bold text-navy-900 mt-8 mb-4">
                Expert Witness Testimony Available
              </h2>

              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                When cases go to trial, we provide <Link to="/services/expert-witness-appraisal" className="text-gold-600 hover:text-gold-700 font-medium">expert witness testimony</Link> to defend our valuations. Our certified appraisers have testified dozens of times in Palm Beach County Circuit Court and know how to present complex valuation evidence in clear, persuasive terms.
              </p>

              <div className="bg-gold-50 border-l-4 border-gold-500 p-6 my-8">
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">
                  What Sets Our Family Law Appraisals Apart
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-700">Over 20 years of experience with Palm Beach County family courts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-700">State-certified appraisers with expert witness credentials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-700">USPAP-compliant reports that withstand legal scrutiny</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-700">Retrospective valuations for any past date (date of marriage, separation, etc.)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-700">Fast turnaround for time-sensitive legal deadlines</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-700">Completely impartial—we work for truth, not either party</span>
                  </li>
                </ul>
              </div>

              <h2 className="font-serif text-2xl font-bold text-navy-900 mt-8 mb-4">
                How to Order Your Family Law Appraisal
              </h2>

              <p className="text-lg text-navy-700 leading-relaxed mb-6">
                Contact us at <a href="tel:5612825509" className="text-gold-600 hover:text-gold-700 font-medium">(561) 282-5509</a> to discuss your case. We'll confirm the <strong>effective date of value</strong> needed (current, date of marriage, date of separation, etc.), schedule an inspection, and deliver a comprehensive written report within 5–10 business days. Rush service available for urgent court deadlines.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8 text-center">
              Our Divorce & Family Law Appraisal Services
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Link
                    to={service.path}
                    className="group block bg-gradient-to-br from-navy-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gold-500 h-full"
                  >
                    <h3 className="font-semibold text-xl text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-navy-600 mb-4">
                      {service.description}
                    </p>
                    <span className="text-gold-600 text-sm font-medium group-hover:translate-x-2 inline-block transition-transform">
                      Learn More →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-bold mb-6">Need a Family Law Appraisal?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a court-accepted valuation. Fast turnaround, expert testimony available.
              </p>
              <a
                href="tel:5612825509"
                className="inline-flex items-center space-x-2 bg-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>(561) 282-5509</span>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
