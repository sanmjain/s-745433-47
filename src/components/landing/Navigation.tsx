
import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Updated navigation items for CampusNex ERP
  const navItems = [
    { label: "Features", id: "features" },
    { label: "Solutions", id: "solutions" },
    { label: "Pricing", id: "pricing" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="backdrop-blur-xl bg-white/80 border border-white/30 rounded-full px-6 py-3 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="text-xl font-bold text-primary">CampusNex</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-neutral-600 hover:text-accent-purple transition-colors font-medium text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium text-sm"
          >
            Get Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-neutral-200/50 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden backdrop-blur-xl bg-white/90 border border-white/30 mt-2 rounded-xl p-4 shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-neutral-600 hover:text-accent-purple transition-colors font-medium px-3 py-2 hover:bg-neutral-200/50 rounded-lg text-left text-sm"
              >
                {item.label}
              </button>
            ))}
            <hr className="border-neutral-200" />
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium text-sm w-full"
            >
              Get Demo
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
