import Image from "next/image";
import { SOCIAL_LINKS } from "@/shared/config/social-links";

const FOOTER_NAV_ITEMS = [
  { label: "Портфолио", slug: "projects-mobile" },
  { label: "Этапы работы", slug: "process-mobile" },
  { label: "Услуги", slug: "services-mobile" },
  { label: "Отзывы", slug: "testimonials-mobile" },
];

const SOCIAL_ICONS = [
  { icon: "boxicons-logo.svg", href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: "boxicons-logo1.svg", href: SOCIAL_LINKS.telegram, label: "Telegram" },
  { icon: "boxicons-logo2.svg", href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
];

export function FooterMobile() {
  return (
    <footer className="relative overflow-hidden bg-white pt-16 pb-8">
      <div className="relative mx-auto h-[38.8125rem] w-[21rem]">
        <div className="pointer-events-none absolute top-0 left-1/2 size-[27.25rem] -translate-x-1/2">
          <Image
            alt=""
            fill
            sizes="436px"
            className="object-contain"
            src="/landing/desktop-6/chat-gpt-image1820260242201.png"
          />
        </div>

        <div className="absolute top-[7.125rem] left-[1.8125rem] flex items-center justify-center gap-1 rounded-[0.75rem] border-[0.0617rem] border-(--dd-border-subtle) bg-(--dd-glass-tint) p-1 backdrop-blur-[0.87906rem]">
          {SOCIAL_ICONS.map(social => (
            <a
              key={social.icon}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="group relative size-10 shrink-0 cursor-pointer overflow-clip rounded-[0.75rem] bg-white outline-none transition-colors hover:bg-(--dd-blue-600) focus-visible:ring-[0.125rem] focus-visible:ring-[rgba(0,96,253,0.6)]"
            >
              <div className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2">
                <Image alt="" fill sizes="20px" className="object-cover transition-[filter] group-hover:brightness-0 group-hover:invert" src={`/landing/desktop-6/${social.icon}`} />
              </div>
            </a>
          ))}
        </div>

        <a
          href="#contact-mobile"
          className="absolute top-[17.75rem] left-[7.75rem] flex cursor-pointer items-center gap-3 rounded-[1rem] bg-brand py-1 pr-5 pl-1 outline-none transition-colors hover:bg-black focus-visible:ring-[0.125rem] focus-visible:ring-[rgba(0,96,253,0.6)] focus-visible:ring-offset-[0.125rem]"
        >
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

        <div className="absolute top-[26.5625rem] left-[0.75rem] flex flex-col items-start gap-4 whitespace-nowrap">
          <p className="font-(family-name:--font-manrope-sans) text-[1.25rem] font-medium tracking-[-0.0625rem] text-(--dd-gray-400)">Напишите нам </p>
          <p className="font-(family-name:--font-manrope-sans) text-[2.5rem] leading-none font-bold tracking-[-0.075rem] text-black">
            <span className="text-brand">@</span>
            <span>danda</span>
          </p>
        </div>

        <div className="absolute top-[26.5625rem] left-[13.5rem] flex flex-col items-start gap-7 font-(family-name:--font-manrope-sans) text-[1.25rem] font-medium tracking-[-0.0625rem]">
          <p className="text-(--dd-gray-400)">Навигация</p>
          <div className="flex flex-col items-start gap-4 text-(--dd-gray-820) whitespace-nowrap">
            {FOOTER_NAV_ITEMS.map(item => (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className="cursor-pointer rounded-[0.25rem] outline-none transition-colors hover:text-(--dd-blue-600) focus-visible:ring-[0.125rem] focus-visible:ring-[rgba(0,96,253,0.6)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 w-[21rem]">
        <Image alt="" width={360} height={71.7544} className="h-auto w-full" src="/landing/mobile/danda-wordmark.svg" />

        <div className="absolute top-[-2.0625rem] left-[2.4375rem] flex rotate-[-4.85deg] items-center justify-center rounded-[1rem] bg-brand px-4 py-3">
          <p className="font-(family-name:--font-inter-sans) text-[1.25rem] font-semibold tracking-[-0.0375rem] whitespace-nowrap text-white">danda@gmail.com</p>
        </div>

        <a
          href="#contact-mobile"
          className="absolute top-[-0.5rem] left-[8.25rem] flex rotate-7 cursor-pointer items-center justify-center rounded-[1rem] bg-white px-4 py-3 outline-none transition-colors hover:bg-(--dd-gray-150) focus-visible:ring-[0.125rem] focus-visible:ring-[rgba(0,96,253,0.6)]"
        >
          <p className="font-(family-name:--font-inter-sans) text-[1.25rem] font-semibold tracking-[-0.0375rem] whitespace-nowrap text-(--dd-gray-450)">Обсудить проект</p>
        </a>
      </div>

      <p className="mx-auto mt-14 w-[21rem] font-(family-name:--font-manrope-sans) text-[1.25rem] font-medium tracking-[-0.0625rem] text-(--dd-gray-400)">
        © 2024 All rights reserved
      </p>
    </footer>
  );
}
