import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Pages
import Home from '../pages/Home';
import Profil from '../pages/Profil';
import Program from '../pages/Program';
import Pendaftaran from '../pages/Pendaftaran';
import Kontak from '../pages/Kontak';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'profil',
        element: <Profil />,
      },
      {
        path: 'program',
        element: <Program />,
      },
      {
        path: 'pendaftaran',
        element: <Pendaftaran />,
      },
      {
        path: 'kontak',
        element: <Kontak />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);