import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { ServiceSchema, FAQSchema } from '../../components/Schema';
import FAQSection from '../../components/FAQSection';
import { Helmet } from 'react-helmet-async';

export default function FHAVAAppraisals() {
  const faqs = [
    {
      question: "What makes FHA/VA appraisals different from conventional appraisals?",
      answer: "FHA and VA appraisals must meet stricter requirements set by federal agencies. They include additional property condition assessments, safety checks, and specific valuation guidelines that protect government-backed loan programs and military service members."
    },
    {
      question: "Am I eligible for an FHA or VA loan?",
      answer: "FHA loans are available to most borrowers, including first-time homebuyers, with lower down payment requirements (as low as 3.5%). VA loans are exclusively for eligible veterans, active-duty service members, and qualifying family members with no down payment required."
    },
    {
      question: "What property requirements must be met for FHA/VA loans?",
      answer: "Properties must meet minimum property standards including safe electrical systems, adequate heating, sound roof, no peeling paint (for homes built before 1978), proper drainage, and overall structural soundness. The appraiser identifies any deficiencies that must be corrected."
    },
    {
      question: "How long does an FHA/VA appraisal take?",
      answer: "Most FHA/VA appraisals are completed within 3-5 business days from inspection. The process may take slightly longer than conventional appraisals due to additional documentation and inspection requirements."
    },
    {
      question: "What if the appraisal identifies required repairs?",
      answer: "If repairs are required, they must be completed before the loan can close. The appraiser will need to re-inspect the property after repairs are made to verify compliance. Sellers typically make repairs, but this can be negotiated."
    },
    {
      question: "Are FHA/VA appraisals more expensive?",
      answer: "FHA/VA appraisals typically cost slightly more than conventional appraisals due to additional requirements and documentation. However, they provide extra protection for buyers and ensure the property meets federal safety and livability standards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FHA & VA Appraisals West Palm Beach | Government Loan Appraisals</title>
        <meta name="description" content="FHA and VA approved appraisals in West Palm Beach. Expert valuations meeting federal guidelines for government-backed home loans." />
      </Helmet>
      <ServiceSchema
        name="FHA & VA Appraisals"
        description="Professional FHA and VA appraisals meeting federal guidelines for government-backed home loans in West Palm Beach, FL"
        serviceType="Real Estate Appraisal"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-beige-50">
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beige-100 via-beige-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-2 text-sm text-charcoal-500 mb-6">
                <Link to="/" className="hover:text-charcoal-900">Home</Link>
                <span>/</span>
                <span className="text-charcoal-900">FHA & VA Appraisals</span>
              </div>

              <div className="inline-flex items-center space-x-2 bg-beige-200 text-charcoal-800 px-4 py-2 rounded-full text-sm font-medium mb-6 tracking-wide">
                <Shield className="h-4 w-4" />
                <span>GOVERNMENT LOANS</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-serif font-bold text-charcoal-900 mb-6 leading-tight">
                FHA & VA Loan Appraisals
              </h1>
              <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
                Expert appraisals meeting FHA and VA federal guidelines. Serving veterans, active military, and homebuyers throughout West Palm Beach.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+15614933707" className="bg-charcoal-900 text-beige-50 px-8 py-4 hover:bg-charcoal-800 transition-all font-medium shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 tracking-wide">
                  <Phone className="h-5 w-5" />
                  <span>(561) 493-3707</span>
                </a>
                <Link to="/#contact" className="bg-white text-charcoal-900 px-8 py-4 hover:bg-beige-100 transition-all font-medium shadow-md hover:shadow-lg flex items-center justify-center space-x-2 border border-charcoal-200 tracking-wide">
                  <span>Schedule Appraisal</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">Federal Guidelines Expertise</h2>
                <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                  FHA and VA loans provide excellent opportunities for homeownership with low or no down payment requirements. Our certified appraisers are approved for FHA and VA work and thoroughly understand the specific requirements for these government-backed loan programs.
                </p>
                <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
                  We ensure your appraisal meets all federal guidelines, protecting your investment and facilitating a smooth closing process.
                </p>
                <div className="space-y-4">
                  {[
                    'FHA/VA approved appraisers',
                    'Complete property condition assessment',
                    'Federal guideline compliance',
                    'Safety and livability inspection',
                    'Fast turnaround time',
                    'Detailed documentation'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-charcoal-900 flex-shrink-0" />
                      <span className="text-charcoal-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Residential property for FHA VA loan"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>

            <div className="bg-beige-100 rounded-lg p-12 mb-20">
              <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-8 text-center">Understanding FHA & VA Loans</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white border border-charcoal-100 rounded-lg p-8">
                  <h3 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">FHA Loans</h3>
                  <p className="text-charcoal-600 mb-6">Federal Housing Administration loans offer accessible homeownership with flexible requirements.</p>
                  <ul className="space-y-3">
                    {[
                      'Down payment as low as 3.5%',
                      'Lower credit score requirements',
                      'Available to all qualified buyers',
                      'Primary residence requirement',
                      'Property must meet minimum standards',
                      'Mortgage insurance required'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-charcoal-900 flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-charcoal-100 rounded-lg p-8">
                  <h3 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">VA Loans</h3>
                  <p className="text-charcoal-600 mb-6">Department of Veterans Affairs loans provide exceptional benefits for those who served.</p>
                  <ul className="space-y-3">
                    {[
                      '0% down payment option',
                      'No private mortgage insurance',
                      'Competitive interest rates',
                      'Limited closing costs',
                      'For veterans and active military',
                      'Property must meet VA standards'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-charcoal-900 flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-8 text-center">What We Inspect</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Property Condition',
                    description: 'Overall structural integrity, foundation, walls, and general property condition assessment.'
                  },
                  {
                    title: 'Safety Features',
                    description: 'Electrical systems, heating, smoke detectors, and other safety-related components.'
                  },
                  {
                    title: 'Health Hazards',
                    description: 'Lead paint, water damage, mold, pest infestation, and environmental concerns.'
                  },
                  {
                    title: 'Mechanical Systems',
                    description: 'HVAC, plumbing, hot water heater, and all major mechanical components.'
                  },
                  {
                    title: 'Accessibility',
                    description: 'Safe and adequate access to the property, including driveways and walkways.'
                  },
                  {
                    title: 'Market Value',
                    description: 'Comparable sales analysis to determine fair market value per federal guidelines.'
                  }
                ].map((item, index) => (
                  <div key={index} className="border border-charcoal-100 rounded-lg p-6">
                    <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-3">{item.title}</h3>
                    <p className="text-charcoal-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-charcoal-900 text-beige-50 rounded-lg p-12 text-center">
              <h2 className="text-4xl font-serif font-bold mb-6">Benefits of FHA/VA Loans</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-5xl font-serif font-bold mb-3">3.5%</div>
                  <div className="text-lg font-medium mb-2">FHA Down Payment</div>
                  <div className="text-beige-200">Make homeownership accessible</div>
                </div>
                <div>
                  <div className="text-5xl font-serif font-bold mb-3">0%</div>
                  <div className="text-lg font-medium mb-2">VA Down Payment</div>
                  <div className="text-beige-200">No money down for veterans</div>
                </div>
                <div>
                  <div className="text-5xl font-serif font-bold mb-3">100%</div>
                  <div className="text-lg font-medium mb-2">Federal Backed</div>
                  <div className="text-beige-200">Government guarantee protection</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">Ready for Your FHA/VA Appraisal?</h2>
            <p className="text-xl text-charcoal-600 mb-8">
              Contact our FHA/VA approved appraisers today. We make the process smooth and ensure compliance with all federal requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15614933707" className="bg-charcoal-900 text-beige-50 px-8 py-4 hover:bg-charcoal-800 transition-all font-medium shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 tracking-wide">
                <Phone className="h-5 w-5" />
                <span>(561) 493-3707</span>
              </a>
              <Link to="/#contact" className="bg-white text-charcoal-900 px-8 py-4 hover:bg-beige-100 transition-all font-medium shadow-md hover:shadow-lg flex items-center justify-center space-x-2 border border-charcoal-200 tracking-wide">
                <span>Schedule Appraisal</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
