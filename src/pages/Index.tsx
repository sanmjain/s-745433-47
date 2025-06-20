
import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import StickyContact from "@/components/landing/StickyContact";
import FAQ from "@/components/landing/FAQ";
import MobileContact from "@/components/landing/MobileContact";
import AccessibleNavigation from "@/components/landing/AccessibleNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col">
      <AccessibleNavigation />
      <div className="flex-1">
        <div className="max-w-7xl mx-auto" id="main-content">
          <Navigation />
          <Hero />
          <TrustedBy />
          <Features />
          <WhyChooseUs />
          <ContactForm />
          <FAQ />
        </div>
      </div>
      <Footer />
      <StickyContact />
      <MobileContact />
    </div>
  );
};

export default Index;
