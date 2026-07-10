"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { BoxiconsSend } from "@/shared/ui/icons/boxicons";
import { VuesaxBoldCheck, VuesaxBoldDocumentCode, VuesaxBoldFolder, VuesaxBoldLampOn, VuesaxBoldPath, VuesaxBoldProfile2User } from "@/shared/ui/icons/vuesax";

const glassIconWrapperClassName = "relative flex size-[1.5rem] shrink-0 items-center justify-center overflow-clip rounded-[0.375rem] bg-white";
const glassIconWrapperBrandClassName = `${glassIconWrapperClassName} bg-brand`;

export function HeroMobile() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[36.25rem] w-[61rem] -translate-x-1/2 opacity-70">
        <Image alt="" fill priority sizes="976px" className="object-cover" src="/landing/desktop-6/dots.svg" />
      </div>

      <div className="relative mx-auto flex w-[22.5rem] max-w-full flex-col items-center gap-3 px-3 pt-[6.5rem] text-center">
        <p className="font-(family-name:--font-manrope-sans) text-[1rem] font-medium text-black">
          Студия разработки полного цикла
        </p>
        <h1 className="w-[21rem] font-(family-name:--font-manrope-sans) text-[2.25rem] leading-none font-semibold tracking-[-0.0675rem] text-black [word-break:break-word]">
          Мы берем на себя сложность.От сайта до сложного сервиса или приложения
        </h1>

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[11.6875rem] left-[0.875rem] flex items-center justify-center gap-[0.125rem] rounded-[0.5rem] border-[0.0375rem] border-(--dd-border-subtle) bg-(--dd-glass-tint) p-[0.125rem] backdrop-blur-[0.534rem]"
        >
          <div className={glassIconWrapperClassName}>
            <VuesaxBoldFolder className="size-2" />
          </div>
          <div className={glassIconWrapperClassName}>
            <VuesaxBoldCheck className="size-2" />
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-[14.75rem] left-[15.125rem] flex items-center justify-center gap-[0.125rem] rounded-[0.5rem] border-[0.0375rem] border-(--dd-border-subtle) bg-(--dd-glass-tint) p-[0.125rem] backdrop-blur-[0.534rem]"
        >
          <div className={glassIconWrapperClassName}>
            <VuesaxBoldDocumentCode className="size-2" />
          </div>
          <div className={glassIconWrapperClassName}>
            <VuesaxBoldPath className="size-2" />
          </div>
          <div className={glassIconWrapperBrandClassName}>
            <VuesaxBoldProfile2User className="size-2" />
          </div>
          <div className={glassIconWrapperClassName}>
            <VuesaxBoldLampOn className="size-2" />
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-[1.125rem] w-[22.5rem] max-w-full">
        <div className="relative mx-auto size-[23.25rem] max-w-full">
          <Image
            alt=""
            fill
            priority
            sizes="372px"
            className="pointer-events-none object-cover"
            src="/landing/desktop-6/chat-gpt-image1820260242201.png"
          />
        </div>

        <p className="mx-auto mt-[1.25rem] w-[17.375rem] text-center font-(family-name:--font-manrope-sans) font-medium text-(--dd-gray-300)">
          <span className="text-[1rem] leading-[1.2]">Вы получаете понятное цифровое решение. </span>
          <span className="text-[1rem] leading-[1.2] text-black">Для бизнеса, который ценит ясность и стабильность</span>
        </p>

        <div className="mt-5 flex justify-center pb-10">
          <Button
            variant="primary"
            className="rounded-[1rem] py-1 pr-5 pl-1 text-[1rem]"
            leadingIcon={<BoxiconsSend className="relative size-6 -rotate-90" />}
            render={<a href="#contact-mobile" />}
            nativeButton={false}
          >
            Бесплатный аудит
          </Button>
        </div>
      </div>
    </section>
  );
}
