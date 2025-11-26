import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Youtube,
  School,
  Heart,
  Globe,
  ArrowUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    tentang: [
      { name: 'Profil Pesantren', path: '/profil' },
      { name: 'Visi & Misi', path: '/profil#visi-misi' },
      { name: 'Sejarah', path: '/profil#sejarah' },
      { name: 'Prestasi', path: '/profil#prestasi' },
    ],
    program: [
      { name: 'MTs (SMP)', path: '/program#mts' },
      { name: 'I\'dadiyah Lughawiy', path: '/program#idadiyah' },
      { name: 'Kurikulum Terpadu', path: '/program#kurikulum' },
      { name: 'Ekstrakurikuler', path: '/program#ekstra' },
    ],
    informasi: [
      { name: 'Pendaftaran PPDB', path: '/pendaftaran' },
      { name: 'Biaya Pendidikan', path: '/pendaftaran#biaya' },
      { name: 'Fasilitas', path: '/profil#fasilitas' },
      { name: 'Hubungi Kami', path: '/kontak' },
    ],
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-primary-900 to-primary-800 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
                  <School className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Pesantren Ulul Albaab</h3>
                  <p className="text-sm text-primary-200">Sukabumi - Managed By Al-Andalus</p>
                </div>
              </div>
              <p className="text-primary-100 mb-4 leading-relaxed text-sm">
                Lembaga pendidikan Islam yang dikelola oleh Al-Andalus Management dengan kurikulum terpadu Rabbani, Cendekia, dan Mandiri. Menghasilkan generasi Qur'ani yang berakhlak mulia, berilmu luas, dan bermanfaat bagi umat.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <a 
                    href="https://maps.google.com/?q=Jl.+KH+Mama+Oyon+Cihaur+Cicantayan+Sukabumi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-100 leading-tight hover:text-accent-400 transition-colors"
                  >
                    Jl. K.H. Mama Oyon, Kp. Cihaur RT.04 RW.04, Desa Cicantayan, Kec. Cicantayan, Kab. Sukabumi, Jawa Barat 43155
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-400" aria-hidden="true" />
                  <a 
                    href="tel:081285300800" 
                    className="text-sm text-primary-100 hover:text-accent-400 transition-colors"
                  >
                    0812-85-300800
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-400" aria-hidden="true" />
                  <a 
                    href="mailto:info@alandalus-ululalbaab.com" 
                    className="text-sm text-primary-100 hover:text-accent-400 transition-colors"
                  >
                    info@alandalus-ululalbaab.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-accent-400" aria-hidden="true" />
                  <a 
                    href="https://www.alandalus-ululalbaab.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-primary-100 hover:text-accent-400 transition-colors"
                  >
                    alandalus-ululalbaab.com
                  </a>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Tentang Kami</h4>
              <ul className="space-y-2">
                {footerLinks.tentang.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-primary-100 hover:text-accent-400 transition-colors text-sm block hover:translate-x-1 transform duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Program</h4>
              <ul className="space-y-2">
                {footerLinks.program.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-primary-100 hover:text-accent-400 transition-colors text-sm block hover:translate-x-1 transform duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Informasi</h4>
              <ul className="space-y-2">
                {footerLinks.informasi.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-primary-100 hover:text-accent-400 transition-colors text-sm block hover:translate-x-1 transform duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-primary-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <p className="text-primary-200 text-sm">
                © {currentYear} Pesantren Al-Andalus Ulul Albaab Sukabumi. All rights reserved.
              </p>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-primary-200">Ikuti Kami:</span>
                <div className="flex gap-3">
                  <a 
                    href="https://www.instagram.com/alandalusululalbaab" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center hover:bg-accent-500 hover:scale-110 transition-all"
                    aria-label="Kunjungi Instagram Pesantren Ulul Albaab"
                  >
                    <Instagram className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@UlulAlbaabSukabumi" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center hover:bg-accent-500 hover:scale-110 transition-all"
                    aria-label="Kunjungi YouTube Pesantren Ulul Albaab"
                  >
                    <Youtube className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-4 border-t border-primary-700/50">
              <p className="text-primary-300 text-sm flex items-center justify-center gap-1.5">
                Made with 
                <Heart className="w-4 h-4 text-red-400 inline-block" style={{
                  animation: 'heartbeat 1.5s ease-in-out infinite'
                }} aria-hidden="true" /> 
                by Tim IT Pesantren Al-Andalus Ulul Albaab
              </p>
            </div>
          </div>
        </div>

        {/* Custom CSS for heartbeat animation */}
        <style>{`
          @keyframes heartbeat {
            0%, 100% {
              transform: scale(1);
            }
            10%, 30% {
              transform: scale(1.1);
            }
            20%, 40% {
              transform: scale(1);
            }
          }
        `}</style>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          showBackToTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Kembali ke atas"
      >
        <ArrowUp className="w-6 h-6" aria-hidden="true" />
      </button>
    </>
  );
};

export default Footer;