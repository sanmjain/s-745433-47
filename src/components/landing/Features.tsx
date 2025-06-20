
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Student Lifecycle Management",
      description: "Complete student journey from admission to graduation with automated workflows, document management, and progress tracking.",
      points: ["Online Admission Process", "Student Profile Management", "Academic Progress Tracking"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
    },
    {
      title: "Smart Academic Management",
      description: "Comprehensive tools for timetable generation, examination management, result processing, and academic reporting.",
      points: ["Automated Timetable Generator", "Exam & Result Management", "Academic Performance Analytics"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
    },
    {
      title: "Integrated Communication Hub",
      description: "Seamless communication between students, parents, teachers, and administration through SMS, push notifications, and portal messages.",
      points: ["Multi-channel Messaging", "Parent-Teacher Communication", "Real-time Notifications"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-campus-green/5 via-campus-blue/5 to-campus-cyan/5 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-campus-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-campus-green/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-padding relative z-10">
        <div className="text-center mb-16">
          <span className="bg-campus-blue/10 text-campus-blue px-4 py-1.5 rounded-full text-sm font-medium">
            CORE FEATURES
          </span>
          <h2 className="heading-lg mt-6">Complete ERP Solution for Education</h2>
          <p className="text-campus-gray mt-4 max-w-2xl mx-auto">
            From admissions to graduation, manage every aspect of your educational institution with our comprehensive platform.
          </p>
        </div>

        {features.map((feature, index) => (
          <div key={feature.title} className={`flex flex-col md:flex-row gap-12 items-center mb-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-campus-primary">{feature.title}</h3>
              <p className="text-campus-gray mb-6">{feature.description}</p>
              <ul className="space-y-4">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-campus-blue/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-campus-blue" />
                    </div>
                    <span className="text-campus-primary">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <button onClick={scrollToContact} className="button-primary">Schedule Demo</button>
                <button onClick={scrollToContact} className="px-6 py-3 text-campus-gray hover:text-campus-primary transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Card className="backdrop-blur-sm bg-white/80 border border-campus-blue/20 shadow-xl p-6 rounded-2xl">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
