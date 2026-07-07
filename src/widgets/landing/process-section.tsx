import { Button } from "@/shared/ui/button";
import { GlassIconCluster } from "@/shared/ui/glass-icon-cluster";
import { BoxiconsSend } from "@/shared/ui/icons/boxicons";
import { ProcessStep } from "@/shared/ui/process-step";

function StepDescription({ lines }: { lines: [string, string] }) {
  return (
    <>
      {lines[0]}
      <br />
      {lines[1]}
    </>
  );
}

const STEPS = [
  { index: "01", title: "Уточнение задачи", description: <StepDescription lines={["Собираем требования ", "и понимаем цели бизнеса"]} /> },
  { index: "02", title: "Структура и дизайн", description: "Выстраиваем структуру, интерфейс и визуальную концепцию" },
  { index: "03", title: "Разработка", description: "Реализуем сайт, лендинг или приложение по утверждённому макету" },
  { index: "04", title: "Тестирование", description: <StepDescription lines={["Проверяем работу", " и устраняем недочёты"]} /> },
  { index: "05", title: "Запуск продукта", description: "Публикуем готовый проект и передаем вам все доступы и исходники" },
];

function Divider() {
  return (
    <div className="relative h-0 w-full shrink-0">
      <div className="absolute inset-[-0.04375rem_0_0_0]">
        <img alt="" className="block size-full max-w-none" src="/landing/desktop-6/line18.svg" />
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <>
      <p className="absolute top-[129.25rem] left-[45rem] w-[61.375rem] -translate-x-1/2 text-center font-[family-name:var(--font-manrope-sans)] text-[4.5rem] leading-none font-semibold tracking-[-0.135rem] text-black [word-break:break-word]">
        Прозрачный процесс, фиксированные этапы и предсказуемый результат
      </p>
      <p className="absolute top-[126.25rem] left-[45.3125rem] -translate-x-1/2 text-center font-[family-name:var(--font-manrope-sans)] text-[1.25rem] leading-[1.2] font-medium tracking-[-0.0625rem] whitespace-nowrap text-muted">
        Как мы работаем
      </p>

      <GlassIconCluster variant="pair" className="absolute top-[132.4375rem] left-[calc(50%-11.875rem)] -translate-x-1/2" />
      <GlassIconCluster variant="quad" className="absolute top-[137.25rem] left-[calc(50%+17.875rem)] -translate-x-1/2" />

      <div className="absolute top-[136.3125rem] left-[6.5rem] h-[3.9375rem] w-[6.75rem]">
        <div className="absolute top-[1.67563rem] left-[0.25125rem] flex items-center justify-center rounded-[1.82813rem] bg-brand px-[1rem] py-[0.5rem] backdrop-blur-[0.82031rem]">
          <p className="font-[family-name:var(--font-manrope-sans)] text-[1rem] font-medium tracking-[-0.03rem] whitespace-nowrap text-white">
            Developer
          </p>
        </div>
        <div className="absolute top-[0.5025rem] left-[5.84688rem] flex h-[1.78844rem] w-[1.86594rem] items-center justify-center">
          <div className="rotate-71 flex-none">
            <div className="relative h-[1.5rem] w-[1.375rem]">
              <div className="absolute inset-[7.58%_23.18%_21.35%_3.09%]">
                <img alt="" className="block size-full max-w-none" src="/landing/desktop-6/vector1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[128.75rem] left-[79.375rem] h-[3.9375rem] w-[6.75rem]">
        <div className="absolute top-[1.67563rem] left-[0.25125rem] flex items-center justify-center rounded-[1.82813rem] bg-brand px-[1rem] py-[0.5rem] backdrop-blur-[0.82031rem]">
          <p className="font-[family-name:var(--font-manrope-sans)] text-[1rem] font-medium tracking-[-0.03rem] whitespace-nowrap text-white">
            Designer
          </p>
        </div>
        <div className="absolute top-[0.42125rem] left-[-0.55125rem] flex h-[1.69663rem] w-[1.59275rem] items-center justify-center">
          <div className="-rotate-9 flex-none">
            <div className="relative h-[1.5rem] w-[1.375rem]">
              <div className="absolute inset-[7.58%_23.18%_21.35%_3.09%]">
                <img alt="" className="block size-full max-w-none" src="/landing/desktop-6/vector2.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[151.5rem] left-[39.75rem] flex w-[48.75rem] flex-col items-start gap-[3.25rem]">
        {STEPS.map((step, stepIndex) => (
          <div key={step.index} className="flex w-full flex-col items-start gap-[3.25rem]">
            <ProcessStep index={step.index} title={step.title} description={step.description} />
            {stepIndex < STEPS.length - 1 && <Divider />}
          </div>
        ))}
      </div>

      <p className="absolute top-[151.5rem] left-[1.5rem] w-[20.75rem] font-[family-name:var(--font-manrope-sans)] leading-[0] font-medium tracking-[-0.0625rem] text-muted [word-break:break-word]">
        <span className="text-[1.25rem] leading-[1.2]">Вы получаете понятное цифровое решение. </span>
        <span className="text-[1.25rem] leading-[1.2] text-black">Для бизнеса, который ценит ясность и стабильность</span>
      </p>

      <Button
        variant="primary"
        className="absolute top-[196rem] left-[39.625rem]"
        leadingIcon={<BoxiconsSend className="relative size-[1.75rem] -rotate-90" />}
      >
        Бесплатный аудит
      </Button>
    </>
  );
}
