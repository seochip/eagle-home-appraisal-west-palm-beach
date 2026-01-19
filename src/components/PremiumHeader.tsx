import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PremiumHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Areas Served', path: '/areas-we-serve' },
    { name: 'Blog/Resources', path: '/blog' },
    { name: 'Get Quote', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Divorce Appraisal', path: '/services/divorce-estate-appraisals' },
    { name: 'Estate & Probate Appraisal', path: '/services/estate-appraisal' },
    { name: 'Date of Death Valuation', path: '/services/date-of-death-valuation' },
    { name: 'Property Tax Appeal / Tax Grievance', path: '/services/tax-appeals' },
    { name: 'Pre-Listing Appraisal', path: '/services/pre-listing-appraisals' },
    { name: 'Pre-Purchase Appraisal', path: '/services/pre-purchase-appraisal' },
    { name: 'Trust Appraisal', path: '/services/trust-appraisal' },
    { name: 'Estate Planning & Step-Up Basis Valuation', path: '/services/estate-planning-step-up-basis' },
    { name: 'Expert Witness & Litigation Support', path: '/services/expert-witness-appraisal' },
    { name: 'Retrospective Appraisals', path: '/services/retrospective-appraisal' },
    { name: 'All Other Services', path: '/services/all-appraisal-services' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={(isScrolled || !isHomePage)
                  ? "/eagle-logo.png"
                  : "/eagle-logo-white.png"
                }
                alt="Eagle Home Appraisal Logo"
                className="h-12 lg:h-16 w-auto transition-opacity duration-300"
              />
              <span
                className={`font-serif text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                  (isScrolled || !isHomePage) ? 'text-gold-600' : 'text-white'
                }`}
              >
                West Palm Beach
              </span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
                    location.pathname === link.path
                      ? (isScrolled || !isHomePage)
                        ? 'text-gold-600'
                        : 'text-gold-400'
                      : (isScrolled || !isHomePage)
                      ? 'text-navy-800 hover:text-gold-600'
                      : 'text-white hover:text-gold-400'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      (isScrolled || !isHomePage) ? 'bg-gold-600' : 'bg-gold-400'
                    }`}
                  />
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`text-sm font-medium transition-colors duration-300 relative group flex items-center space-x-1 ${
                    location.pathname.startsWith('/services')
                      ? (isScrolled || !isHomePage)
                        ? 'text-gold-600'
                        : 'text-gold-400'
                      : (isScrolled || !isHomePage)
                      ? 'text-navy-800 hover:text-gold-600'
                      : 'text-white hover:text-gold-400'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      (isScrolled || !isHomePage) ? 'bg-gold-600' : 'bg-gold-400'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-navy-100 overflow-hidden z-50"
                    >
                      {serviceLinks.map((service, index) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className={`block px-6 py-3 text-sm transition-colors ${
                            index === 0
                              ? 'border-b border-navy-100 font-semibold text-navy-900 hover:bg-gold-50 hover:text-gold-600'
                              : location.pathname === service.path
                              ? 'bg-gold-50 text-gold-600'
                              : 'text-navy-700 hover:bg-navy-50 hover:text-gold-600'
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:5614933707"
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  (isScrolled || !isHomePage)
                    ? 'bg-gold-600 text-white hover:bg-gold-700'
                    : 'bg-gold-500 text-white hover:bg-gold-600'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>(561) 493-3707</span>
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                (isScrolled || !isHomePage)
                  ? 'text-navy-800 hover:bg-navy-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-navy-100">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/eagle-logo.png"
                      alt="Eagle Home Appraisal Logo"
                      className="h-10 w-auto"
                    />
                    <span className="font-serif text-lg font-bold text-gold-600">
                      Menu
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-navy-800 hover:bg-navy-100 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                          location.pathname === link.path
                            ? 'bg-gold-50 text-gold-600'
                            : 'text-navy-800 hover:bg-navy-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                  >
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${
                        location.pathname.startsWith('/services')
                          ? 'bg-gold-50 text-gold-600'
                          : 'text-navy-800 hover:bg-navy-50'
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isMobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4 mt-2 space-y-1 overflow-hidden"
                        >
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                                location.pathname === service.path
                                  ? 'bg-gold-50 text-gold-600 font-medium'
                                  : 'text-navy-700 hover:bg-navy-50'
                              }`}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </nav>

                <div className="p-6 border-t border-navy-100">
                  <a
                    href="tel:5614933707"
                    className="flex items-center justify-center space-x-2 w-full px-6 py-4 bg-gold-600 text-white rounded-full font-medium hover:bg-gold-700 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(561) 493-3707</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
