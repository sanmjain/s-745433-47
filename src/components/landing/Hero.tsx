
import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, BarChart3, Shield, Zap, Clock, GraduationCap, Calendar, FileText, CreditCard, MessageSquare, Award } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { icon: Users, delay: 0, position: "top-20 left-20" },
    { icon: BookOpen, delay: 0.5, position: "top-32 right-32" },
    { icon: BarChart3, delay: 1, position: "bottom-40 left-32" },
    { icon: Shield, delay: 1.5, position: "bottom-20 right-20" },
    { icon: GraduationCap, delay: 2, position: "top-40 left-1/4" },
    { icon: Calendar, delay: 2.5, position: "top-60 right-1/4" },
    { icon: FileText, delay: 3, position: "bottom-60 left-1/3" },
    { icon: CreditCard, delay: 3.5, position: "bottom-32 right-1/3" },
    { icon: MessageSquare, delay: 4, position: "top-1/2 left-16" },
    { icon: Award, delay: 4.5, position: "top-1/2 right-16" }
  ];

  const keyBenefits = [
    { icon: Zap, text: "Instant Setup", color: "text-accent-blue" },
    { icon: Clock, text: "Save 20+ Hours/Week", color: "text-accent-green" },
    { icon: Shield, text: "100% Secure", color: "text-accent-purple" }
  ];

  return (
    <header className="container-padding py-12 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} hidden lg:block`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 0.6, 
            y: [0, -10, 0],
          }}
          transition={{ 
            opacity: { delay: item.delay, duration: 0.5 },
            y: { repeat: Infinity, duration: 3, delay: item.delay }
          }}
        >
          <div className="w-16 h-16 glass-panel rounded-2xl flex items-center justify-center">
            <item.icon className="w-8 h-8 text-accent-blue" />
          </div>
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="max-w-6xl mx-auto text-center relative z-10 pt-20">
        {/* Attention-grabbing badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-blue to-accent-green text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg animate-pulse">
            <Zap className="w-5 h-5" />
            #1 ERP Software for Educational Institutions
          </span>
        </motion.div>

        {/* Powerful Heading */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform Your Campus with 
          <span className="block text-accent-blue">CampusNex ERP</span>
        </motion.h1>

        {/* Compelling Description */}
        <motion.p 
          className="text-2xl text-neutral-600 mb-8 max-w-4xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Stop wasting time on paperwork. Automate admissions, attendance, fees, and academics 
          in one powerful platform. <span className="text-accent-green font-bold">Trusted by 500+ institutions.</span>
        </motion.p>

        {/* Key Benefits */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {keyBenefits.map((benefit, index) => (
            <div key={benefit.text} className="glass-panel px-6 py-4 rounded-2xl flex items-center gap-3">
              <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              <span className="font-semibold text-primary">{benefit.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Strong CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-accent-blue to-accent-green text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            Get FREE Demo Now
            <ArrowRight className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg border-2 border-accent-blue hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
          >
            See Features
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Urgency Indicator */}
        <motion.div
          className="inline-block bg-gradient-to-r from-accent-green/10 to-accent-blue/10 border-2 border-accent-green/30 rounded-xl px-8 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center justify-center gap-4 text-accent-green font-bold">
            <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
            <span>Free Demo Available • No Credit Card Required • Setup in 24 Hours</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
