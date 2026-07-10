"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { VuesaxBoldCheck, VuesaxBoldDocumentCode, VuesaxBoldFolder, VuesaxBoldLampOn, VuesaxBoldPath, VuesaxBoldProfile2User } from "@/shared/ui/icons/vuesax";

const glassIconWrapperClassName = "relative flex size-[1.5rem] shrink-0 items-center justify-center overflow-clip rounded-[0.375rem] bg-white";
const glassIconWrapperBrandClassName = `${glassIconWrapperClassName} bg-brand`;

function Divider() {
  return (
    <div className="relative h-0 w-full shrink-0">
      <div className="absolute inset-[-0.04375rem_0_0_0]">
        <Image alt="" fill sizes="336px" className="object-cover" src="/landing/desktop-6/line18.svg" />
      </div>
    </div>
  );
}

function StepDescription({ lines }: { lines: string[] }) {
  return (
    <p className="w-full font-(family-name:--font-manrope-sans) text-[1rem] leading-[1.2] font-medium text-(--dd-gray-400)">
      {lines.map(line => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </p>
  );
}

const STEPS = [
  { index: "01", title: "Уточнение задачи", description: ["Собираем требования ", "и понимаем цели бизнеса"] },
  { index: "02", title: "Структура и дизайн", description: ["Выстраиваем структуру, интерфейс и визуальную концепцию"] },
  { index: "03", title: "Разработка", description: ["Реализуем сайт, лендинг или приложение по утверждённому макету"] },
  { index: "04", title: "Тестирование", description: ["Проверяем работу и устраняем недочёты"] },
  { index: "05", title: "Запуск продукта", description: ["Публикуем готовый проект и передаем вам все доступы и исходники"] },
];

export function ProcessSectionMobile() {
  return (
    <section id="process-mobile" className="relative px-3 py-10">
      <div className="relative mx-auto flex w-[21rem] flex-col items-center gap-3 text-center">
        <p className="font-(family-name:--font-manrope-sans) text-[1rem] font-medium text-(--dd-gray-400)">
          Как мы работаем
        </p>
        <h2 className="w-[21rem] font-(family-name:--font-manrope-sans) text-[2rem] leading-none font-semibold tracking-[-0.06rem] text-black [word-break:break-word]">
          Прозрачный процесс, фиксированные этапы и предсказуемый результат
        </h2>
        <p className="w-[17.875rem] font-(family-name:--font-manrope-sans) font-medium text-(--dd-gray-400)">
          <span className="text-[1rem] leading-[1.2]">Вы получаете понятное цифровое решение. </span>
          <span className="text-[1rem] leading-[1.2] text-black">Для бизнеса, который ценит ясность и стабильность</span>
        </p>

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[7.5625rem] left-[0.8125rem] flex items-center justify-center gap-[0.125rem] rounded-[0.5rem] border-[0.0375rem] border-(--dd-border-subtle) bg-(--dd-glass-tint) p-[0.125rem] backdrop-blur-[0.534rem]"
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
          className="absolute top-[9.125rem] left-[15rem] flex items-center justify-center gap-[0.125rem] rounded-[0.5rem] border-[0.0375rem] border-(--dd-border-subtle) bg-(--dd-glass-tint) p-[0.125rem] backdrop-blur-[0.534rem]"
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
        <div className="absolute top-[15.4375rem] left-[1.6875rem] flex items-center justify-center rounded-[1.8281rem] bg-brand px-[0.5rem] py-[0.25rem] backdrop-blur-[0.8203rem]">
          <p className="font-(family-name:--font-manrope-sans) text-[0.75rem] font-medium tracking-[-0.0225rem] whitespace-nowrap text-white">
            Developer
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 flex w-[21rem] flex-col items-start gap-5">
        {STEPS.map((step, stepIndex) => (
          <div key={step.index} className="flex w-full flex-col items-start gap-5">
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full items-center justify-between">
                <p className="font-(family-name:--font-manrope-sans) text-[1.5rem] leading-[1.2] font-medium tracking-[-0.0625rem] text-black">
                  {step.title}
                </p>
                <div className="flex items-center justify-center rounded-[0.75rem] border-[0.04375rem] border-(--dd-border-subtle-light) px-3 py-2">
                  <p className="font-(family-name:--font-manrope-sans) text-[0.75rem] leading-[1.2] font-medium tracking-[-0.0225rem] text-black">
                    {step.index}
                  </p>
                </div>
              </div>
              <StepDescription lines={step.description} />
            </div>
            {stepIndex < STEPS.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </section>
  );
}
