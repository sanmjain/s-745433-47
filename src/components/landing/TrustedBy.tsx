
import { motion } from "framer-motion";
import { Users, Award, Clock, Shield } from "lucide-react";

const TrustedBy = () => {
  const trustMetrics = [
    { icon: Users, value: "500+", label: "Institutions", color: "text-campus-blue" },
    { icon: Award, value: "100K+", label: "Students", color: "text-campus-green" },
    { icon: Clock, value: "99.9%", label: "Uptime", color: "text-campus-cyan" },
    { icon: Shield, value: "24/7", label: "Support", color: "text-campus-primary" }
  ];

  const institutions = [
    { name: "St. Mary's School", className: "w-32 h-12", logo: "SMS" },
    { name: "Tech University", className: "w-32 h-12", logo: "TU" },
    { name: "Global Academy", className: "w-32 h-12", logo: "GA" },
    { name: "Metro College", className: "w-32 h-12", logo: "MC" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-campus-light via-white to-campus-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-campus-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-campus-green/5 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        {/* Trust Metrics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="glass-panel p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 ${metric.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className="text-2xl font-bold text-campus-primary mb-1">{metric.value}</div>
              <div className="text-sm text-campus-gray">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-campus-primary mb-3">Trusted by Educational Institutions</h2>
          <p className="text-campus-gray">Join hundreds of schools and colleges that have transformed their operations with CampusNex</p>
        </motion.div>

        {/* Institution Logos */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {institutions.map((institution, index) => (
            <motion.div
              key={institution.name}
              className={`${institution.className} glass-panel rounded-xl flex items-center justify-center group hover:shadow-lg transition-all duration-300 cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-xl font-bold text-campus-gray group-hover:text-campus-blue transition-colors">
                {institution.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-campus-gray mb-4">Ready to transform your institution?</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="button-primary"
          >
            Get Your Free Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
