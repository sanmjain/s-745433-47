
import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, BarChart3, Shield } from "lucide-react";

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
    { icon: Shield, delay: 1.5, position: "bottom-20 right-20" }
  ];

  const stats = [
    { number: "500+", label: "Institutions Served" },
    { number: "100K+", label: "Students Managed" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <header className="container-padding py-12 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-campus-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-campus-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-campus-cyan/5 rounded-full blur-3xl"></div>
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
            <item.icon className="w-8 h-8 text-campus-blue" />
          </div>
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="max-w-6xl mx-auto text-center relative z-10 pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-campus-blue to-campus-green text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
            <Shield className="w-4 h-4" />
            Trusted Educational ERP Platform
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          className="heading-xl mb-8 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Smart ERP Platform for Modern Campuses
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-xl text-campus-gray mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Manage admissions, academics, finance, and more – all in one comprehensive dashboard. 
          Streamline your institution's operations with our intelligent ERP solution.
        </motion.p>

        {/* Stats Section */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="glass-panel px-6 py-4 rounded-2xl">
              <div className="text-2xl font-bold text-campus-blue mb-1">{stat.number}</div>
              <div className="text-sm text-campus-gray">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button 
            onClick={() => scrollToSection('contact')}
            className="button-primary"
          >
            Schedule a Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="button-secondary"
          >
            Explore Features
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 text-sm text-campus-gray"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-campus-green rounded-full animate-pulse"></div>
            Cloud-based Solution
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-campus-blue rounded-full animate-pulse"></div>
            Mobile & Web Access
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-campus-cyan rounded-full animate-pulse"></div>
            Free Demo Available
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
