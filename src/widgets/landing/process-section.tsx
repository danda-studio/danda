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

function FloatingBadge({ label, vector, vectorClassName, className }: { label: string; vector: string; vectorClassName: string; className: string }) {
  return (
    <div className={className}>
      <div className="absolute top-[1.67563rem] left-[0.25125rem] flex items-center justify-center rounded-[1.82813rem] bg-brand px-4 py-2 backdrop-blur-[0.82031rem]">
        <p className="font-(family-name:--font-manrope-sans) text-[1rem] font-medium tracking-[-0.03rem] whitespace-nowrap text-white">
          {label}
        </p>
      </div>
      <div className={vectorClassName}>
        <div className="relative h-[1.5rem] w-[1.375rem]">
          <div className="absolute inset-[7.58%_23.18%_21.35%_3.09%]">
            <img alt="" className="block size-full max-w-none" src={vector} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section className="relative -mt-[2.5rem] px-6 py-24">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <p className="font-(family-name:--font-manrope-sans) text-[1.25rem] leading-[1.2] font-medium tracking-[-0.0625rem] whitespace-nowrap text-muted">
          Как мы работаем
        </p>
        <h2 className="font-(family-name:--font-manrope-sans) text-[4.5rem] leading-none font-semibold tracking-[-0.135rem] text-black [word-break:break-word]">
          Прозрачный процесс, фиксированные этапы и предсказуемый результат
        </h2>

        <GlassIconCluster variant="pair" className="absolute top-[6.1875rem] left-[calc(50%-11.875rem)] -translate-x-1/2" />
        <GlassIconCluster variant="quad" className="absolute top-[11rem] left-[calc(50%+17.875rem)] -translate-x-1/2" />

        <FloatingBadge
          label="Developer"
          vector="/landing/desktop-6/vector1.svg"
          vectorClassName="absolute top-[0.5025rem] left-[5.84688rem] flex h-[1.78844rem] w-[1.86594rem] items-center justify-center rotate-71"
          className="absolute top-[10.0625rem] left-[calc(50%-38.5rem)] h-[3.9375rem] w-[6.75rem]"
        />
        <FloatingBadge
          label="Designer"
          vector="/landing/desktop-6/vector2.svg"
          vectorClassName="absolute top-[0.42125rem] left-[-0.55125rem] flex h-[1.69663rem] w-[1.59275rem] items-center justify-center -rotate-9"
          className="absolute top-[2.5rem] left-[calc(50%+34.375rem)] h-[3.9375rem] w-[6.75rem]"
        />
      </div>

      <div className="mx-auto mt-[8.75rem] flex max-w-[87rem] items-start gap-[17.5rem]">
        <p className="w-83 shrink-0 font-(family-name:--font-manrope-sans) font-medium tracking-[-0.0625rem] text-muted [word-break:break-word]">
          <span className="text-xl leading-[1.2]">Вы получаете понятное цифровое решение. </span>
          <span className="text-xl leading-[1.2] text-black">Для бизнеса, который ценит ясность и стабильность</span>
        </p>

        <div className="flex flex-1 flex-col items-start gap-13">
          {STEPS.map((step, stepIndex) => (
            <div key={step.index} className="flex w-full flex-col items-start gap-13">
              <ProcessStep index={step.index} title={step.title} description={step.description} />
              {stepIndex < STEPS.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-14 h-17 w-full">
        <Button
          variant="primary"
          className="absolute left-[calc(50%-5.375rem)]"
          leadingIcon={<BoxiconsSend className="relative size-[1.75rem] -rotate-90" />}
        >
          Бесплатный аудит
        </Button>
      </div>
    </section>
  );
}
