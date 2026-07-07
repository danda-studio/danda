import { Button } from "@/shared/ui/button";
import { GlassIconCluster } from "@/shared/ui/glass-icon-cluster";
import { BoxiconsSend } from "@/shared/ui/icons/boxicons";

export function Hero() {
  return (
    <>
      <div
        className="absolute top-[calc(50%-184.125rem)] left-1/2 h-[55.4375rem] w-[90rem] -translate-x-1/2 -translate-y-1/2"
        data-name="dots"
      >
        <img alt="" className="absolute block inset-0 size-full max-w-none" src="/landing/desktop-6/dots.svg" />
      </div>
      <div className="absolute top-[28.0625rem] left-0 h-[23.1875rem] w-[90rem]">
        <div className="absolute inset-[-26.95%_-6.94%]">
          <img alt="" className="block size-full max-w-none" src="/landing/desktop-6/rectangle2087329706.svg" />
        </div>
      </div>

      <p className="absolute top-[11.5rem] left-1/2 w-[45.375rem] -translate-x-1/2 text-center font-(family-name:--font-manrope-sans) text-[4.5rem] leading-none font-semibold tracking-[-0.135rem] text-black [word-break:break-word]">
        Мы берем на себя сложность.От сайта до сложного сервиса или приложения
      </p>
      <p className="absolute top-[8.4375rem] left-[45.59375rem] -translate-x-1/2 text-center font-(family-name:--font-manrope-sans) text-[1.25rem] leading-[1.2] font-medium whitespace-nowrap text-black">
        Студия разработки полного цикла
      </p>

      <div className="absolute top-[21.1875rem] left-[18.125rem] flex size-[54.9525rem] items-center justify-center">
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

      <GlassIconCluster variant="pair" className="absolute top-[14.875rem] left-[calc(50%-9.9375rem)] -translate-x-1/2" />
      <GlassIconCluster variant="quad" className="absolute top-[24rem] left-[calc(50%+14rem)] -translate-x-1/2" />

      <Button
        variant="primary"
        className="absolute top-[45.5rem] left-[1.5rem]"
        leadingIcon={<BoxiconsSend className="relative size-[1.75rem] -rotate-90" />}
      >
        Бесплатный аудит
      </Button>

      <div className="absolute top-[41.125rem] left-0 flex h-[26.125rem] w-[90rem] items-center justify-center">
        <div className="flex-none -scale-y-100">
          <div className="h-[26.125rem] w-[90rem] bg-gradient-to-b from-white from-[27.195%] to-(--dd-fade-white-transparent) to-[63.278%]" />
        </div>
      </div>

      <p className="absolute top-[45.25rem] left-[88.5rem] w-[20.75rem] -translate-x-full text-right font-(family-name:--font-manrope-sans) leading-[0] font-medium tracking-[-0.0625rem] text-(--dd-gray-300)">
        <span className="text-[1.25rem] leading-[1.2]">Вы получаете понятное цифровое решение. </span>
        <span className="text-[1.25rem] leading-[1.2] text-black">Для бизнеса, который ценит ясность и стабильность</span>
      </p>
    </>
  );
}
