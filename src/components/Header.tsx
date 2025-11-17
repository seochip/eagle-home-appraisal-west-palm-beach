import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Residential Appraisals', path: '/services/residential' },
    { name: 'Pre-Listing Appraisals', path: '/services/pre-listing' },
    { name: 'Divorce & Estate', path: '/services/divorce-estate' },
    { name: 'PMI Removal', path: '/services/pmi-removal' },
    { name: 'Tax Appeals', path: '/services/tax-appeals' },
    { name: 'FHA/VA Appraisals', path: '/services/fha-va' },
  ];

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-beige-100/95 backdrop-blur-sm border-b border-charcoal-100 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div>
              <h1 className="text-2xl font-serif font-bold text-charcoal-900 tracking-tight">EAGLE HOME APPRAISAL</h1>
              <p className="text-xs text-charcoal-500 tracking-widest uppercase">West Palm Beach</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-charcoal-600 hover:text-charcoal-900 transition-colors font-medium text-sm tracking-wide">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-charcoal-600 hover:text-charcoal-900 transition-colors font-medium text-sm tracking-wide flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-beige-50 rounded-lg shadow-xl border border-charcoal-100 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-charcoal-600 hover:bg-beige-200 hover:text-charcoal-900 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('about')} className="text-charcoal-600 hover:text-charcoal-900 transition-colors font-medium text-sm tracking-wide">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-charcoal-900 text-beige-50 px-6 py-2.5 hover:bg-charcoal-800 transition-colors font-medium text-sm tracking-wide">
              Get Started
            </button>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-charcoal-600 hover:text-charcoal-900 transition-colors">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-beige-100 border-t border-charcoal-100">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">
              Home
            </Link>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection('about')} className="text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="mx-4 mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
