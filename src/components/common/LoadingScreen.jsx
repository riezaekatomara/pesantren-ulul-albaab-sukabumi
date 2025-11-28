import { useState, useEffect } from 'react';
import { School, Loader2 } from 'lucide-react';

/**
 * LoadingScreen Component
 * 
 * Shows a branded loading screen when:
 * - Website first loads
 * - Fades out after content is ready
 * - Professional animation
 */
const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Minimum loading time for UX (feel professional)
    const minLoadTime = setTimeout(() => {
      setFadeOut(true);
      
      // Remove from DOM after fade animation
      setTimeout(() => {
        setIsLoading(false);
      }, 2150); // Match with CSS transition duration
    }, 2650); // Show for at least 1 second

    return () => clearTimeout(minLoadTime);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center space-y-8 px-4">
        
        {/* Logo Animation */}
        <div className="relative">
          {/* Pulse Circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-white/20 rounded-full animate-ping"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/30 rounded-full animate-pulse"></div>
          </div>
          
          {/* Logo */}
          <div className="relative w-20 h-20 mx-auto bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-bounce">
            <School className="w-10 h-10 text-primary-500" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Pesantren Ulul Albaab
          </h1>
          <p className="text-lg text-primary-100">
            Sukabumi - Managed By Al-Andalus
          </p>
        </div>

        {/* Loading Spinner */}
        <div className="flex items-center justify-center gap-3">
          <Loader2 className="w-6 h-6 text-white animate-spin" />
          <span className="text-white font-medium">Memuat...</span>
        </div>

        {/* Progress Bar (Optional) */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-white rounded-full animate-[slideRight_1s_ease-in-out_infinite]"></div>
        </div>

      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;