
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Smartphone, Shield, Zap, Users, Settings, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access CampusNex from any device, anywhere. Our responsive design ensures seamless experience across all platforms.",
      color: "from-campus-blue to-campus-cyan"
    },
    {
      icon: Shield,
      title: "Privacy-First Approach",
      description: "Your data is secure with enterprise-grade encryption and compliance with educational data protection standards.",
      color: "from-campus-green to-campus-blue"
    },
    {
      icon: Settings,
      title: "Fully Customizable",
      description: "Adapt CampusNex to your institution's unique needs with flexible configurations and custom workflows.",
      color: "from-campus-cyan to-campus-green"
    },
    {
      icon: Headphones,
      title: "24/7 Fast Support",
      description: "Get help when you need it with our dedicated support team available round the clock.",
      color: "from-campus-primary to-campus-blue"
    },
    {
      icon: Zap,
      title: "Seamless Migration",
      description: "Switch from your current system effortlessly with our expert migration team and comprehensive data transfer.",
      color: "from-campus-green to-campus-cyan"
    },
    {
      icon: Users,
      title: "User-Friendly Interface",
      description: "Intuitive design that requires minimal training. Get your staff up and running quickly with our easy-to-use platform.",
      color: "from-campus-blue to-campus-green"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-campus-light via-white to-neutral-100 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-campus-blue/10 to-campus-green/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-campus-green/10 to-campus-cyan/10 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="container-padding relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-campus-blue to-campus-green bg-clip-text text-transparent px-6 py-2 rounded-full text-sm font-semibold border border-campus-blue/20 backdrop-blur-sm">
              WHY CHOOSE CAMPUSNEX
            </span>
            <h2 className="heading-lg mt-8 mb-6 bg-gradient-to-r from-campus-primary to-campus-gray bg-clip-text text-transparent">
              Built for Educational Excellence
            </h2>
            <p className="text-campus-gray max-w-3xl mx-auto text-lg leading-relaxed">
              CampusNex is designed specifically for educational institutions, offering features and capabilities that understand the unique needs of schools and colleges.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="relative backdrop-blur-xl bg-white/90 border border-white/30 p-8 rounded-3xl h-full hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                {/* Gradient background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated icon container */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <reason.icon className="w-8 h-8 text-white group-hover:text-white drop-shadow-sm transition-colors duration-300" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-campus-primary group-hover:text-campus-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-campus-gray leading-relaxed group-hover:text-campus-gray transition-colors">
                    {reason.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-campus-blue/20 via-transparent to-campus-green/20 p-[1px]">
                  <div className="w-full h-full rounded-3xl bg-white/90"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative backdrop-blur-xl bg-gradient-to-r from-campus-blue via-campus-green to-campus-cyan p-10 rounded-3xl text-white shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-shadow">
                Ready to Transform Your Institution?
              </h3>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of educational institutions that have streamlined their operations with CampusNex.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-campus-blue px-10 py-4 rounded-2xl font-bold hover:bg-campus-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
              >
                Schedule Your Demo Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
