import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * BackToTop Component
 * 
 * Floating button that:
 * - Appears after scrolling down
 * - Smoothly scrolls to top on click
 * - Positioned below WhatsApp button
 * - Has smooth animations
 */
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Kembali ke atas"
    >
      <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      
      {/* Optional: Progress Ring */}
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary-200 opacity-30"
        />
      </svg>

      {/* Mobile Adjustment */}
      <style>{`
        @media (max-width: 640px) {
          .fixed.bottom-6.right-6.z-40 {
            bottom: 1.5rem;
            right: 1.5rem;
          }
        }
      `}</style>
    </button>
  );
};

export default BackToTop;