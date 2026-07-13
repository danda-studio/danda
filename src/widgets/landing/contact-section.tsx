import dynamic from "next/dynamic";
import { BlurredStaggerText } from "@/shared/ui/blurred-stagger-text";

const ContactRequestForm = dynamic(() => import("@/features/contact-request-form").then(mod => mod.ContactRequestForm));

export function ContactSection() {
  return (
    <section id="contact" className="relative mt-6 px-6 py-24">
      <div className="mx-auto flex w-[34.25rem] max-w-full flex-col items-center gap-7 text-center [word-break:break-word]">
        <h2 className="min-w-full font-(family-name:--font-manrope-sans) text-[4.5rem] leading-none font-semibold tracking-[-0.135rem] text-black">
          <BlurredStaggerText text="Обсудим проект" />
        </h2>
        <p className="w-[26.0625rem] max-w-full font-(family-name:--font-manrope-sans) text-[1.25rem] leading-[0] font-medium tracking-[-0.0625rem] text-muted">
          <span className="leading-[1.2] text-black">Опишите задачу</span>
          <span className="leading-[1.2]"> - мы посмотрим, подскажем и предложим понятное решение.</span>
        </p>
      </div>

      <div className="mt-[2.5rem]">
        <ContactRequestForm />
      </div>
    </section>
  );
}
