
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      position: "Principal",
      company: "Greenwood International School",
      rating: 5,
      text: "CampusNex has revolutionized our school management. From admissions to result generation, everything is seamlessly integrated. Our administrative efficiency has improved by 200% since implementation.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Prof. Rajesh Kumar",
      position: "Dean of Academics",
      company: "Metro Engineering College",
      rating: 5,
      text: "The student portal and mobile app have enhanced our communication with students and parents tremendously. Fee management and attendance tracking are now completely automated and error-free.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Ms. Anita Desai",
      position: "Administrator",
      company: "Bright Future Academy",
      rating: 5,
      text: "Implementation was smooth and the support team was exceptional. The reporting features give us real-time insights into student performance and institutional metrics. Highly recommended for any educational institution.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-campus-blue/5 via-white to-campus-green/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-campus-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-campus-green/10 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-campus-green/10 text-campus-green px-4 py-1.5 rounded-full text-sm font-medium">
            SUCCESS STORIES
          </span>
          <h2 className="heading-lg mt-6">Trusted by Educational Leaders</h2>
          <p className="text-campus-gray mt-4 max-w-2xl mx-auto">
            See how schools and colleges across the country are transforming their operations with CampusNex ERP.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-panel p-8 md:p-12 rounded-3xl relative border border-campus-blue/10">
              <Quote className="w-12 h-12 text-campus-blue/30 mb-6" />
              
              <blockquote className="text-xl md:text-2xl text-campus-primary leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="flex items-center gap-6">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="flex-1">
                  <div className="font-bold text-lg text-campus-primary">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-campus-gray mb-2">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-campus-gray">Institution</div>
                  <div className="font-medium text-campus-blue">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group border border-campus-blue/10"
            >
              <ChevronLeft className="w-5 h-5 text-campus-gray group-hover:text-campus-blue transition-colors" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-campus-blue shadow-lg" 
                      : "bg-campus-gray/30 hover:bg-campus-gray/50"
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group border border-campus-blue/10"
            >
              <ChevronRight className="w-5 h-5 text-campus-gray group-hover:text-campus-blue transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
