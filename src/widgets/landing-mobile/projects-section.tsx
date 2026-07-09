import { ProjectCounter, PROJECTS } from "@/entities/project";
import { Tag } from "@/shared/ui/tag";

export function ProjectsSectionMobile() {
  const [selix, drSmile, foodDelivery] = [...PROJECTS].reverse();

  return (
    <section className="relative px-3 py-10">
      <h2 className="w-[13.4375rem] font-(family-name:--font-manrope-sans) text-[2rem] leading-none font-semibold tracking-[-0.06rem] whitespace-nowrap text-black [word-break:break-word]">
        Наши проекты
      </h2>

      <div className="relative mx-auto mt-14 h-[42.5rem] w-[21rem]">
        <div className="absolute top-[-1rem] left-1/2 h-[34.5rem] w-[17.0469rem] -translate-x-1/2 overflow-clip rounded-[1.2176rem] bg-black">
          <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src="/landing/mobile/fooddelivery-card.png" />
          <div className="absolute top-[20.7rem] left-[1.2176rem] flex w-[14.358rem] flex-col items-start gap-[1.0147rem]">
            <div className="flex flex-col items-start gap-[0.6092rem] text-white [word-break:break-word]">
              <p className="font-(family-name:--font-manrope-sans) text-[1.4206rem] leading-none font-semibold tracking-[-0.0426rem] whitespace-nowrap">
                {foodDelivery.name}
              </p>
              <p className="h-[2.638rem] w-[12.633rem] font-(family-name:--font-manrope-sans) text-[0.7103rem] leading-[1.2] font-medium opacity-76">
                {foodDelivery.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-[0.4059rem]">
              {foodDelivery.tags.map(tag => (
                <Tag key={tag} className="rounded-[0.8118rem] border-[0.0355rem] px-[0.8118rem] py-[0.6088rem] text-[0.7103rem] tracking-[-0.0213rem]">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
          <ProjectCounter
            current="01"
            total="03"
            className="absolute top-[1.2176rem] left-[1.2176rem] gap-[0.2029rem]"
            numberClassName="text-[1.2176rem] tracking-[-0.0365rem]"
            totalClassName="text-[0.8118rem] tracking-[-0.0244rem]"
          />
        </div>

        <div className="absolute top-[-0.5rem] left-1/2 h-[38.4375rem] w-[19rem] -translate-x-1/2 overflow-clip rounded-[1.3566rem] bg-black">
          <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src="/landing/mobile/drsmile-card.png" />
          <div className="absolute top-[23.0625rem] left-[1.3566rem] flex w-[16rem] flex-col items-start gap-[1.1305rem]">
            <div className="flex flex-col items-start gap-[0.6784rem] text-white [word-break:break-word]">
              <p className="font-(family-name:--font-manrope-sans) text-[1.5828rem] leading-none font-semibold tracking-[-0.0475rem] whitespace-nowrap">
                {drSmile.name}
              </p>
              <p className="h-[2.9393rem] w-[14.075rem] font-(family-name:--font-manrope-sans) text-[0.7914rem] leading-[1.2] font-medium opacity-76">
                {drSmile.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-[0.4522rem]">
              {drSmile.tags.map(tag => (
                <Tag key={tag} className="rounded-[0.9043rem] border-[0.0396rem] px-[0.9043rem] py-[0.6783rem] text-[0.7914rem] tracking-[-0.0237rem]">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
          <ProjectCounter
            current="02"
            total="03"
            className="absolute top-[1.3566rem] left-[1.3566rem] gap-[0.2261rem]"
            numberClassName="text-[1.3566rem] tracking-[-0.0407rem]"
            totalClassName="text-[0.9043rem] tracking-[-0.0271rem]"
          />
        </div>

        <div className="absolute inset-0 overflow-clip rounded-[1.5rem] bg-black">
          <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src="/landing/mobile/selix-card.png" />
          <div className="absolute top-[25.5rem] left-[1.5rem] flex w-[17.6875rem] flex-col items-start gap-[1.25rem]">
            <div className="flex flex-col items-start gap-[0.75rem] text-white [word-break:break-word]">
              <p className="font-(family-name:--font-manrope-sans) text-[1.75rem] leading-none font-semibold tracking-[-0.0525rem] whitespace-nowrap">
                {selix.name}
              </p>
              <p className="h-[3.25rem] w-[15.5625rem] font-(family-name:--font-manrope-sans) text-[0.875rem] leading-[1.2] font-medium opacity-76">
                {selix.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-[0.5rem]">
              {selix.tags.map(tag => (
                <Tag key={tag} className="rounded-[1rem] border-[0.0438rem] px-[1rem] py-[0.75rem] text-[0.875rem] tracking-[-0.0263rem]">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
          <ProjectCounter
            current="03"
            total="03"
            className="absolute top-[1.5rem] left-[1.5rem] gap-[0.25rem]"
            numberClassName="text-[1.5rem] tracking-[-0.045rem]"
            totalClassName="text-[1rem] tracking-[-0.03rem]"
          />
        </div>
      </div>
    </section>
  );
}
