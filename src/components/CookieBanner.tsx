import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from './ui/button';

interface CookieBannerProps {
  onOpenTerminos: () => void;
  onOpenCookies: () => void;
}

export function CookieBanner({ onOpenTerminos, onOpenCookies }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/rejected cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a small delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-5">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header with icon */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 mt-0.5">
            <Cookie className="w-5 h-5 text-[#1a1d3a]" />
          </div>
          <div>
            <h3 className="text-[#1a1d3a] mb-2">
              Cookies y Privacidad
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio web y analizar el tráfico. Al hacer clic en "Aceptar", consientes el uso de todas las cookies.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-4">
          <button
            className="text-[#3b82f6] hover:text-[#2563eb] text-sm transition-colors underline"
            onClick={(e) => {
              e.preventDefault();
              onOpenTerminos();
            }}
          >
            Términos y Condiciones
          </button>
          <button
            className="text-[#3b82f6] hover:text-[#2563eb] text-sm transition-colors underline"
            onClick={(e) => {
              e.preventDefault();
              onOpenCookies();
            }}
          >
            Política de Cookies
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button
            onClick={handleAccept}
            className="flex-1 bg-[#1a1d3a] hover:bg-[#2a2d4a] text-white"
          >
            Aceptar
          </Button>
          <Button
            onClick={handleReject}
            variant="outline"
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Rechazar
          </Button>
        </div>
      </div>
    </div>
  );
}
