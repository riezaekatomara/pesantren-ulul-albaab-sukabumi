import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

/**
 * WhatsAppButton Component
 * 
 * Floating WhatsApp button that:
 * - Sticks to bottom-right corner (above BackToTop button)
 * - Shows after user scrolls down
 * - Has hover animation
 * - Opens WhatsApp chat with pre-filled message
 */
const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp Configuration
  const WHATSAPP_NUMBER = '6281285300800'; // Format: country code + number (no +)
  const DEFAULT_MESSAGE = 'Assalamualaikum, saya ingin bertanya tentang Pesantren Ulul Albaab';
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
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

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat via WhatsApp"
      >
        {/* Button */}
        <div className="relative">
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          {/* Main Button */}
          <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>

          {/* Notification Badge (Optional) */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>

        {/* Tooltip */}
        <div
          className={`absolute right-16 top-1/2 -translate-y-1/2 transition-all duration-300 ${
            isHovered
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium">
            Chat dengan CS Kami
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </div>
      </a>

      {/* Mobile: Compact Version */}
      <style>{`
        @media (max-width: 640px) {
          .fixed.bottom-24.right-6 {
            bottom: 7rem;
            right: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;