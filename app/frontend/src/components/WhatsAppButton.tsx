import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.25)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.35)] transition-all duration-500 group"
      aria-label="Chat on WhatsApp"
      style={{ animation: 'gentle-pulse 3s ease-in-out infinite' }}
    >
      <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.8} />
    </a>
  );
};

export default WhatsAppButton;
