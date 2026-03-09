import { Toaster } from "@/components/ui/sonner";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FloatingButtons } from "./components/FloatingButtons";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HighlightsBar } from "./components/HighlightsBar";
import { MenuSection } from "./components/MenuSection";
import { Navbar } from "./components/Navbar";
import { OrderOnlineSection } from "./components/OrderOnlineSection";
import { ReviewsSection } from "./components/ReviewsSection";

function scrollToContact() {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection onBookTable={scrollToContact} />
        <HighlightsBar />
        <MenuSection />
        <OrderOnlineSection />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
      <Toaster richColors position="top-right" />
    </div>
  );
}
