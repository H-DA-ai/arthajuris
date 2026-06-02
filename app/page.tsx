import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PartnersSection from "./components/PartnersSection";
import PracticeSection from "./components/PracticeSection";
import BookingSection from "./components/BookingSection";
import BlogPreviewSection from "./components/BlogPreviewSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import DisclaimerModal from "./components/DisclaimerModal";

export default function Home() {
  return (
    <>
      <DisclaimerModal />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <PracticeSection />
        <BookingSection />
        <BlogPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
