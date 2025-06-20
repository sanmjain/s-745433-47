
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Calendar, CheckCircle, Clock, Shield } from "lucide-react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    institutionType: "",
    studentCount: "",
    timeline: "",
    message: ""
  });
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setFormData({
        name: "",
        email: "",
        phone: "",
        institution: "",
        institutionType: "",
        studentCount: "",
        timeline: "",
        message: ""
      });
    }, 3000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));
  if (isSubmitted) {
    return <section id="contact" className="py-24 bg-gradient-to-br from-campus-blue/5 via-campus-green/5 to-campus-cyan/5 relative overflow-hidden">
        <div className="container-padding relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="glass-panel p-12 rounded-3xl">
              <CheckCircle className="w-16 h-16 text-campus-green mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p className="text-campus-gray mb-6">
                We've received your demo request and will contact you within 2 hours during business hours.
              </p>
              <div className="bg-campus-green/10 border border-campus-green/20 rounded-xl p-4">
                <p className="text-campus-green text-sm">
                  ✅ Demo request confirmed<br />
                  ✅ Personal consultation scheduled<br />
                  ✅ Custom proposal within 24 hours
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>;
  }
  return <section id="contact" className="py-24 bg-gradient-to-br from-campus-blue/5 via-campus-green/5 to-campus-cyan/5 relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-campus-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-campus-green/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-padding relative z-10">
        <div className="text-center mb-16">
          <span className="bg-campus-primary/10 text-campus-primary px-4 py-1.5 rounded-full text-sm font-medium">
            SCHEDULE A DEMO
          </span>
          <h2 className="heading-lg mt-6">Ready to Transform Your Institution?</h2>
          <p className="text-campus-gray mt-4 max-w-2xl mx-auto">
            See CampusNex in action with a personalized demo tailored to your institution's needs. 
            Our experts will show you how to streamline your operations.
          </p>
          
          {/* Demo Benefits */}
          <div className="mt-6 inline-block bg-gradient-to-r from-campus-green/10 to-campus-blue/10 border border-campus-green/20 rounded-xl px-6 py-3">
            <div className="flex items-center gap-2 text-campus-green font-medium">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Free 30-minute demo • No commitment required</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl p-8 rounded-3xl">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-campus-gray mb-2">
                  <span>Step {step} of 3</span>
                  <span>{Math.round(step / 3 * 100)}% Complete</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-campus-blue to-campus-green h-2 rounded-full transition-all duration-300" style={{
                  width: `${step / 3 * 100}%`
                }}></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Basic Information */}
                {step === 1 && <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-campus-primary mb-2">
                          Full Name *
                        </label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-campus-blue focus:border-transparent transition-all" placeholder="Your full name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-campus-primary mb-2">
                          Email Address *
                        </label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-campus-blue focus:border-transparent transition-all" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-campus-primary mb-2">
                          Phone Number
                        </label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-campus-blue focus:border-transparent transition-all" placeholder="+1 (555) 123-4567" />
                      </div>
                      <div>
                        <label htmlFor="institution" className="block text-sm font-medium text-campus-primary mb-2">
                          Institution Name *
                        </label>
                        <input type="text" id="institution" name="institution" required value={formData.institution} onChange={handleChange} className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-campus-blue focus:border-transparent transition-all" placeholder="Your institution name" />
                      </div>
                    </div>
                  </div>}

                {/* Step 2: Institution Details */}
                {step === 2 && <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">Institution Details</h3>
                    <div>
                      <label htmlFor="institutionType" className="block text-sm font-medium text-campus-primary mb-2">
                        Institution Type *
                      </label>
                      <select id="institutionType" name="institutionType" required value={formData.institutionType} onChange={handleChange} className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-campus-blue focus:border-transparent transition-all">
                        <option value="">Select institution type</option>
                        <option value="school">School (K-12)</option>
                        <option value="college">College</option>
                        <option value="university">University</option>
                        <option value="institute">Training Institute</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="studentCount" className="block text-sm font-medium text-campus-primary mb-2">
                          Number of Students
                        </label>
                        <select id="studentCount" name="studentCount" value={formData.studentCount} onChange={handleChange} className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-campus-blue focus:border-transparent transition-all">
                          <option value="">Select student count</option>
                          <option value="under-500">Under 500</option>
                          <option value="500-1000">500 - 1,000</option>
                          <option value="1000-3000">1,000 - 3,000</option>
                          <option value="3000-5000">3,000 - 5,000</option>
                          <option value="over-5000">Over 5,000</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-campus-primary mb-2">
                          Implementation Timeline
                        </label>
                        <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-campus-blue focus:border-transparent transition-all">
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (1-2 months)</option>
                          <option value="soon">Soon (3-6 months)</option>
                          <option value="planning">Planning (6-12 months)</option>
                          <option value="exploring">Just exploring</option>
                        </select>
                      </div>
                    </div>
                  </div>}

                {/* Step 3: Message */}
                {step === 3 && <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">Tell Us More</h3>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-campus-primary mb-2">
                        What specific challenges are you looking to solve? *
                      </label>
                      <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-campus-blue focus:border-transparent transition-all resize-none" placeholder="Tell us about your current challenges with student management, fee collection, attendance tracking, or any other operational issues..." />
                    </div>
                  </div>}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <button type="button" onClick={prevStep} className={`px-6 py-2 rounded-xl transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'glass-panel hover:shadow-lg'}`}>
                    Previous
                  </button>
                  
                  {step < 3 ? <button type="button" onClick={nextStep} className="button-primary px-8">
                      Next Step
                    </button> : <Button type="submit" className="button-primary px-8">
                      Schedule Demo
                    </Button>}
                </div>
              </form>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl p-6 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-campus-blue to-campus-green rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-campus-gray">info@campusnex.com</p>
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl p-6 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-campus-green to-campus-cyan rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-campus-gray">+1 (555) 123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl p-6 rounded-3xl">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-campus-green" />
                What You'll Get
              </h3>
              <div className="text-sm text-campus-gray space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-campus-green" />
                  Personalized 30-min demo
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-campus-green" />
                  Custom implementation plan
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-campus-green" />
                  Pricing tailored to your needs
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-campus-green" />
                  Free consultation & support
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;
