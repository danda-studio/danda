import { Button } from "@/shared/ui/button";
import { BoxiconsSend } from "@/shared/ui/icons/boxicons";
import { Tag } from "@/shared/ui/tag";

const TECH_BADGES = [
  { name: "Next.js", icon: "/landing/desktop-6/image276.png" },
  { name: "React.js", icon: "/landing/desktop-6/image277.png" },
  { name: "Nuxt.js", icon: "/landing/desktop-6/image279.png" },
  { name: "Vue.js", icon: "/landing/desktop-6/image278.png" },
];

function MockCard({ image, rotate, tint, className }: { image: string; rotate: string; tint?: string; className: string }) {
  return (
    <div className={className}>
      <div className={rotate}>
        <div className="relative h-[15.9375rem] w-[15.63875rem] overflow-clip rounded-[0.99613rem] bg-white">
          <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={image} />
          {tint && <div className="absolute inset-0" style={{ backgroundColor: tint }} />}
        </div>
      </div>
    </div>
  );
}

export function ServicesBannerMobile() {
  return (
    <section className="relative px-3 py-10">
      <div className="relative mx-auto h-[45rem] w-[21rem] overflow-clip rounded-[1.5rem] bg-brand">
        <img alt="" className="pointer-events-none absolute top-1/2 left-1/2 h-[30.625rem] w-[49.6875rem] max-w-none -translate-x-1/2 -translate-y-[calc(50%+7.75rem)]" src="/landing/mobile/services-dots.svg" />
        <div className="pointer-events-none absolute top-[16.5rem] left-0 h-[25rem] w-[21rem] bg-gradient-to-t from-brand from-[39.21%] to-(--dd-fade-black-transparent)" />

        <MockCard
          image="/landing/mobile/services-card1.png"
          rotate="-rotate-14"
          tint="rgba(1,96,251,0.88)"
          className="absolute top-[2.69rem] left-[0.75rem] flex h-[19.2475rem] w-[19.03rem] items-center justify-center"
        />
        <MockCard
          image="/landing/mobile/services-card2.png"
          rotate="-rotate-4"
          tint="rgba(1,96,251,0.68)"
          className="absolute top-[4.151rem] left-[1.796rem] flex h-[16.9897rem] w-[16.7124rem] items-center justify-center"
        />
        <MockCard
          image="/landing/mobile/services-card3.png"
          rotate="rotate-4"
          tint="rgba(1,93,245,0.24)"
          className="absolute top-[3.7625rem] left-1/2 flex h-[16.9897rem] w-[16.7124rem] -translate-x-1/2 items-center justify-center"
        />
        <MockCard
          image="/landing/mobile/services-card4.png"
          rotate="-rotate-15"
          className="absolute top-[0.4375rem] left-1/2 flex h-[19.442rem] w-[19.231rem] -translate-x-1/2 items-center justify-center"
        />

        <div className="absolute top-[23.75rem] left-1/2 flex w-[18rem] -translate-x-1/2 flex-col items-center gap-5 text-center">
          <p className="font-(family-name:--font-inter-sans) text-[1.5rem] leading-none font-medium tracking-[-0.03rem] text-white [word-break:break-word]">
            Проектируем и разрабатываем сайты и лендинги
          </p>
          <p className="w-[16.875rem] font-(family-name:--font-inter-sans) text-[0.875rem] leading-[1.1] text-white [word-break:break-word]">
            <span className="text-(--dd-overlay-on-dark-strong)">Продумываем структуру, тексты и интерфейс так, </span>
            <span>чтобы сайтом было удобно пользоваться</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {TECH_BADGES.map(badge => (
              <Tag
                key={badge.name}
                className="rounded-[0.625rem] border-[0.04375rem] px-3 py-2 text-[0.75rem] tracking-[-0.0225rem]"
                icon={<img alt="" className="pointer-events-none size-3 object-cover" src={badge.icon} />}
              >
                {badge.name}
              </Tag>
            ))}
          </div>
        </div>

        <Button
          variant="dark"
          className="absolute top-[40rem] left-1/2 -translate-x-1/2 rounded-[1rem] py-1 pr-5 pl-1 text-[1rem]"
          leadingIcon={<BoxiconsSend className="relative size-6 -rotate-90" />}
        >
          Обсудить проект
        </Button>
      </div>
    </section>
  );
}
