import { ContactSection } from "@/widgets/landing/contact-section";
import { Footer } from "@/widgets/landing/footer";
import { Header } from "@/widgets/landing/header";
import { Hero } from "@/widgets/landing/hero";
import { ProcessSection } from "@/widgets/landing/process-section";
import { ProjectsSection } from "@/widgets/landing/projects-section";
import { ServicesBanner } from "@/widgets/landing/services-banner";
import { TestimonialsSection } from "@/widgets/landing/testimonials-section";

export function LandingView() {
  return (
    <div className="relative mx-auto h-[419.1875rem] w-[90rem] overflow-clip bg-white">
      <Header />
      <Hero />
      <ProjectsSection />
      <ProcessSection />
      <ServicesBanner />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
