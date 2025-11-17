import { Link } from 'react-router-dom';
import { MapPin, Briefcase } from 'lucide-react';

const popularNeighborhoods = [
  { name: 'Flamingo Park', path: '/areas/flamingo-park' },
  { name: 'El Cid', path: '/areas/el-cid' },
  { name: 'Old Northwood', path: '/areas/old-northwood' },
  { name: 'Northwood Shores', path: '/areas/northwood-shores' },
  { name: 'Grandview Heights', path: '/areas/grandview-heights' },
  { name: 'SoSo', path: '/areas/soso' },
  { name: 'Palm Beach Gardens', path: '/areas/palm-beach-gardens' },
  { name: 'Jupiter', path: '/areas/jupiter' }
];

const popularServices = [
  { name: 'Divorce Appraisal', path: '/services/divorce-appraisal' },
  { name: 'Estate Appraisal', path: '/services/estate-appraisal' },
  { name: 'Date of Death Valuation', path: '/services/date-of-death-valuation' },
  { name: 'Tax Appeals', path: '/services/tax-appeals' },
  { name: 'Expert Witness', path: '/services/expert-witness-appraisal' },
  { name: 'Pre-Listing Appraisal', path: '/services/pre-listing-appraisals' },
  { name: 'PMI Removal', path: '/services/pmi-removal' },
  { name: 'Retrospective Appraisal', path: '/services/retrospective-appraisal' }
];

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      <div className="bg-white rounded-2xl border border-navy-100 p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-navy-900">
            Popular Areas
          </h3>
        </div>
        <nav className="space-y-2">
          {popularNeighborhoods.map((area) => (
            <Link
              key={area.path}
              to={area.path}
              className="block px-3 py-2 text-navy-700 hover:bg-gold-50 hover:text-gold-700 rounded-lg transition-colors text-sm"
            >
              {area.name}
            </Link>
          ))}
        </nav>
        <Link
          to="/areas-we-serve"
          className="block mt-4 text-center text-gold-600 hover:text-gold-700 font-semibold text-sm"
        >
          View All Areas →
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-navy-100 p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-600 to-navy-700 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-navy-900">
            Our Services
          </h3>
        </div>
        <nav className="space-y-2">
          {popularServices.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="block px-3 py-2 text-navy-700 hover:bg-navy-50 hover:text-navy-900 rounded-lg transition-colors text-sm"
            >
              {service.name}
            </Link>
          ))}
        </nav>
        <Link
          to="/services"
          className="block mt-4 text-center text-navy-600 hover:text-navy-700 font-semibold text-sm"
        >
          View All Services →
        </Link>
      </div>

      <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-6 text-white">
        <h3 className="font-serif text-xl font-semibold mb-3">
          Need an Appraisal?
        </h3>
        <p className="text-gold-50 text-sm mb-4">
          Get a free quote for your property appraisal today.
        </p>
        <a
          href="tel:5612825509"
          className="block w-full bg-white text-gold-600 text-center py-3 rounded-lg font-semibold hover:bg-gold-50 transition-colors"
        >
          (561) 282-5509
        </a>
      </div>
    </aside>
  );
}
