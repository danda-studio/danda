import { ContactRequestForm } from "@/features/contact-request-form";

export function ContactSection() {
  return (
    <>
      <div className="absolute top-[304.625rem] left-1/2 flex w-[34.25rem] -translate-x-1/2 flex-col items-center gap-[1.75rem] text-center [word-break:break-word]">
        <p className="min-w-full font-[family-name:var(--font-manrope-sans)] text-[4.5rem] leading-none font-semibold tracking-[-0.135rem] text-black">
          Обсудим проект
        </p>
        <p className="w-[26.0625rem] font-[family-name:var(--font-manrope-sans)] text-[1.25rem] leading-[0] font-medium tracking-[-0.0625rem] text-muted">
          <span className="leading-[1.2] text-black">Опишите задачу</span>
          <span className="leading-[1.2]"> - мы посмотрим, подскажем и предложим понятное решение.</span>
        </p>
      </div>

      <ContactRequestForm />
    </>
  );
}
