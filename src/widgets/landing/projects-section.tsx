import { ProjectCounter, PROJECTS } from "@/entities/project";
import { Tag } from "@/shared/ui/tag";

export function ProjectsSection() {
  const [selix, drSmile] = PROJECTS;

  return (
    <>
      <p className="absolute top-[62.25rem] left-[1.5rem] font-[family-name:var(--font-manrope-sans)] text-[3.5rem] leading-none font-semibold tracking-[-0.105rem] whitespace-nowrap text-black [word-break:break-word]">
        Наши проекты
      </p>
      <p className="absolute top-[64.25rem] left-[82.625rem] -translate-x-1/2 text-center font-[family-name:var(--font-manrope-sans)] text-[1.25rem] leading-[1.2] font-medium tracking-[-0.0625rem] whitespace-nowrap text-[var(--color-gray-300)]">
        От задачи к решению
      </p>

      {/* Подложка №1 — тот же проект Selix в уменьшенном масштабе, виден только тонкой полоской сверху карточки. */}
      <div className="absolute top-[69.25rem] left-[calc(50%+0.09563rem)] h-[39.6875rem] w-[72.69081rem] -translate-x-1/2 overflow-clip rounded-[1.67106rem]">
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[1.67106rem]">
          <div className="absolute inset-0 rounded-[1.67106rem] bg-[var(--color-gray-100)]" />
          <div className="absolute inset-0 overflow-hidden rounded-[1.67106rem]">
            <img alt="" className="absolute top-[-3.1%] left-[0.02%] h-[121.24%] w-full max-w-none" src="/landing/desktop-6/frame2136141693.jpg" />
          </div>
          <img alt="" className="absolute size-full max-w-none rounded-[1.67106rem] object-cover" src="/landing/desktop-6/frame2136141694.png" />
          <div className="absolute inset-0 overflow-hidden rounded-[1.67106rem]">
            <img alt="" className="absolute top-[-13.88%] left-0 h-[137.37%] w-full max-w-none" src="/landing/desktop-6/frame2136141695.jpg" />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[1.67106rem]">
            <img alt="" className="absolute top-[-4.95%] left-0 h-[109.89%] w-full max-w-none" src="/landing/desktop-6/frame2136141696.png" />
          </div>
        </div>
        <div className="absolute top-[27.25875rem] left-[1.88rem] flex w-[22.14144rem] flex-col items-start gap-[1.25331rem]">
          <div className="flex w-[17.6505rem] flex-col items-start gap-[1.04444rem] text-white [word-break:break-word]">
            <p className="font-[family-name:var(--font-manrope-sans)] text-[2.08881rem] leading-none font-semibold tracking-[-0.06266rem] whitespace-nowrap">
              {selix.name}
            </p>
            <p className="h-[3.9165rem] font-[family-name:var(--font-manrope-sans)] text-[1.04444rem] leading-[1.2] font-medium opacity-60">
              {selix.description}
            </p>
          </div>
          <div className="flex items-center gap-[0.41775rem]">
            {selix.tags.map(tag => (
              <Tag key={tag} className="rounded-[0.8355rem] border-[0.03656rem] px-[0.8355rem] py-[0.62663rem] text-[0.8355rem] tracking-[-0.02507rem]">
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        <ProjectCounter
          current="01"
          total="08"
          className="absolute top-[1.88rem] left-[66.99875rem] gap-[0.20888rem]"
          numberClassName="text-[1.87994rem] tracking-[-0.0564rem]"
          totalClassName="text-[1.04444rem] tracking-[-0.03133rem]"
        />
      </div>

      {/* Подложка №2 — превью следующего проекта (dr.smile), тоже видна только полоской сверху. */}
      <div className="absolute top-[70.25rem] left-[calc(50%+0.03125rem)] h-[44.3265rem] w-[81.1875rem] -translate-x-1/2 overflow-clip rounded-[1.86638rem]">
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[1.86638rem]">
          <div className="absolute inset-0 rounded-[1.86638rem] bg-gradient-to-b from-[var(--color-blue-200)] to-[var(--color-blue-300)] to-[62.566%]" />
          <div className="absolute inset-0 overflow-hidden rounded-[1.86638rem]">
            <img alt="" className="absolute top-[-5.84%] left-[3.19%] h-[94.71%] w-[93.65%] max-w-none" src="/landing/desktop-6/frame2136141697.png" />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[1.86638rem]">
            <img alt="" className="absolute top-[-2.83%] left-0 h-[116.04%] w-full max-w-none" src="/landing/desktop-6/frame2136141698.png" />
          </div>
        </div>
        <div className="absolute top-[27.99563rem] left-[-11.95625rem] h-[24.84619rem] w-[41.99356rem]">
          <div className="absolute inset-[-56.64%_-33.51%]">
            <img alt="" className="block size-full max-w-none" src="/landing/desktop-6/ellipse11731.svg" />
          </div>
        </div>
        <div className="absolute top-[30.44563rem] left-[2.09938rem] flex w-[24.7295rem] flex-col items-start gap-[1.39981rem]">
          <div className="flex w-[19.71363rem] flex-col items-start gap-[1.1665rem] text-white [word-break:break-word]">
            <p className="font-[family-name:var(--font-manrope-sans)] text-[2.333rem] leading-none font-semibold tracking-[-0.06999rem] whitespace-nowrap">
              {drSmile.name}
            </p>
            <p className="h-[4.37431rem] font-[family-name:var(--font-manrope-sans)] text-[1.1665rem] leading-[1.2] font-medium opacity-60">
              {drSmile.description}
            </p>
          </div>
          <div className="flex items-center gap-[0.46663rem]">
            {drSmile.tags.map(tag => (
              <Tag key={tag} className="rounded-[0.93319rem] border-[0.04081rem] px-[0.93319rem] py-[0.69988rem] text-[0.93319rem] tracking-[-0.02799rem]">
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        <ProjectCounter
          current="02"
          total="08"
          className="absolute top-[2.1rem] left-[74.48rem] gap-[0.23331rem]"
          numberClassName="text-[2.09969rem] tracking-[-0.06299rem]"
          totalClassName="text-[1.1665rem] tracking-[-0.03499rem]"
        />
      </div>

      {/* Основная видимая карточка — тот же Selix, в полный размер, поверх подложек. */}
      <div className="absolute top-[71.25rem] left-1/2 h-[47.5rem] w-[87rem] -translate-x-1/2 overflow-clip rounded-[2rem]">
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[2rem]">
          <div className="absolute inset-0 rounded-[2rem] bg-[var(--color-gray-100)]" />
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <img alt="" className="absolute top-[-3.1%] left-[0.02%] h-[121.24%] w-full max-w-none" src="/landing/desktop-6/frame2136141693.jpg" />
          </div>
          <img alt="" className="absolute size-full max-w-none rounded-[2rem] object-cover" src="/landing/desktop-6/frame2136141694.png" />
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <img alt="" className="absolute top-[-13.88%] left-0 h-[137.37%] w-full max-w-none" src="/landing/desktop-6/frame2136141695.jpg" />
          </div>
        </div>
        <div className="absolute top-[44.875rem] left-[73rem] h-[0.375rem] w-[11.75rem]">
          <img alt="" className="absolute block inset-0 size-full max-w-none" src="/landing/desktop-6/frame2147221819.svg" />
        </div>
        <div className="absolute top-[32.625rem] left-[2.25rem] flex w-[26.5rem] flex-col items-start gap-[1.5rem]">
          <div className="flex w-[21.125rem] flex-col items-start gap-[1.25rem] text-white [word-break:break-word]">
            <p className="font-[family-name:var(--font-manrope-sans)] text-[2.5rem] leading-none font-semibold tracking-[-0.075rem] whitespace-nowrap">
              {selix.name}
            </p>
            <p className="h-[4.6875rem] font-[family-name:var(--font-manrope-sans)] text-[1.25rem] leading-[1.2] font-medium opacity-76">
              {selix.description}
            </p>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            {selix.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
        <ProjectCounter
          current="01"
          total="05"
          className="absolute top-[2.25rem] left-[80.25rem] gap-[0.25rem]"
          numberClassName="text-[2.25rem] tracking-[-0.0675rem]"
          totalClassName="text-[1.25rem] tracking-[-0.0375rem]"
        />
      </div>
    </>
  );
}
