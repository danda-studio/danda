import Image from "next/image";

const FOOTER_NAV_ITEMS = [
  { label: "Портфолио", slug: "projects-mobile" },
  { label: "Этапы работы", slug: "process-mobile" },
  { label: "Услуги", slug: "services-mobile" },
  { label: "Отзывы", slug: "testimonials-mobile" },
];

export function FooterMobile() {
  return (
    <footer className="relative overflow-hidden bg-white px-3 pt-16 pb-8">
      <div className="mx-auto flex w-[22.5rem] max-w-full items-center justify-center">
        <div className="relative size-[27.25rem] max-w-full">
          <Image
            alt=""
            fill
            sizes="436px"
            className="pointer-events-none object-contain"
            src="/landing/desktop-6/chat-gpt-image1820260242201.png"
          />
        </div>
      </div>

      <div className="mx-auto -mt-10 flex w-[21rem] flex-col items-start gap-4">
        <p className="font-(family-name:--font-manrope-sans) text-[1.25rem] font-medium tracking-[-0.0625rem] text-(--dd-gray-400)">
          Напишите нам
        </p>
        <p className="font-(family-name:--font-manrope-sans) text-[2.5rem] leading-none font-bold tracking-[-0.075rem] text-black">
          <span className="text-brand">@</span>
          <span>danda</span>
        </p>
        <p className="font-(family-name:--font-manrope-sans) text-[1.25rem] font-medium tracking-[-0.0625rem] text-(--dd-gray-400)">
          © 2024 All rights reserved
        </p>
      </div>

      <div className="mx-auto mt-8 flex w-[21rem] items-center gap-2">
        <div className="flex items-center justify-center gap-1 rounded-[0.75rem] border-[0.0617rem] border-(--dd-border-subtle) bg-(--dd-glass-tint) p-1 backdrop-blur-[0.87906rem]">
          {["boxicons-logo.svg", "boxicons-logo1.svg", "boxicons-logo2.svg"].map(icon => (
            <div key={icon} className="relative size-10 shrink-0 overflow-clip rounded-[0.75rem] bg-white">
              <div className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2">
                <Image alt="" fill sizes="20px" className="object-cover" src={`/landing/desktop-6/${icon}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="#contact-mobile" className="mx-auto mt-4 flex w-[21rem] cursor-pointer items-center gap-3 rounded-[1rem] bg-brand py-1 pr-5 pl-1 outline-none transition-colors hover:bg-black focus-visible:ring-[0.125rem] focus-visible:ring-[rgba(0,96,253,0.6)] focus-visible:ring-offset-[0.125rem]">
        <div className="relative size-10 shrink-0 overflow-clip rounded-[0.75rem] bg-white">
          <div className="absolute top-[0.625rem] left-[0.625rem] flex size-6 items-center justify-center">
            <div className="-rotate-90 flex-none">
              <div className="relative size-6" data-name="Boxicons">
                <Image alt="" fill sizes="24px" className="object-cover" src="/landing/desktop-6/boxicons.svg" />
              </div>
            </div>
          </div>
        </div>
        <p className="font-(family-name:--font-manrope-sans) text-[1rem] font-medium tracking-[-0.025rem] whitespace-nowrap text-white">
          Бесплатный аудит
        </p>
      </a>

      <div className="mx-auto mt-12 flex w-[21rem] flex-col items-start gap-4 font-(family-name:--font-manrope-sans) text-[1.25rem] font-medium tracking-[-0.0625rem]">
        <p className="text-(--dd-gray-400)">Навигация</p>
        <div className="flex flex-col items-start gap-4 text-(--dd-gray-820)">
          {FOOTER_NAV_ITEMS.map(item => (
            <a
              key={item.slug}
              href={`#${item.slug}`}
              className="cursor-pointer rounded-[0.25rem] outline-none transition-colors hover:text-black focus-visible:ring-[0.125rem] focus-visible:ring-[rgba(0,96,253,0.6)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-[22.5rem] max-w-full items-center justify-center overflow-hidden">
        <Image alt="" width={360} height={71.7544} className="h-auto w-full" src="/landing/mobile/danda-wordmark.svg" />
      </div>
    </footer>
  );
}
