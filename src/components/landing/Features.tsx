
import { Check, Users, Calendar, DollarSign, BookOpen, Smartphone, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const coreFeatures = [
    {
      icon: Users,
      title: "Complete Student Management",
      description: "Handle admissions, profiles, attendance, and academic records all in one place",
      benefits: ["Online Admission Portal", "Digital Student Records", "Parent Communication Hub"],
      color: "from-campus-blue to-campus-cyan"
    },
    {
      icon: Calendar,
      title: "Smart Academic Planning",
      description: "Automated timetables, exam scheduling, and result management made simple",
      benefits: ["AI-Powered Timetable Generation", "Exam & Result Automation", "Academic Analytics"],
      color: "from-campus-green to-campus-blue"
    },
    {
      icon: DollarSign,
      title: "Automated Fee Management",
      description: "Streamline fee collection with online payments and automated reminders",
      benefits: ["Online Payment Gateway", "Automated Fee Reminders", "Financial Reporting"],
      color: "from-campus-cyan to-campus-green"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Access everything from anywhere with our responsive mobile app",
      benefits: ["Student Mobile App", "Teacher Dashboard", "Parent Portal"],
      color: "from-campus-primary to-campus-blue"
    }
  ];

  const additionalFeatures = [
    { icon: BookOpen, title: "Library Management", description: "Digital catalog and book tracking" },
    { icon: BarChart3, title: "Advanced Analytics", description: "Data-driven insights for better decisions" },
    { icon: Users, title: "HR & Payroll", description: "Staff management and payroll automation" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-campus-green/5 via-campus-blue/5 to-campus-cyan/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-campus-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-campus-green/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-padding relative z-10">
        <div className="text-center mb-16">
          <span className="bg-campus-blue/10 text-campus-blue px-6 py-2 rounded-full text-sm font-bold">
            POWERFUL ERP FEATURES
          </span>
          <h2 className="text-5xl font-bold mt-8 mb-6 gradient-text">
            Everything Your Institution Needs
          </h2>
          <p className="text-xl text-campus-gray max-w-3xl mx-auto">
            From student admissions to graduation, manage every aspect of your educational institution with our comprehensive ERP platform.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {coreFeatures.map((feature, index) => (
            <Card key={feature.title} className="backdrop-blur-sm bg-white/80 border border-campus-blue/20 shadow-xl p-8 rounded-3xl hover:shadow-2xl transition-all duration-300 group">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-campus-primary">{feature.title}</h3>
              <p className="text-campus-gray mb-6 text-lg">{feature.description}</p>
              <ul className="space-y-3 mb-6">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-campus-green/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-campus-green" />
                    </div>
                    <span className="text-campus-primary font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button onClick={scrollToContact} className="w-full bg-gradient-to-r from-campus-blue to-campus-green text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Learn More
              </button>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6 text-campus-primary">Plus Many More Features</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {additionalFeatures.map((feature, index) => (
            <Card key={feature.title} className="glass-panel p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-campus-blue to-campus-green rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-campus-primary">{feature.title}</h4>
              <p className="text-campus-gray text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Strong CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-campus-blue via-campus-green to-campus-cyan p-12 rounded-3xl text-white">
            <h3 className="text-4xl font-bold mb-4">Ready to See CampusNex in Action?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get a personalized demo and see how CampusNex can streamline your institution's operations
            </p>
            <button onClick={scrollToContact} className="bg-white text-campus-blue px-12 py-4 rounded-2xl font-bold text-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              Book Your Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
