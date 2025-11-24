import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube,
  School,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tentang: [
      { name: 'Profil Ponpes', path: '/profil' },
      { name: 'Visi & Misi', path: '/visi-misi' },
      { name: 'Sejarah', path: '/sejarah' },
      { name: 'Struktur Organisasi', path: '/struktur' },
    ],
    program: [
      { name: 'Program Tahfidz', path: '/program/tahfidz' },
      { name: 'Kitab Kuning', path: '/program/kitab' },
      { name: 'Bahasa Arab', path: '/program/bahasa' },
      { name: 'Ekstrakurikuler', path: '/program/ekstra' },
    ],
    informasi: [
      { name: 'Pendaftaran Santri', path: '/pendaftaran' },
      { name: 'Biaya Pendidikan', path: '/biaya' },
      { name: 'Fasilitas', path: '/fasilitas' },
      { name: 'FAQ', path: '/faq' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center">
                <School className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Ponpes Asy-Syaukani</h3>
                <p className="text-sm text-primary-200">Curup, Bengkulu</p>
              </div>
            </div>
            <p className="text-primary-100 mb-4 leading-relaxed">
              Membentuk generasi Qur'ani yang berakhlak mulia, berilmu, dan bermanfaat bagi umat.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-100">
                  Jl. Imam Asy Syaukani, Curup Tengah, Rejang Lebong, Bengkulu
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-400" />
                <span className="text-sm text-primary-100">0813-6951-2074</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-400" />
                <span className="text-sm text-primary-100">info@assyaukani.ac.id</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tentang Kami</h4>
            <ul className="space-y-2">
              {footerLinks.tentang.map((link) => (
                <li key={link.path}>
                  <a 
                    href={link.path}
                    className="text-primary-100 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Program</h4>
            <ul className="space-y-2">
              {footerLinks.program.map((link) => (
                <li key={link.path}>
                  <a 
                    href={link.path}
                    className="text-primary-100 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Informasi</h4>
            <ul className="space-y-2">
              {footerLinks.informasi.map((link) => (
                <li key={link.path}>
                  <a 
                    href={link.path}
                    className="text-primary-100 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-200 text-sm">
              © {currentYear} Pondok Pesantren Asy-Syaukani. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-200">Follow Us:</span>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center hover:bg-accent-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center hover:bg-accent-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center hover:bg-accent-400 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <p className="text-center text-primary-300 text-sm mt-4 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400" /> for Ponpes Asy-Syaukani
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;