
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, Users, Heart, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { number: "500+", label: "Institutions Served" },
    { number: "100K+", label: "Students Managed" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Product Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      expertise: "Educational Technology"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      expertise: "ERP Systems"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      expertise: "Educational UX"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering the highest quality educational software solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with educators to build better tools"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Dedicated to transforming education through technology"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously improving and evolving our platform"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-campus-light via-campus-blue/5 to-campus-green/5 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-campus-blue/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-campus-green/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-padding relative z-10">
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-campus-green/10 text-campus-green px-4 py-1.5 rounded-full text-sm font-medium">
              ABOUT CAMPUSNEX
            </span>
            <h2 className="heading-lg mt-6 mb-6">Transforming Education Through Smart Technology</h2>
            <p className="text-campus-gray mb-6 text-large">
              CampusNex is a comprehensive ERP solution designed specifically for educational institutions. We understand the unique challenges schools and colleges face in managing complex operations, from admissions to graduation.
            </p>
            <p className="text-campus-gray mb-8">
              Our platform brings together all aspects of institutional management into one intuitive dashboard, enabling educators to focus on what matters most – providing quality education and nurturing student growth.
            </p>
            <button onClick={scrollToContact} className="button-primary">
              Schedule a Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-panel p-8 rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
                alt="Educational technology in use"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label} 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold gradient-text mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-campus-gray">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="heading-md mb-4">Meet Our Team</h3>
            <p className="text-campus-gray max-w-2xl mx-auto">
              Our dedicated team of education technology experts is committed to creating solutions that truly serve the educational community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-panel p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group">
                  <div className="relative mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-campus-green rounded-full border-2 border-white animate-pulse"></div>
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-campus-blue font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-campus-gray">{member.expertise}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="heading-md mb-4">Our Values</h3>
            <p className="text-campus-gray max-w-2xl mx-auto">
              These core principles guide our mission to transform educational institutions through innovative technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-panel p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-campus-blue to-campus-green rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2">{value.title}</h4>
                  <p className="text-sm text-campus-gray">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
