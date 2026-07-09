import { ContactRequestForm } from "@/features/contact-request-form";

export function ContactSectionMobile() {
  return (
    <section id="contact-mobile" className="relative px-3 py-10">
      <div className="mx-auto flex w-[21rem] flex-col items-center gap-5 text-center [word-break:break-word]">
        <h2 className="w-full font-(family-name:--font-manrope-sans) text-[2rem] leading-none font-semibold tracking-[-0.06rem] text-black">
          Обсудим проект
        </h2>
        <p className="w-[17.875rem] font-(family-name:--font-manrope-sans) text-[1rem] leading-[1.2] font-medium text-(--dd-gray-400)">
          <span className="text-black">Опишите задачу</span>
          <span> - мы посмотрим, подскажем и предложим понятное решение.</span>
        </p>
      </div>

      <div className="mx-auto mt-8 w-[21rem]">
        <ContactRequestForm />
      </div>
    </section>
  );
}
