import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  BookOpenCheck,
  GraduationCap,
  Globe,
  Dumbbell,
  Music,
  Palette,
  Code,
  CheckCircle,
  Clock,
  Target,
  Users,
  Award,
  ArrowRight,
  Calendar,
  TrendingUp
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const Program = () => {
  
  const programUtama = [
    {
      icon: BookOpenCheck,
      title: 'Program Tahfidz Al-Qur\'an',
      description: 'Program unggulan dengan target hafalan 30 juz Al-Qur\'an dengan metode mutqin (kuat hafalannya)',
      gradient: 'from-primary-500 to-primary-700',
      features: [
        'Target hafalan 30 juz dalam 6 tahun',
        'Setoran hafalan setiap hari kepada ustadz',
        'Muroja\'ah (pengulangan) terjadwal',
        'Sistem talaqqi (guru mengajar langsung)',
        'Evaluasi bulanan dan semester'
      ],
      jadwal: [
        { waktu: '04.00 - 05.30', kegiatan: 'Tahajud & Tahfidz' },
        { waktu: '16.00 - 17.30', kegiatan: 'Setoran Hafalan Baru' },
        { waktu: '19.30 - 21.00', kegiatan: 'Muroja\'ah Hafalan' }
      ],
      target: '5 juz per tahun (rata-rata)',
      durasi: '6 Tahun',
      peserta: '150+ Santri'
    },
    {
      icon: BookOpen,
      title: 'Kajian Kitab Kuning',
      description: 'Pembelajaran kitab salaf dari berbagai bidang keilmuan dengan metode klasikal dan sorogan',
      gradient: 'from-accent-400 to-accent-600',
      features: [
        'Nahwu & Shorof (gramatika Arab)',
        'Fiqih & Ushul Fiqih',
        'Tafsir & Ulumul Qur\'an',
        'Hadits & Ulumul Hadits',
        'Akidah & Tauhid'
      ],
      jadwal: [
        { waktu: '08.00 - 12.00', kegiatan: 'Kajian Kitab Klasikal' },
        { waktu: '14.00 - 16.00', kegiatan: 'Sorogan Individu' },
        { waktu: '20.00 - 21.00', kegiatan: 'Bahtsul Masa\'il' }
      ],
      target: '15+ kitab kuning',
      durasi: '6 Tahun',
      peserta: '200+ Santri'
    },
    {
      icon: Globe,
      title: 'Bahasa Arab & Inggris',
      description: 'Program penguasaan bahasa asing dengan metode langsung (direct method) untuk percakapan aktif',
      gradient: 'from-gold-500 to-gold-700',
      features: [
        'Conversation class setiap hari',
        'Zona wajib bahasa (Arab/Inggris)',
        'Debat & pidato bahasa asing',
        'Penulisan artikel bahasa asing',
        'English/Arabic day setiap minggu'
      ],
      jadwal: [
        { waktu: '06.00 - 07.00', kegiatan: 'Morning Conversation' },
        { waktu: '13.00 - 14.00', kegiatan: 'Vocabulary Building' },
        { waktu: '15.00 - 16.00', kegiatan: 'Language Practice' }
      ],
      target: 'Fasih aktif & pasif',
      durasi: '6 Tahun',
      peserta: '180+ Santri'
    },
    {
      icon: GraduationCap,
      title: 'Pendidikan Formal',
      description: 'Integrasi dengan kurikulum nasional setingkat SMP dan SMA yang terakreditasi',
      gradient: 'from-blue-500 to-blue-700',
      features: [
        'Kurikulum Kemenag & Diknas',
        'Akreditasi A',
        'Persiapan SBMPTN',
        'Try out berkala',
        'Bimbingan belajar intensif'
      ],
      jadwal: [
        { waktu: '08.00 - 12.00', kegiatan: 'Pembelajaran Formal' },
        { waktu: '14.00 - 16.00', kegiatan: 'Praktikum & Lab' },
        { waktu: '19.00 - 20.30', kegiatan: 'Bimbel Malam' }
      ],
      target: '95% kelulusan SBMPTN',
      durasi: '6 Tahun',
      peserta: '300+ Santri'
    }
  ];

  const ekstrakurikuler = [
    {
      icon: Dumbbell,
      title: 'Olahraga',
      items: ['Futsal', 'Voli', 'Badminton', 'Pencak Silat']
    },
    {
      icon: Music,
      title: 'Seni',
      items: ['Hadroh', 'Qasidah', 'Kaligrafi', 'Rebana']
    },
    {
      icon: Code,
      title: 'Teknologi',
      items: ['Desain Grafis', 'Video Editing', 'Coding', 'Digital Marketing']
    },
    {
      icon: Palette,
      title: 'Kreativitas',
      items: ['Jurnalistik', 'Public Speaking', 'Menulis', 'Debat']
    }
  ];

  const keunggulan = [
    {
      icon: Target,
      title: 'Kurikulum Terpadu',
      description: 'Menggabungkan pendidikan agama dan umum secara seimbang dan terintegrasi'
    },
    {
      icon: Users,
      title: 'Pengajar Berkualitas',
      description: 'Ustadz dan guru lulusan universitas ternama dalam dan luar negeri'
    },
    {
      icon: Award,
      title: 'Metode Modern',
      description: 'Menggunakan metode pembelajaran terkini yang efektif dan menyenangkan'
    },
    {
      icon: TrendingUp,
      title: 'Track Record Terbukti',
      description: 'Alumni yang berprestasi dan diterima di PTN/PTS terkemuka'
    }
  ];

  const prosesLearning = [
    {
      step: '01',
      title: 'Pembelajaran',
      description: 'Metode klasikal dan individual dengan pendampingan intensif'
    },
    {
      step: '02',
      title: 'Praktik',
      description: 'Aplikasi langsung ilmu dalam kehidupan sehari-hari'
    },
    {
      step: '03',
      title: 'Evaluasi',
      description: 'Penilaian berkala untuk mengukur progress santri'
    },
    {
      step: '04',
      title: 'Pembinaan',
      description: 'Bimbingan kontinyu untuk pengembangan karakter'
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
            <BookOpen className="w-4 h-4" />
            Program Pendidikan
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-400">Unggulan</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beragam program pendidikan yang dirancang untuk mengembangkan potensi santri secara optimal dan menyeluruh
          </p>
        </div>
      </section>

      {/* Program Utama Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="accent" size="lg" className="mb-4">
              <Award className="w-4 h-4" />
              Program Inti
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Program Pendidikan Utama
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empat pilar program pendidikan yang menjadi fokus utama kami
            </p>
          </div>

          <div className="space-y-16">
            {programUtama.map((program, index) => (
              <Card key={index} variant="shadow" className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  
                  {/* Left - Info */}
                  <div className="space-y-6 p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-3">{program.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{program.description}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-800 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary-500" />
                        Materi yang Dipelajari:
                      </h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-4">
                      <Badge variant="primary">{program.durasi}</Badge>
                      <Badge variant="accent">{program.peserta}</Badge>
                      <Badge variant="gold">Target: {program.target}</Badge>
                    </div>
                  </div>

                  {/* Right - Jadwal */}
                  <div className={`bg-gradient-to-br ${program.gradient} p-8 text-white space-y-6`}>
                    <div className="flex items-center gap-3 mb-6">
                      <Clock className="w-8 h-8" />
                      <h4 className="text-2xl font-bold">Jadwal Kegiatan</h4>
                    </div>

                    <div className="space-y-4">
                      {program.jadwal.map((item, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/20 transition-colors">
                          <div className="flex items-start gap-4">
                            <Calendar className="w-5 h-5 flex-shrink-0 mt-1" />
                            <div className="flex-1">
                              <div className="font-bold text-lg mb-1">{item.waktu}</div>
                              <div className="text-white/90">{item.kegiatan}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/20">
                      <p className="text-white/90 text-sm">
                        * Jadwal dapat disesuaikan dengan kondisi dan kebutuhan pembelajaran
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ekstrakurikuler Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="gold" size="lg" className="mb-4">
              <Dumbbell className="w-4 h-4" />
              Pengembangan Diri
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Program Ekstrakurikuler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai kegiatan pengembangan bakat dan minat santri di luar jam pembelajaran formal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ekstrakurikuler.map((item, index) => (
              <Card key={index} variant="default" className="group hover:scale-105 transition-transform duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-400 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {item.items.map((subitem, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-500" />
                        {subitem}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="primary" size="lg" className="mb-4">
              <Award className="w-4 h-4" />
              Keunggulan
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mengapa Program Kami Unggul?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai keunggulan yang membuat program kami berbeda dan efektif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keunggulan.map((item, index) => (
              <Card key={index} variant="gradient" className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proses Learning Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="accent" size="lg" className="mb-4">
              <TrendingUp className="w-4 h-4" />
              Metode Pembelajaran
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proses Pembelajaran
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empat tahap sistematis dalam proses pembelajaran di ponpes kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prosesLearning.map((item, index) => (
              <div key={index} className="relative">
                <Card variant="shadow" className="text-center space-y-4 h-full hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-accent-400">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Card>
                {index < prosesLearning.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary-300" />
                  </div>
                )}
              </div>
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
            Tertarik Dengan Program Kami?
          </h2>
          <p className="text-xl text-primary-100">
            Daftarkan putra-putri Anda sekarang dan bergabunglah dengan program pendidikan terbaik kami
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/pendaftaran">
              <Button variant="accent" size="lg" icon={ArrowRight}>
                Daftar Santri Baru
              </Button>
            </Link>
            <Link to="/kontak">
              <Button variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20">
                Konsultasi Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Program;