import Image from "next/image";

export function HeaderMobile() {
  return (
    <header className="relative z-20 flex items-center justify-center px-6 py-5">
      <div className="flex items-center gap-[0.375rem]">
        <div className="relative size-5 overflow-clip">
          <div className="absolute inset-[5.56%_0]">
            <Image alt="" fill sizes="20px" className="object-contain" src="/landing/desktop-6/group2087327113.svg" />
          </div>
        </div>
        <div className="relative h-[0.75rem] w-[3.9375rem]" data-name="Danda">
          <Image alt="" fill sizes="63px" className="object-contain" src="/landing/desktop-6/danda.svg" />
        </div>
      </div>
    </header>
  );
}
