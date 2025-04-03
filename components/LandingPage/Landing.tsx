 
import HeroSection from "../Hero";
import CTASection from "./CTA";
import FeatureSection from "./Features";
 
import Footer from "./Footer";
import HowItWorksSection from "./HowItWorks";
import Navbar from "./Navbar";
import ScrollToTopButton from "./Scroll";
import TestimonialSection from "./Testimonial";

 

export const LandingPage  = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

 