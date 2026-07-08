"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Footer() {
  const danndaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: danndaRef, offset: ["start end", "end start"] });
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -320]);

  return (
    <footer className="relative mt-[1.875rem] overflow-hidden bg-white">
      <div className="relative mx-auto h-[53.25rem] w-[90rem]">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[55.4375rem] w-[90rem] -translate-x-1/2">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src="/landing/desktop-6/dots.svg" />
        </div>
        <div className="pointer-events-none absolute top-[-0.25rem] left-1/2 flex h-[34.4375rem] w-[90rem] -translate-x-1/2 items-center justify-center">
          <div className="-scale-y-100 flex-none">
            <div className="relative h-[34.4375rem] w-[90rem]">
              <div className="absolute inset-[-18.15%_-6.94%]">
                <img alt="" className="block size-full max-w-none" src="/landing/desktop-6/rectangle2087329707.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[-8.125rem] left-[18.6875rem] flex size-[54.9525rem] items-center justify-center">
          <motion.div style={{ y: logoY, rotate: -6 }} className="flex-none">
            <div className="relative size-[50rem]" data-name="ChatGPT Image 18 янв. 2026 г., 02_42_20 2">
              <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src="/landing/desktop-6/chat-gpt-image1820260242201.png" />
            </div>
          </motion.div>
        </div>

        {/* Декоративный логотип-"кости" Danda */}
        <div className="absolute h-[12.79144rem] left-[74.68438rem] top-[40.4425rem] w-[16.37788rem]" data-name="Vector">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src="/landing/desktop-6/vector3.svg" />
        </div>
        <div ref={danndaRef} className="absolute h-[17.60813rem] left-[56.81188rem] top-[35.625rem] w-[16.51456rem]" data-name="Vector">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src="/landing/desktop-6/vector4.svg" />
        </div>
        <div className="absolute h-[12.83688rem] left-[39.74562rem] top-[40.10188rem] w-[15.46675rem]" data-name="Vector">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src="/landing/desktop-6/vector5.svg" />
        </div>
        <div className="absolute h-[12.79144rem] left-[21.09313rem] top-[40.4425rem] w-[16.37788rem]" data-name="Vector">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src="/landing/desktop-6/vector6.svg" />
        </div>
        <div className="absolute h-[15.90413rem] -left-2 top-[37.03375rem] w-[20.68306rem]" data-name="Vector">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src="/landing/desktop-6/vector7.svg" />
        </div>
        <div className="absolute flex h-[5.58194rem] items-center justify-center left-118 top-[38.4375rem] w-[19.89738rem]">
          <div className="flex-none rotate-[-4.85deg]">
            <div className="relative h-[3.9375rem] w-[19.63494rem] rounded-[1rem] bg-(--dd-blue-600)" />
          </div>
        </div>
        <div className="absolute flex h-[3.66206rem] items-center justify-center left-[31.0525rem] top-[39.23438rem] w-[16.94244rem]">
          <div className="flex-none rotate-[-4.85deg]">
            <p className="relative font-(family-name:--font-inter-sans) text-[2rem] font-semibold whitespace-nowrap text-white not-italic [word-break:break-word]">danda@gmail.com</p>
          </div>
        </div>
        <div className="absolute flex h-[6.23563rem] items-center justify-center left-[41.9375rem] top-[42.125rem] w-[19.43581rem]">
          <div className="flex-none rotate-7">
            <div className="relative h-[3.9375rem] w-[19.09831rem] rounded-[1rem] bg-white" />
          </div>
        </div>
        <div className="absolute flex h-[4.19075rem] items-center justify-center left-[43.5425rem] top-[43.115rem] w-[16.217rem]">
          <div className="flex-none rotate-7">
            <p className="relative font-(family-name:--font-inter-sans) text-[2rem] font-semibold whitespace-nowrap text-(--dd-gray-450) not-italic [word-break:break-word]">Обсудить проект</p>
          </div>
        </div>

        {/* Соцсети + CTA поверх декоративной картинки */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-[8.875rem] left-1/2 flex -translate-x-1/2 items-center justify-center gap-[0.41125rem] rounded-[1.645rem] border-[0.06169rem] border-(--dd-border-subtle) bg-(--dd-glass-tint) p-[0.41125rem] backdrop-blur-[0.87906rem]"
        >
          {["boxicons-logo.svg", "boxicons-logo1.svg", "boxicons-logo2.svg"].map(icon => (
            <div key={icon} className="relative size-[4.1125rem] shrink-0 overflow-clip rounded-[1.23375rem] bg-white">
              <div className="absolute top-1/2 left-1/2 size-9 -translate-x-1/2 -translate-y-1/2">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src={`/landing/desktop-6/${icon}`} />
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="absolute top-[26rem] left-[49.5625rem] flex items-center justify-center gap-4 rounded-[1.25rem] bg-(--dd-blue-600) py-[0.625rem] pr-6 pl-[0.625rem]"
        >
          <div className="relative size-12 shrink-0 overflow-clip rounded-[1rem] bg-white">
            <div className="absolute top-[0.625rem] left-[0.625rem] flex size-7 items-center justify-center">
              <div className="-rotate-90 flex-none">
                <div className="relative size-7" data-name="Boxicons">
                  <img alt="" className="absolute inset-0 block size-full max-w-none" src="/landing/desktop-6/boxicons.svg" />
                </div>
              </div>
            </div>
          </div>
          <p className="shrink-0 font-(family-name:--font-manrope-sans) text-[1.25rem] font-medium tracking-[-0.025rem] whitespace-nowrap text-white [word-break:break-word]">
            Бесплатный аудит
          </p>
        </motion.div>

        {/* Контент (почта/копирайт + навигация) — накладывается поверх декоративной картинки, как в макете */}
        <div className="absolute top-[20.9375rem] left-6 flex w-[87rem] items-start justify-between">
          <div className="flex flex-col items-start gap-6 [word-break:break-word]">
            <div className="flex flex-col items-start gap-[0.625rem] whitespace-nowrap">
              <p className="font-(family-name:--font-manrope-sans) text-[1.25rem] font-medium tracking-[-0.0625rem] text-(--dd-gray-400)">Напишите нам </p>
              <p className="font-(family-name:--font-manrope-sans) text-[3.25rem] leading-0 font-bold tracking-[-0.0975rem] text-black">
                <span className="leading-none text-(--dd-blue-600)">@</span>
                <span className="leading-none">danda</span>
              </p>
            </div>
            <p className="font-(family-name:--font-manrope-sans) text-[1.25rem] font-medium tracking-[-0.0625rem] text-(--dd-gray-400)">
              © 2024 All rights reserved
            </p>
          </div>

          <div className="flex flex-col items-start gap-7 font-(family-name:--font-manrope-sans) text-[1.25rem] font-medium tracking-[-0.0625rem]">
            <p className="text-(--dd-gray-400)">Навигация</p>
            <div className="flex flex-col items-start gap-4 text-(--dd-gray-820) whitespace-nowrap">
              <p>Портфолио</p>
              <p>Этапы работы</p>
              <p>Услуги</p>
              <p>Отзывы</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
