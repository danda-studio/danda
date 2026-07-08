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
    <main className="mx-auto w-full max-w-360 overflow-x-clip bg-white">
      <Header />
      <div className="relative mx-auto -mt-23 h-[419.1875rem] w-[90rem] overflow-clip">
        <Hero />
        <ProjectsSection />
        <ProcessSection />
        <ServicesBanner />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
