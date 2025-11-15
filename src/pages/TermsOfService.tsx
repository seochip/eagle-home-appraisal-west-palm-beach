import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { OrganizationSchema, BreadcrumbSchema } from '../components/Schema';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Eagle Home Appraisal West Palm Beach</title>
        <meta name="description" content="Terms of Service for Eagle Home Appraisal. Review our policies, service agreements, and professional standards." />
      </Helmet>
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Terms of Service', path: '/terms-of-service' }]} />

      <div className="min-h-screen bg-beige-50">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-charcoal-500 mb-6">
              <Link to="/" className="hover:text-charcoal-900">Home</Link>
              <span>/</span>
              <span className="text-charcoal-900">Terms of Service</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-charcoal-900 mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-lg text-charcoal-600 mb-12">
              Last Updated: January 2025
            </p>

            <div className="prose prose-lg max-w-none bg-white p-8 md:p-12 shadow-lg">
              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  By engaging Eagle Home Appraisal for appraisal services, you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and Eagle Home Appraisal.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  If you do not agree with any part of these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">2. Services Provided</h2>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Eagle Home Appraisal provides professional residential property appraisal services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal-600 mb-4">
                  <li>Residential property appraisals</li>
                  <li>Pre-listing appraisals</li>
                  <li>Divorce and estate appraisals</li>
                  <li>PMI removal appraisals</li>
                  <li>Property tax appeal appraisals</li>
                  <li>FHA and VA appraisals</li>
                </ul>
                <p className="text-charcoal-600 leading-relaxed">
                  All appraisals are conducted in accordance with the Uniform Standards of Professional Appraisal Practice (USPAP) and Florida state regulations.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">3. Professional Standards</h2>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Our appraisers are licensed and certified in the State of Florida. All appraisals comply with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal-600">
                  <li>Uniform Standards of Professional Appraisal Practice (USPAP)</li>
                  <li>Florida Department of Business and Professional Regulation requirements</li>
                  <li>Federal and state lending institution guidelines</li>
                  <li>Industry best practices and ethical standards</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">4. Payment Terms</h2>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Payment for appraisal services is due at the time of service or as otherwise agreed upon in writing. We accept the following forms of payment:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal-600 mb-4">
                  <li>Credit cards (Visa, MasterCard, American Express, Discover)</li>
                  <li>Debit cards</li>
                  <li>Check or money order</li>
                  <li>Electronic bank transfer</li>
                </ul>
                <p className="text-charcoal-600 leading-relaxed">
                  Fees are based on property type, complexity, and intended use of the appraisal. A quote will be provided prior to engagement. Additional fees may apply for rush orders, complex properties, or additional services requested after the initial engagement.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">5. Cancellation and Refund Policy</h2>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  <strong>Cancellations:</strong> If you need to cancel an appraisal appointment, please notify us at least 24 hours in advance. Cancellations made with less than 24 hours notice may be subject to a cancellation fee.
                </p>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  <strong>Refunds:</strong> Once an inspection has been completed and work has commenced on the appraisal report, fees are non-refundable. If an appraisal is cancelled prior to inspection and no work has been performed, a full refund will be provided.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  <strong>Incomplete Appraisals:</strong> If an appraisal cannot be completed due to property access issues, lack of comparable sales data, or other factors beyond our control, partial fees may apply for work performed.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">6. Property Access</h2>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  You agree to provide reasonable access to the subject property for inspection purposes. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal-600">
                  <li>Access to all interior areas of the property</li>
                  <li>Access to exterior areas, including yard, garage, and outbuildings</li>
                  <li>Reasonable cooperation in scheduling the inspection</li>
                  <li>Information about recent improvements, repairs, or property issues</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">7. Report Delivery and Use</h2>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Appraisal reports are typically delivered within 24-48 hours of property inspection, unless otherwise agreed upon. Reports are delivered electronically via secure email.
                </p>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  The appraisal report is prepared for the client who engaged our services. The report may only be used for the purpose specified in the appraisal engagement. Unauthorized distribution or use of the report is prohibited.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  The appraiser retains ownership of the appraisal report. The client receives a license to use the report for the intended purpose.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Eagle Home Appraisal provides professional opinions of property value based on analysis of available market data and property inspection. The appraisal represents our professional opinion as of a specific date and is not a guarantee of sale price or future value.
                </p>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  Our liability is limited to the fee paid for the appraisal service. We are not liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal-600">
                  <li>Indirect, consequential, or punitive damages</li>
                  <li>Market fluctuations or changes in property value</li>
                  <li>Lending decisions made by financial institutions</li>
                  <li>Hidden defects not discoverable during a standard inspection</li>
                  <li>Environmental hazards or conditions requiring specialized testing</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">9. Confidentiality</h2>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  We maintain the confidentiality of client information and appraisal reports in accordance with USPAP requirements and applicable law. Appraisal reports and client information will not be disclosed to third parties without client consent, except:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-charcoal-600">
                  <li>As required by law or legal process</li>
                  <li>To state regulatory agencies upon proper request</li>
                  <li>As authorized by the client in writing</li>
                  <li>To professional liability insurance carriers as necessary</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">10. Dispute Resolution</h2>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  If you have concerns about an appraisal or our services, please contact us immediately. We are committed to resolving issues promptly and professionally.
                </p>
                <p className="text-charcoal-600 leading-relaxed">
                  Any disputes arising from these Terms of Service or appraisal services shall be governed by the laws of the State of Florida. Both parties agree to attempt good-faith resolution of disputes through negotiation before pursuing legal action.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">11. Indemnification</h2>
                <p className="text-charcoal-600 leading-relaxed">
                  You agree to indemnify and hold harmless Eagle Home Appraisal, its appraisers, and employees from any claims, damages, or expenses arising from your misuse of the appraisal report or violation of these Terms of Service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">12. Changes to Terms</h2>
                <p className="text-charcoal-600 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">13. Contact Information</h2>
                <p className="text-charcoal-600 leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-beige-100 p-6 rounded-lg">
                  <p className="text-charcoal-900 font-bold mb-2">Eagle Home Appraisal</p>
                  <p className="text-charcoal-600">2029 Okeechobee Blvd</p>
                  <p className="text-charcoal-600">West Palm Beach, FL 33409</p>
                  <p className="text-charcoal-600 mt-3">Phone: (561) 493-3707</p>
                  <p className="text-charcoal-600">Email: info@eaglehomeappraisalwpb.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">14. Severability</h2>
                <p className="text-charcoal-600 leading-relaxed">
                  If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms of Service will otherwise remain in full force and effect.
                </p>
              </section>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/"
                className="inline-block bg-charcoal-900 text-beige-50 px-8 py-4 hover:bg-charcoal-800 transition-all font-medium shadow-lg tracking-wide"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
