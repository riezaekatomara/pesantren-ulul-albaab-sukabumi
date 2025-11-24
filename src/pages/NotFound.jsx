import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Maaf, halaman yang Anda cari tidak ada.
        </p>
        <Link to="/">
          <Button variant="primary" icon={Home}>
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;