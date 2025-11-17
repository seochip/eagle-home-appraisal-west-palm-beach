import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const services = [
    { name: 'Residential Appraisals', path: '/services/residential' },
    { name: 'Pre-Listing Appraisals', path: '/services/pre-listing' },
    { name: 'Divorce & Estate', path: '/services/divorce-estate' },
    { name: 'PMI Removal', path: '/services/pmi-removal' },
    { name: 'Tax Appeals', path: '/services/tax-appeals' },
    { name: 'FHA/VA Appraisals', path: '/services/fha-va' },
  ];

  return (
    <footer className="bg-charcoal-900 text-beige-100 py-20 px-4 sm:px-6 lg:px-8 border-t border-charcoal-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-2xl font-serif font-bold text-beige-50 tracking-tight">
                EAGLE HOME APPRAISAL
              </h3>
              <p className="text-xs text-beige-300 tracking-widest uppercase mt-1">West Palm Beach</p>
            </Link>
            <p className="text-beige-300 text-sm leading-relaxed">
              Professional property appraisal services throughout Palm Beach County.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-beige-50 mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-beige-300 hover:text-beige-50 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-beige-50 mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-beige-300 hover:text-beige-50 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-beige-300 hover:text-beige-50 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#services" className="text-beige-300 hover:text-beige-50 transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-beige-300 hover:text-beige-50 transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/terms" className="text-beige-300 hover:text-beige-50 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-beige-50 mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start space-x-3 text-beige-300 text-sm">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>2029 Okeechobee Blvd<br />West Palm Beach, FL 33409</span>
                </div>
              </li>
              <li>
                <a
                  href="tel:+15614933707"
                  className="flex items-center space-x-3 text-beige-300 hover:text-beige-50 transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>(561) 493-3707</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@eaglehomeappraisalwpb.com"
                  className="flex items-center space-x-3 text-beige-300 hover:text-beige-50 transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@eaglehomeappraisalwpb.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-beige-400 text-sm">
              © 2025 Eagle Home Appraisal. All rights reserved.
            </p>
            <p className="text-beige-400 text-sm mt-4 md:mt-0">
              Licensed & Certified Residential Appraisers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
