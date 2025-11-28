import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Profil from '../pages/Profil';
import Program from '../pages/Program';
import Pendaftaran from '../pages/Pendaftaran';
import Kontak from '../pages/Kontak';
import NotFound from '../pages/NotFound';

/**
 * Router Configuration for Pesantren Ulul Albaab Sukabumi Website
 * 
 * Routes:
 * - / : Homepage with hero, features, programs overview
 * - /profil : About pesantren, vision, mission, facilities
 * - /program : Detailed education programs (MTs & I'dadiyah)
 * - /pendaftaran : PPDB registration form and information
 * - /kontak : Contact form, information, and map
 * - * : 404 Not Found page
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        // Meta information for SEO
        handle: {
          title: 'Beranda - Pesantren Ulul Albaab Sukabumi',
          description: 'Pesantren Ulul Albaab Sukabumi - Pendidikan Islam terpadu dengan kurikulum Rabbani, Cendekia, dan Mandiri. PPDB 2026/2027 dibuka!',
          keywords: 'pesantren, ulul albaab, sukabumi, ppdb, pendaftaran, madrasah, tsanawiyah, i\'dadiyah'
        }
      },
      {
        path: 'profil',
        element: <Profil />,
        handle: {
          title: 'Profil - Pesantren Ulul Albaab Sukabumi',
          description: 'Profil lengkap Pesantren Ulul Albaab Sukabumi: Visi, Misi, Fasilitas, dan Kurikulum Terpadu Rabbani-Cendekia-Mandiri',
          keywords: 'profil pesantren, visi misi, fasilitas pesantren, kurikulum terpadu'
        }
      },
      {
        path: 'program',
        element: <Program />,
        handle: {
          title: 'Program Pendidikan - Pesantren Ulul Albaab Sukabumi',
          description: 'Program pendidikan MTs dan I\'dadiyah Lughawiy di Pesantren Ulul Albaab Sukabumi dengan kurikulum terpadu dan fasilitas lengkap',
          keywords: 'program pendidikan, mts, i\'dadiyah lughawiy, kurikulum pesantren'
        }
      },
      {
        path: 'pendaftaran',
        element: <Pendaftaran />,
        handle: {
          title: 'Pendaftaran PPDB 2026/2027 - Pesantren Ulul Albaab Sukabumi',
          description: 'Pendaftaran Penerimaan Peserta Didik Baru (PPDB) Pesantren Ulul Albaab Sukabumi tahun ajaran 2026/2027. Daftar sekarang!',
          keywords: 'ppdb, pendaftaran, santri baru, formulir pendaftaran, biaya pendaftaran'
        }
      },
      {
        path: 'kontak',
        element: <Kontak />,
        handle: {
          title: 'Kontak - Pesantren Ulul Albaab Sukabumi',
          description: 'Hubungi Pesantren Ulul Albaab Sukabumi: Alamat, Telepon, Email, dan Formulir Kontak. Lokasi di Cicantayan, Sukabumi, Jawa Barat',
          keywords: 'kontak pesantren, alamat, telepon, email, lokasi, map'
        }
      }
    ]
  },
  {
    // Catch-all route for 404
    path: '*',
    element: <NotFound />,
    handle: {
      title: '404 - Halaman Tidak Ditemukan',
      description: 'Halaman yang Anda cari tidak ditemukan'
    }
  }
]);

export default router;