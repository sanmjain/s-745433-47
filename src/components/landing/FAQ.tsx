
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Clock, DollarSign, Shield, Zap, Users, Settings, Smartphone, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      icon: Clock,
      question: "How quickly can we implement CampusNex?",
      answer: "Most institutions are up and running within 2-4 weeks. We provide full data migration, staff training, and 24/7 support during the transition. Our implementation team works with you to ensure a smooth rollout.",
      category: "Implementation"
    },
    {
      icon: DollarSign,
      question: "What does CampusNex cost?",
      answer: "Pricing starts from $99/month for small schools (up to 500 students) and scales based on institution size and features needed. We offer flexible payment plans and special discounts for educational institutions. Contact us for a custom quote.",
      category: "Pricing"
    },
    {
      icon: Shield,
      question: "Is student data secure with CampusNex?",
      answer: "Absolutely. We use bank-level encryption, regular security audits, and comply with FERPA and other educational privacy regulations. Your data is hosted on secure cloud servers with 99.9% uptime guarantee and daily backups.",
      category: "Security"
    },
    {
      icon: Smartphone,
      question: "Can parents and students access CampusNex on mobile?",
      answer: "Yes! CampusNex includes dedicated mobile apps for students and parents. They can view grades, attendance, fee status, announcements, and communicate with teachers directly from their smartphones.",
      category: "Mobile"
    },
    {
      icon: Users,
      question: "Do you provide training for our staff?",
      answer: "Yes, we provide comprehensive training including live webinars, video tutorials, user manuals, and dedicated support during the first month. We also offer ongoing training sessions for new staff members.",
      category: "Training"
    },
    {
      icon: Settings,
      question: "Can CampusNex be customized for our institution?",
      answer: "Absolutely! CampusNex is highly customizable. We can adapt workflows, add custom fields, integrate with your existing systems, and even develop specific features for your institution's unique requirements.",
      category: "Customization"
    },
    {
      icon: Zap,
      question: "What happens to our existing data?",
      answer: "We handle complete data migration from your current system at no extra cost. Our team ensures all student records, financial data, and academic information is safely transferred and verified before going live.",
      category: "Migration"
    },
    {
      icon: Award,
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support via phone, email, and live chat. Every client gets a dedicated account manager, free software updates, and access to our knowledge base and training resources.",
      category: "Support"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-campus-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-campus-green/5 rounded-full blur-3xl"></div>
      
      <div className="container-padding relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-campus-blue/10 text-campus-blue px-6 py-2 rounded-full text-sm font-bold">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl font-bold mt-8 mb-6 gradient-text">
            Get Answers to Your Questions
          </h2>
          <p className="text-xl text-campus-gray max-w-3xl mx-auto">
            Everything you need to know about CampusNex ERP software for educational institutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-panel border border-white/30 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left hover:bg-neutral-50/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-campus-blue/20 to-campus-green/20 rounded-full flex items-center justify-center">
                          <faq.icon className="w-6 h-6 text-campus-blue" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-campus-primary">
                            {faq.question}
                          </h3>
                          <span className="text-xs text-campus-blue bg-campus-blue/10 px-3 py-1 rounded-full font-medium">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {openItems.includes(index) ? (
                          <Minus className="w-6 h-6 text-campus-green" />
                        ) : (
                          <Plus className="w-6 h-6 text-campus-gray" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-neutral-200 pt-4">
                            <p className="text-campus-gray leading-relaxed text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Strong CTA after FAQ */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-campus-blue to-campus-green p-12 rounded-3xl text-white">
              <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-xl mb-8 opacity-90">
                Get all your questions answered in a free consultation with our ERP experts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-campus-blue px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule Free Consultation
                </button>
                <button 
                  onClick={() => window.open('tel:+15551234567')}
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-campus-blue transition-all duration-300"
                >
                  Call: +1 (555) 123-4567
                </button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
