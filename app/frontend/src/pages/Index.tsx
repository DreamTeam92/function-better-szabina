import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ServicesSection from '@/components/ServicesSection';
import PhilosophySection from '@/components/PhilosophySection';
import MeetSabinaSection from '@/components/MeetSabinaSection';
import ClientExperienceSection from '@/components/ClientExperienceSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <PhilosophySection />
      <MeetSabinaSection />
      <ClientExperienceSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
