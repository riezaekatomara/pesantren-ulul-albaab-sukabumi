import { 
  School, 
  Target, 
  Eye, 
  Award,
  Users,
  BookOpen,
  Building2,
  Wifi,
  Bed,
  Utensils,
  Library,
  Globe,
  Heart
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const Profil = () => {
  
  const sejarah = [
    {
      year: '2008',
      title: 'Pendirian Ponpes',
      description: 'Pondok Pesantren Asy-Syaukani didirikan oleh KH. Abdullah Ahmad dengan 20 santri pertama'
    },
    {
      year: '2012',
      title: 'Akreditasi A',
      description: 'Mendapatkan akreditasi A dari Kementerian Agama RI untuk tingkat Madrasah Tsanawiyah'
    },
    {
      year: '2015',
      title: 'Ekspansi Fasilitas',
      description: 'Pembangunan gedung asrama baru dan perpustakaan modern dengan kapasitas 300 santri'
    },
    {
      year: '2020',
      title: 'Program Digital',
      description: 'Meluncurkan program pembelajaran digital dan sistem pendaftaran online'
    },
    {
      year: '2024',
      title: '500+ Santri',
      description: 'Mencapai milestone 500+ santri aktif dengan 50+ tenaga pengajar berkualitas'
    }
  ];

  const visiMisi = {
    visi: 'Menjadi lembaga pendidikan Islam terkemuka yang menghasilkan generasi Qur\'ani, berakhlak mulia, dan berprestasi dalam bidang agama dan umum.',
    misi: [
      'Menyelenggarakan pendidikan Islam yang berkualitas dan modern',
      'Membentuk santri yang hafal Al-Qur\'an 30 juz dengan pemahaman yang mendalam',
      'Mengembangkan kemampuan berbahasa Arab dan Inggris secara aktif',
      'Membiasakan akhlakul karimah dalam kehidupan sehari-hari',
      'Mengintegrasikan pendidikan formal dan non-formal secara seimbang',
      'Mempersiapkan santri untuk melanjutkan ke jenjang pendidikan tinggi'
    ]
  };

  const prestasi = [
    {
      icon: Award,
      title: 'Juara 1 MTQ Tingkat Provinsi',
      year: '2023',
      category: 'Tahfidz 30 Juz'
    },
    {
      icon: Award,
      title: 'Best Islamic School',
      year: '2023',
      category: 'Bengkulu Award'
    },
    {
      icon: Award,
      title: 'Juara 2 Debat Bahasa Arab',
      year: '2022',
      category: 'Tingkat Nasional'
    },
    {
      icon: Award,
      title: '95% Kelulusan SBMPTN',
      year: '2024',
      category: 'Alumni Berprestasi'
    }
  ];

  const struktur = [
    {
      name: 'KH. Abdullah Ahmad',
      position: 'Pengasuh / Mudir',
      photo: 'bg-gradient-to-br from-primary-500 to-primary-700'
    },
    {
      name: 'Ustadz Dr. Muhammad Hasan',
      position: 'Wakil Mudir Bidang Akademik',
      photo: 'bg-gradient-to-br from-accent-400 to-accent-600'
    },
    {
      name: 'Ustadzah Siti Aminah, M.Pd',
      position: 'Wakil Mudir Bidang Kesiswaan',
      photo: 'bg-gradient-to-br from-gold-500 to-gold-700'
    },
    {
      name: 'Ustadz Ahmad Fauzi, S.Pd.I',
      position: 'Kepala Bagian Tahfidz',
      photo: 'bg-gradient-to-br from-primary-400 to-accent-500'
    }
  ];

  const fasilitas = [
    {
      icon: Building2,
      title: 'Asrama Nyaman',
      description: 'Asrama putra dan putri terpisah dengan kapasitas 300+ santri dilengkapi AC dan kamar mandi dalam'
    },
    {
      icon: Library,
      title: 'Perpustakaan Modern',
      description: 'Koleksi 5000+ buku, ruang baca ber-AC, dan akses digital library untuk menunjang pembelajaran'
    },
    {
      icon: Wifi,
      title: 'Internet & WiFi',
      description: 'Koneksi internet berkecepatan tinggi di seluruh area untuk mendukung pembelajaran digital'
    },
    {
      icon: School,
      title: 'Ruang Kelas Ber-AC',
      description: '20+ ruang kelas modern dengan fasilitas LCD proyektor dan sound system'
    },
    {
      icon: Utensils,
      title: 'Dapur & Kantin',
      description: 'Penyediaan makan 3x sehari dengan menu bergizi dan sehat, kantin dengan harga terjangkau'
    },
    {
      icon: Bed,
      title: 'Tempat Tidur Nyaman',
      description: 'Tempat tidur bertingkat dengan kasur empuk, lemari pribadi, dan area belajar individual'
    },
    {
      icon: Heart,
      title: 'Klinik Kesehatan',
      description: 'Layanan kesehatan 24 jam dengan tenaga medis profesional dan obat-obatan lengkap'
    },
    {
      icon: Globe,
      title: 'Laboratorium Bahasa',
      description: 'Lab bahasa Arab dan Inggris dengan peralatan modern untuk praktik speaking dan listening'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230b8f55' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" size="lg" className="mb-4">
            <School className="w-4 h-4" />
            Profil Pondok Pesantren
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-400">Asy-Syaukani</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mengenal lebih dekat Pondok Pesantren Asy-Syaukani, sejarah, visi misi, prestasi, dan fasilitas yang kami miliki
          </p>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="primary" size="lg" className="mb-4">
              <BookOpen className="w-4 h-4" />
              Sejarah
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dari 20 santri pertama hingga menjadi salah satu pondok pesantren terkemuka di Bengkulu
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-400 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {sejarah.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card variant="shadow" className="hover:scale-105 transition-transform duration-300">
                      <div className="space-y-3">
                        <Badge variant="primary">{item.year}</Badge>
                        <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </Card>
                  </div>

                  {/* Circle */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-500 border-4 border-white rounded-full shadow-lg z-10"></div>

                  {/* Spacer */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Visi */}
            <Card variant="gradient" className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="w-8 h-8 text-primary-500" />
                </div>
                <div>
                  <Badge variant="primary" className="mb-2">Visi</Badge>
                  <h3 className="text-3xl font-bold text-gray-800">Visi Kami</h3>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {visiMisi.visi}
              </p>
            </Card>

            {/* Misi */}
            <Card variant="shadow" className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <Badge variant="accent" className="mb-2">Misi</Badge>
                  <h3 className="text-3xl font-bold text-gray-800">Misi Kami</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {visiMisi.misi.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Prestasi Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="gold" size="lg" className="mb-4">
              <Award className="w-4 h-4" />
              Prestasi
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Prestasi Yang Membanggakan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai penghargaan yang telah diraih oleh santri dan lembaga kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prestasi.map((item, index) => (
              <Card key={index} variant="default" className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-gold-600" />
                </div>
                <Badge variant="gold" size="sm" className="mb-3">{item.year}</Badge>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="accent" size="lg" className="mb-4">
              <Users className="w-4 h-4" />
              Struktur Organisasi
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kepemimpinan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim pengurus yang berpengalaman dan berdedikasi tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {struktur.map((person, index) => (
              <Card key={index} variant="shadow" className="text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-32 h-32 ${person.photo} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold group-hover:scale-110 transition-transform`}>
                  {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{person.name}</h3>
                <Badge variant="primary" size="sm">{person.position}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="primary" size="lg" className="mb-4">
              <Building2 className="w-4 h-4" />
              Fasilitas
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fasilitas Lengkap & Modern
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai fasilitas penunjang untuk kenyamanan dan pembelajaran optimal santri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fasilitas.map((item, index) => (
              <Card key={index} variant="default" className="group hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
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
            Ingin Tahu Lebih Lanjut?
          </h2>
          <p className="text-xl text-primary-100">
            Kunjungi kami atau hubungi untuk informasi lebih detail tentang program dan pendaftaran
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/pendaftaran" className="inline-block">
              <button className="px-8 py-4 bg-accent-400 text-white rounded-lg font-medium hover:bg-accent-500 active:bg-accent-600 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                Daftar Sekarang
              </button>
            </a>
            <a href="/kontak" className="inline-block">
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium border-2 border-white/20 transition-all duration-200 flex items-center justify-center gap-2">
                Hubungi Kami
              </button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Profil;