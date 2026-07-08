import { Button } from "@/shared/ui/button";
import { GlassIconCluster } from "@/shared/ui/glass-icon-cluster";
import { BoxiconsSend } from "@/shared/ui/icons/boxicons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-[-2.25rem] left-1/2 h-[55.4375rem] w-[90rem] -translate-x-1/2" data-name="dots">
        <img alt="" className="absolute block inset-0 size-full max-w-none" src="/landing/desktop-6/dots.svg" />
      </div>
      <div className="pointer-events-none absolute top-[28.0625rem] left-0 h-[23.1875rem] w-[90rem]">
        <div className="absolute inset-[-26.95%_-6.94%]">
          <img alt="" className="block size-full max-w-none" src="/landing/desktop-6/rectangle2087329706.svg" />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-[1.5625rem] pt-[8.4375rem] text-center">
        <p className="font-(family-name:--font-manrope-sans) text-[1.25rem] leading-[1.2] font-medium whitespace-nowrap text-black">
          Студия разработки полного цикла
        </p>
        <h1 className="font-(family-name:--font-manrope-sans) text-[4.5rem] leading-none font-semibold tracking-[-0.135rem] text-black [word-break:break-word]">
          Мы берем на себя сложность.От сайта до сложного сервиса или приложения
        </h1>

        <GlassIconCluster variant="pair" className="absolute top-[14.875rem] left-[calc(50%-9.9375rem)] -translate-x-1/2" />
        <GlassIconCluster variant="quad" className="absolute top-[24rem] left-[calc(50%+14rem)] -translate-x-1/2" />
      </div>

      <div className="relative mx-auto mt-[-8.3125rem] w-full">
        <div className="mx-auto flex size-[54.9525rem] max-w-full items-center justify-center">
          <div className="flex-none -rotate-6">
            <div className="relative size-[50rem]" data-name="ChatGPT Image 18 янв. 2026 г., 02_42_20 1">
              <img
                alt=""
                className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                src="/landing/desktop-6/chat-gpt-image1820260242201.png"
              />
            </div>
          </div>
        </div>

        <Button
          variant="primary"
          className="absolute top-[24.3125rem] left-6"
          leadingIcon={<BoxiconsSend className="relative size-[1.75rem] -rotate-90" />}
        >
          Бесплатный аудит
        </Button>

        <p className="absolute top-[24.0625rem] right-6 w-[20.75rem] text-right font-(family-name:--font-manrope-sans) leading-[0] font-medium tracking-[-0.0625rem] text-(--dd-gray-300)">
          <span className="text-[1.25rem] leading-[1.2]">Вы получаете понятное цифровое решение. </span>
          <span className="text-[1.25rem] leading-[1.2] text-black">Для бизнеса, который ценит ясность и стабильность</span>
        </p>
      </div>

      <div className="pointer-events-none absolute top-[41.125rem] left-0 flex h-[26.125rem] w-[90rem] items-center justify-center">
        <div className="flex-none -scale-y-100">
          <div className="h-[26.125rem] w-[90rem] bg-gradient-to-b from-white from-[27.195%] to-(--dd-fade-white-transparent) to-[63.278%]" />
        </div>
      </div>
    </section>
  );
}
