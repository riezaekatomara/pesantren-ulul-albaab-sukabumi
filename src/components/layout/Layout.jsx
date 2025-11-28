import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import WhatsAppButton from '../common/WhatsAppButton';
import BackToTop from '../common/BackToTop';
import LoadingScreen from '../common/LoadingScreen';

/**
 * Layout Component
 * 
 * Main layout wrapper that includes:
 * - LoadingScreen: Initial loading animation
 * - ScrollToTop: Automatically scroll to top on route change
 * - Navbar: Fixed navigation bar
 * - Outlet: Renders child routes
 * - Footer: Site footer
 * - WhatsAppButton: Floating WhatsApp chat button
 * - BackToTop: Floating scroll to top button
 */
const Layout = () => {
  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Action Buttons */}
      <WhatsAppButton />
      <BackToTop />
    </>
  );
};

export default Layout;