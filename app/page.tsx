import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PartnersSection from "./components/PartnersSection";
import PracticeSection from "./components/PracticeSection";
import BookingSection from "./components/BookingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <PracticeSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
