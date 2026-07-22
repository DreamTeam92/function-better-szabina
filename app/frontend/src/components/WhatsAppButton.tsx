import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/34608089472"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-[#C9A66B] flex items-center justify-center shadow-[0_4px_20px_rgba(201,166,107,0.25)] hover:bg-[#B89055] hover:shadow-[0_6px_28px_rgba(184,144,85,0.35)] transition-all duration-500 group hover:scale-105"
      aria-label="Chat on WhatsApp"
      style={{ animation: 'gentle-pulse 3s ease-in-out infinite' }}
    >
      <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.8} />
    </a>
  );
};

export default WhatsAppButton;
