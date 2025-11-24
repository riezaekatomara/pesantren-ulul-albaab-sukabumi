import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Award,
  School,  // ✅ Ganti Mosque jadi School
  BookOpenCheck,
  Heart,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const Home = () => {
  
  const features = [
    {
      icon: BookOpenCheck,
      title: 'Program Tahfidz',
      description: 'Bimbingan hafalan Al-Qur\'an 30 Juz dengan metode terpadu dan mutqin',
      color: 'primary'
    },
    {
      icon: BookOpen,
      title: 'Kajian Kitab Kuning',
      description: 'Pembelajaran kitab salaf dengan sistem klasikal dan sorogan',
      color: 'accent'
    },
    {
      icon: GraduationCap,
      title: 'Pendidikan Formal',
      description: 'Terintegrasi dengan pendidikan formal setingkat SMP dan SMA',
      color: 'gold'
    },
    {
      icon: School,  // ✅ Ganti Mosque
      title: 'Pembinaan Akhlak',
      description: 'Pembiasaan akhlakul karimah dalam kehidupan sehari-hari',
      color: 'primary'
    }
  ];

  const programs = [
    {
      title: 'Tahfidz Al-Qur\'an',
      description: 'Program unggulan dengan target hafalan 30 juz',
      image: 'bg-gradient-to-br from-primary-500 to-primary-700',
      duration: '6 Tahun',
      students: '150+ Santri'
    },
    {
      title: 'Kitab Kuning',
      description: 'Kajian kitab salaf dari berbagai bidang keilmuan',
      image: 'bg-gradient-to-br from-accent-400 to-accent-600',
      duration: '6 Tahun',
      students: '200+ Santri'
    },
    {
      title: 'Bahasa Arab & Inggris',
      description: 'Penguasaan bahasa asing aktif dan pasif',
      image: 'bg-gradient-to-br from-gold-500 to-gold-700',
      duration: '6 Tahun',
      students: '180+ Santri'
    }
  ];

  const stats = [
    { number: '500+', label: 'Santri Aktif', icon: Users },
    { number: '50+', label: 'Tenaga Pengajar', icon: GraduationCap },
    { number: '15+', label: 'Tahun Berdiri', icon: Award },
    { number: '95%', label: 'Tingkat Kelulusan', icon: Star }
  ];

  const testimonials = [
    {
      name: 'Ahmad Fauzi',
      role: 'Alumni 2022',
      text: 'Alhamdulillah, berkat pendidikan di Ponpes Asy-Syaukani, saya bisa hafal 30 juz dan melanjutkan studi ke perguruan tinggi Islam.',
      rating: 5
    },
    {
      name: 'Siti Khadijah',
      role: 'Wali Santri',
      text: 'Sangat puas dengan sistem pendidikan dan pembinaan akhlak di ponpes ini. Anak saya berkembang sangat baik.',
      rating: 5
    },
    {
      name: 'Muhammad Rizki',
      role: 'Santri Aktif',
      text: 'Lingkungan yang kondusif untuk menuntut ilmu agama. Ustadz-ustadzahnya sangat perhatian dan sabar.',
      rating: 5
    }
  ];

  const whyChooseUs = [
    'Metode pembelajaran yang terstruktur dan modern',
    'Pengajar berkualitas lulusan universitas ternama',
    'Fasilitas asrama yang nyaman dan lengkap',
    'Lingkungan islami yang kondusif',
    'Lokasi strategis dan mudah diakses',
    'Biaya pendidikan yang terjangkau'
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230b8f55' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <Badge variant="primary" size="md">
                <School className="w-4 h-4" />  {/* ✅ Ganti Mosque */}
                Pendaftaran Santri Baru 2025/2026
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Pondok Pesantren
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-400">
                    Asy-Syaukani
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Membentuk generasi Qur'ani yang berakhlak mulia, berilmu luas, dan bermanfaat bagi umat
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/pendaftaran">
                  <Button variant="primary" size="lg" icon={ArrowRight}>
                    Daftar Sekarang
                  </Button>
                </Link>
                <Link to="/profil">
                  <Button variant="outline" size="lg">
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </div>

              {/* Quick Info */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-gray-600">Curup, Bengkulu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <span className="text-sm text-gray-600">0813-6951-2074</span>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Card */}
                <Card variant="gradient" className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <School className="w-8 h-8 text-primary-500" />  {/* ✅ Ganti Mosque */}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Pendaftaran Dibuka!</h3>
                      <p className="text-gray-600">Tahun Ajaran 2025/2026</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-700">Pendaftaran Online 24/7</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-700">Biaya Terjangkau</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                      <span className="text-gray-700">Beasiswa Tersedia</span>
                    </div>
                  </div>

                  <Link to="/pendaftaran">
                    <Button variant="primary" className="w-full" icon={ArrowRight}>
                      Mulai Pendaftaran
                    </Button>
                  </Link>
                </Card>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="w-10 h-10 text-accent-400 mx-auto mb-3" />
                <h3 className="text-4xl md:text-5xl font-bold text-white">{stat.number}</h3>
                <p className="text-primary-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="primary" size="lg" className="mb-4">
              <Heart className="w-4 h-4" />
              Keunggulan Kami
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Ponpes Asy-Syaukani?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistem pendidikan terpadu yang menggabungkan ilmu agama dan umum dengan pembinaan akhlak
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                variant="default"
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}-500`} />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="accent" size="lg" className="mb-4">
              <BookOpen className="w-4 h-4" />
              Program Unggulan
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Program Pendidikan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beragam program pendidikan yang dirancang untuk mengembangkan potensi santri secara optimal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} variant="shadow" hover={true} className="overflow-hidden group">
                <div className={`h-48 ${program.image} rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <Badge variant="primary" size="sm">{program.duration}</Badge>
                  <Badge variant="gray" size="sm">{program.students}</Badge>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/program">
              <Button variant="primary" size="lg" icon={ArrowRight}>
                Lihat Semua Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Image/Illustration */}
            <div className="relative">
              <Card variant="gradient" className="p-12">
                <div className="space-y-8">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="w-10 h-10 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      Visi Kami
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Menjadi lembaga pendidikan Islam terkemuka yang menghasilkan generasi Qur'ani, berakhlak mulia, dan berprestasi
                    </p>
                  </div>
                </div>
              </Card>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent-400/20 rounded-full blur-3xl"></div>
            </div>

            {/* Right - List */}
            <div className="space-y-8">
              <div>
                <Badge variant="gold" size="lg" className="mb-4">
                  <Award className="w-4 h-4" />
                  Mengapa Kami?
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Alasan Memilih Ponpes Asy-Syaukani
                </h2>
                <p className="text-xl text-gray-600">
                  Berbagai keunggulan yang menjadikan kami pilihan terbaik untuk pendidikan putra-putri Anda
                </p>
              </div>

              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-50 transition-colors">
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{reason}</span>
                  </div>
                ))}
              </div>

              <Link to="/profil">
                <Button variant="gold" size="lg" icon={ArrowRight}>
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="accent" size="lg" className="mb-4">
              <Star className="w-4 h-4" />
              Testimoni
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengalaman nyata dari santri, alumni, dan wali santri kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="shadow" className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Siap Bergabung Bersama Kami?
          </h2>
          <p className="text-xl text-primary-100">
            Daftarkan putra-putri Anda sekarang dan raih masa depan yang lebih cerah bersama Ponpes Asy-Syaukani
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/pendaftaran">
              <Button variant="accent" size="lg" icon={ArrowRight}>
                Daftar Santri Baru
              </Button>
            </Link>
            <Link to="/kontak">
              <Button variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20">
                <Phone className="w-5 h-5" />
                Hubungi Kami
              </Button>
            </Link>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-primary-100">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@assyaukani.ac.id</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>0813-6951-2074</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;