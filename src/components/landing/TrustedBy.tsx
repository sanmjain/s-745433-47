
import { motion } from "framer-motion";
import { Users, Award, Clock, Shield, TrendingUp, Star } from "lucide-react";

const TrustedBy = () => {
  const trustMetrics = [
    { icon: Users, value: "500+", label: "Institutions", color: "text-campus-blue" },
    { icon: Award, value: "100K+", label: "Students", color: "text-campus-green" },
    { icon: Clock, value: "99.9%", label: "Uptime", color: "text-campus-cyan" },
    { icon: Star, value: "4.9/5", label: "Rating", color: "text-campus-primary" }
  ];

  const results = [
    { metric: "80%", description: "Reduction in Administrative Work" },
    { metric: "95%", description: "Faster Fee Collection" },
    { metric: "100%", description: "Paperless Operations" },
    { metric: "24/7", description: "Student & Parent Access" }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-campus-light via-white to-campus-light relative overflow-hidden">
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
              <div className="text-3xl font-bold text-campus-primary mb-1">{metric.value}</div>
              <div className="text-sm text-campus-gray">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-campus-primary mb-6">
            Real Results from Real Institutions
          </h2>
          <p className="text-xl text-campus-gray max-w-3xl mx-auto">
            See how schools and colleges are saving time and money with CampusNex ERP
          </p>
        </motion.div>

        {/* Results Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {results.map((result, index) => (
            <motion.div
              key={result.description}
              className="bg-gradient-to-br from-campus-blue/10 to-campus-green/10 p-8 rounded-3xl text-center border border-campus-blue/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold gradient-text mb-3">{result.metric}</div>
              <div className="text-campus-gray font-medium">{result.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-campus-blue to-campus-green p-12 rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-4">
              Join 500+ Institutions Already Using CampusNex
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Get your free demo and see how CampusNex can transform your institution
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-campus-blue px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Schedule Free Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
