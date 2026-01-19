import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Award, Clock, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function PremiumFooter() {
  const serviceCategories = [
    {
      title: 'Divorce & Family Law',
      services: [
        { name: 'Divorce Appraisal', path: '/services/divorce-appraisal' },
        { name: 'Prenuptial Agreement Appraisal', path: '/services/prenuptial-appraisal' },
        { name: 'Date of Marriage Valuation', path: '/services/date-of-marriage-valuation' },
        { name: 'Equitable Distribution Appraisal', path: '/services/equitable-distribution-appraisal' },
        { name: 'Non-Marital Property Division Appraisal', path: '/services/non-marital-property-division' },
        { name: 'Co-Owner Buyout Appraisal', path: '/services/co-owner-buyout-appraisal' },
        { name: 'Partition Suit Appraisal', path: '/services/partition-suit-appraisal' },
      ]
    },
    {
      title: 'Estate, Trust & Inheritance',
      services: [
        { name: 'Estate & Probate Appraisal', path: '/services/estate-appraisal' },
        { name: 'Date of Death Valuation', path: '/services/date-of-death-valuation' },
        { name: 'Step-Up Basis Valuation', path: '/services/step-up-basis-valuation' },
        { name: 'Trust Appraisal', path: '/services/trust-appraisal' },
        { name: 'Estate Tax Appraisal (Form 706)', path: '/services/estate-tax-appraisal' },
        { name: 'Life Estate Appraisal', path: '/services/life-estate-appraisal' },
        { name: 'Family Transfer / Intra-Family Sale Appraisal', path: '/services/family-transfer-appraisal' },
        { name: 'Inheritance / Estate Tax Appraisal', path: '/services/inheritance-tax-appraisal' },
      ]
    },
    {
      title: 'Tax Appeals & IRS',
      services: [
        { name: 'Property Tax Appeal / Tax Grievance', path: '/services/tax-appeals' },
        { name: 'Gift Tax Appraisal', path: '/services/gift-tax-appraisal' },
        { name: 'Capital Gains Tax Appraisal', path: '/services/capital-gains-tax-appraisal' },
        { name: 'Charitable Contribution / Donation Appraisal', path: '/services/charitable-contribution-appraisal' },
        { name: 'Conservation Easement Appraisal', path: '/services/conservation-easement-appraisal' },
      ]
    },
    {
      title: 'Litigation & Expert Witness',
      services: [
        { name: 'Expert Witness Appraisal Services', path: '/services/expert-witness-appraisal' },
        { name: 'Litigation Support Appraisal', path: '/services/litigation-support-appraisal' },
        { name: 'Diminution in Value Appraisal', path: '/services/diminution-in-value-appraisal' },
        { name: 'Eminent Domain / Condemnation Appraisal', path: '/services/eminent-domain-appraisal' },
        { name: 'Bankruptcy Valuation (Chapter 7 & 13)', path: '/services/bankruptcy-valuation' },
        { name: 'Partition Suit Appraisal', path: '/services/partition-suit-appraisal' },
      ]
    },
    {
      title: 'Specialty & Complex',
      services: [
        { name: 'Partial / Fractional Interest Valuation', path: '/services/fractional-interest-valuation' },
        { name: 'Family Limited Partnership (FLP) Valuation', path: '/services/family-limited-partnership-valuation' },
        { name: 'Charitable Remainder Trust (CRT) Valuation', path: '/services/charitable-remainder-trust-valuation' },
        { name: 'Portfolio Valuation for High-Net-Worth Individuals', path: '/services/portfolio-valuation' },
        { name: 'Insurance Replacement Cost Valuation', path: '/services/insurance-replacement-cost' },
        { name: 'Financial Planning & Wealth Management Appraisal', path: '/services/financial-planning-appraisal' },
      ]
    },
    {
      title: 'Retrospective & Historical',
      services: [
        { name: 'Retrospective Appraisal (Any Past Date)', path: '/services/retrospective-appraisal' },
        { name: 'Date of Marriage Valuation', path: '/services/date-of-marriage-valuation' },
        { name: 'Step-Up Basis Valuation', path: '/services/step-up-basis-valuation' },
        { name: 'Date of Death Valuation', path: '/services/date-of-death-valuation' },
      ]
    }
  ];

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/eagle-logo-white.png"
                alt="Eagle Home Appraisal Logo"
                className="h-16 w-auto mb-4"
              />
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed">
              Providing accurate, reliable residential property appraisals in West Palm Beach and throughout Palm Beach County for over 20 years.
            </p>
            <div className="flex items-center space-x-2 text-gold-500">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">Certified Appraisers</span>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Areas Served', path: '/areas-we-serve' },
                { name: 'Blog/Resources', path: '/blog' },
                { name: 'Get Quote', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-navy-200 hover:text-gold-400 transition-colors duration-300 text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gold-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:5614933707"
                    className="flex items-start space-x-3 text-navy-200 hover:text-gold-400 transition-colors duration-300 group"
                  >
                    <Phone className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">(561) 493-3707</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:marlene@eaglehomeappraisal.com"
                    className="flex items-start space-x-3 text-navy-200 hover:text-gold-400 transition-colors duration-300 group"
                  >
                    <Mail className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm break-all">marlene@eaglehomeappraisal.com</span>
                  </a>
                </li>
              </ul>
              <div className="flex items-start space-x-3 text-navy-200">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  2029 Okeechobee Blvd<br />
                  West Palm Beach, FL 33409
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-12 pb-8">
          <div className="flex flex-col items-center mb-12">
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Connect With Us</h4>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="https://www.facebook.com/eaglehomeappraisalwestpalmbeach"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#1877F2' }}
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/eaglehomeappraisalwestpalmbeach"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#0A66C2' }}
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.instagram.com/ehawestpalmbeach/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#E4405F' }}
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://x.com/ehapalmbeach"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#000000' }}
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.pinterest.com/ehawestpalmbeach/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Pinterest"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#E60023' }}
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@ehawestpalmbeach"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#000000' }}
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@ehawestpalmbeach"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on YouTube"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#FF0000' }}
              >
                <Youtube className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-12 pb-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="font-serif text-xl font-semibold mb-6 text-white">
                Popular West Palm Beach Neighborhoods
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  { name: 'Flamingo Park', slug: 'flamingo-park' },
                  { name: 'El Cid', slug: 'el-cid' },
                  { name: 'Old Northwood', slug: 'old-northwood' },
                  { name: 'Northwood Shores', slug: 'northwood-shores' },
                  { name: 'Grandview Heights', slug: 'grandview-heights' },
                  { name: 'SoSo (South of Southern)', slug: 'soso' },
                  { name: 'Prospect Park', slug: 'prospect-park' },
                  { name: 'Northwood Harbor', slug: 'northwood-harbor' },
                  { name: 'Ibis Isle', slug: 'ibis-isle' },
                  { name: 'Villages of Palm Beach Lakes', slug: 'villages-palm-beach-lakes' }
                ].map((area) => (
                  <Link
                    key={area.slug}
                    to={`/areas/${area.slug}`}
                    className="text-navy-200 hover:text-gold-400 transition-colors text-sm py-1"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/areas-we-serve"
                className="inline-block mt-4 text-gold-400 hover:text-gold-300 text-sm font-semibold"
              >
                View All 35+ Areas →
              </Link>
            </div>

            <div>
              <h4 className="font-serif text-xl font-semibold mb-6 text-white">
                Palm Beach County Cities
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  { name: 'Palm Beach Gardens', slug: 'palm-beach-gardens' },
                  { name: 'Jupiter', slug: 'jupiter' },
                  { name: 'Wellington', slug: 'wellington' },
                  { name: 'Boca Raton', slug: 'boca-raton' },
                  { name: 'Delray Beach', slug: 'delray-beach' },
                  { name: 'Boynton Beach', slug: 'boynton-beach' },
                  { name: 'Lake Worth', slug: 'lake-worth' },
                  { name: 'Palm Beach', slug: 'palm-beach' },
                  { name: 'Royal Palm Beach', slug: 'royal-palm-beach' },
                  { name: 'Tequesta', slug: 'tequesta' }
                ].map((city) => (
                  <Link
                    key={city.slug}
                    to={`/areas/${city.slug}`}
                    className="text-navy-200 hover:text-gold-400 transition-colors text-sm py-1"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-12 pb-8">
          <h4 className="font-serif text-xl font-semibold mb-8 text-white text-center">
            All Appraisal Services
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
            {serviceCategories.map((category, idx) => (
              <div key={idx}>
                <h5 className="font-semibold text-base text-gold-400 mb-4">
                  {category.title}
                </h5>
                <ul className="space-y-2.5">
                  {category.services.map((service) => (
                    <li key={service.path}>
                      <Link
                        to={service.path}
                        className="text-navy-200 hover:text-gold-400 transition-colors duration-300 text-sm block"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center space-x-2 text-navy-200">
                <Shield className="w-4 h-4 text-gold-500" />
                <span>State-Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-navy-200">
                <Award className="w-4 h-4 text-gold-500" />
                <span>FHA Approved</span>
              </div>
              <div className="flex items-center space-x-2 text-navy-200">
                <Clock className="w-4 h-4 text-gold-500" />
                <span>Rush Appraisals Welcome</span>
              </div>
            </div>

            <div className="text-sm text-navy-300 text-center lg:text-right">
              <p className="mb-2">
                Certified & Certified General Appraisers on Staff
              </p>
              <p>© {new Date().getFullYear()} Eagle Home Appraisal. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
