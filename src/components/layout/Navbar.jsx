import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, School, Home, BookOpen, UserPlus, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler untuk menutup mobile menu saat link diklik
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Beranda', path: '/', icon: Home },
    { name: 'Profil', path: '/profil', icon: School },
    { name: 'Program', path: '/program', icon: BookOpen },
    { name: 'Pendaftaran', path: '/pendaftaran', icon: UserPlus },
    { name: 'Kontak', path: '/kontak', icon: Phone }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
              <School className="w-7 h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-gray-900 leading-tight">
                Pesantren Ulul Albaab
              </h1>
              <p className="text-xs text-gray-600">Sukabumi - Managed By Al-Andalus</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 text-sm font-medium transition-all relative group ${
                    isActive(link.path)
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    isActive(link.path) ? 'text-primary-600' : ''
                  }`} />
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all ${
                      isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link to="/pendaftaran">
              <Button variant="primary" size="sm">
                Daftar PPDB 2026/2027
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-primary-50 text-primary-600 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${
                    isActive(link.path) ? 'text-primary-600' : 'text-gray-500'
                  }`} />
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Contact Info */}
            <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
              <div className="px-4 pb-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Hubungi Kami</p>
              </div>

              <a
                href="https://maps.google.com/?q=Jl.+KH+Mama+Oyon+Cihaur+Cicantayan+Sukabumi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="leading-tight">Jl. K.H. Mama Oyon, Kp. Cihaur RT.04 RW.04, Cicantayan, Sukabumi, Jawa Barat 43155</span>
              </a>

              <a
                href="tel:081285300800"
                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>0812-85-300800</span>
              </a>

              <a
                href="https://www.alandalus-ululalbaab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>alandalus-ululalbaab.com</span>
              </a>

              <a
                href="https://www.instagram.com/alandalusululalbaab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@alandalusululalbaab</span>
              </a>
            </div>

            {/* Mobile CTA Button */}
            <div className="px-4 pt-4">
              <Link to="/pendaftaran" onClick={handleLinkClick}>
                <Button variant="primary" className="w-full">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Daftar PPDB 2026/2027
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;