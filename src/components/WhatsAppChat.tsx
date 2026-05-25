import { MessageCircle } from 'lucide-react';

export default function WhatsAppChat() {
  const phoneNumber = '2349168703000';
  const message = 'Hello Akilina, I need logistics solutions for my business.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
    </button>
  );
}
