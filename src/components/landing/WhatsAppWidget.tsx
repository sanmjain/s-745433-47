
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in CampusNex ERP for my educational institution. Can you provide more information?");
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3 }}
      >
        {!isOpen ? (
          <MessageCircle className="w-7 h-7" />
        ) : (
          <X className="w-6 h-6" />
        )}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="absolute bottom-16 left-0 bg-white rounded-2xl shadow-2xl p-4 w-80 border"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">CampusNex Support</h4>
              <p className="text-sm text-gray-600">Typically replies instantly</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3 mb-4">
            <p className="text-sm text-gray-700">
              Hi there! 👋 Need help with CampusNex ERP? We're here to assist you with demos, pricing, and implementation.
            </p>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Start WhatsApp Chat
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
