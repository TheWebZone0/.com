import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/201091569465"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce-slow"
      aria-label="Contact on WhatsApp"
      style={{
        animation: 'bounce 2s infinite'
      }}
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default FloatingWhatsApp;