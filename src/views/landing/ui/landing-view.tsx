import { ContactSectionMobile } from "@/widgets/landing-mobile/contact-section";
import { FloatingActionBarMobile } from "@/widgets/landing-mobile/floating-action-bar";
import { FooterMobile } from "@/widgets/landing-mobile/footer";
import { HeaderMobile } from "@/widgets/landing-mobile/header";
import { HeroMobile } from "@/widgets/landing-mobile/hero";
import { ProcessSectionMobile } from "@/widgets/landing-mobile/process-section";
import { ProjectsSectionMobile } from "@/widgets/landing-mobile/projects-section";
import { ServicesBannerMobile } from "@/widgets/landing-mobile/services-banner";
import { TestimonialsSectionMobile } from "@/widgets/landing-mobile/testimonials-section";
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
    <main className="mx-auto w-full max-w-360 overflow-clip bg-white">
      <div className="hidden md:block">
        <Header />
        <div className="relative mx-auto -mt-23 w-[90rem] overflow-clip">
          <Hero />
          <ProjectsSection />
          <ProcessSection />
          <ServicesBanner />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>

      <div className="md:hidden">
        <HeaderMobile />
        <HeroMobile />
        <ProjectsSectionMobile />
        <ProcessSectionMobile />
        <ServicesBannerMobile />
        <TestimonialsSectionMobile />
        <ContactSectionMobile />
        <FooterMobile />
        <FloatingActionBarMobile />
      </div>
    </main>
  );
}
