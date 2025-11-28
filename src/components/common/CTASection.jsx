import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Phone, Globe, Instagram } from 'lucide-react';
import Button from '../ui/Button';

const CTASection = ({ 
  title = "Siap Bergabung Bersama Kami?",
  description = "Daftarkan putra-putri Anda sekarang untuk PPDB 2026/2027 dan raih masa depan yang lebih cerah",
  primaryButtonText = "Daftar PPDB 2026/2027",
  primaryButtonLink = "/pendaftaran",
  secondaryButtonText = "Hubungi Kami",
  secondaryButtonLink = "/kontak",
  showContactInfo = true,
  className = ""
}) => {
  return (
    <section className={`py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden ${className}`}>
      {/* Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} 
        aria-hidden="true"
      />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          {title}
        </h2>
        
        {/* Description */}
        <p className="text-xl text-primary-100 leading-relaxed">
          {description}
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to={primaryButtonLink}>
            <Button variant="accent" size="lg">
              {primaryButtonText}
            </Button>
          </Link>
          <Link to={secondaryButtonLink}>
            <Button 
              variant="ghost" 
              size="lg" 
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20"
            >
              <Phone className="w-5 h-5" />
              {secondaryButtonText}
            </Button>
          </Link>
        </div>

        {/* Contact Info */}
        {showContactInfo && (
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-primary-100">
            <a 
              href="tel:081285300800" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>0812-85-300800</span>
            </a>
            <a 
              href="https://www.alandalus-ululalbaab.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span>alandalus-ululalbaab.com</span>
            </a>
            <a 
              href="https://www.instagram.com/alandalusululalbaab" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@alandalusululalbaab</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

CTASection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  primaryButtonText: PropTypes.string,
  primaryButtonLink: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  secondaryButtonLink: PropTypes.string,
  showContactInfo: PropTypes.bool,
  className: PropTypes.string,
};

export default CTASection;