import { HamburgerIcon } from "@/shared/ui/icons/boxicons";
import { NavMenu } from "@/shared/ui/nav-menu";

export function HeaderMobile() {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-5">
      <div className="flex items-center gap-[0.375rem]">
        <div className="relative size-5 overflow-clip">
          <div className="absolute inset-[5.56%_0]">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src="/landing/desktop-6/group2087327113.svg" />
          </div>
        </div>
        <div className="relative h-[0.75rem] w-[3.9375rem]" data-name="Danda">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src="/landing/desktop-6/danda.svg" />
        </div>
      </div>

      <NavMenu
        mode="click"
        align="right"
        idSuffix="-mobile"
        closedClassName="flex size-11 cursor-pointer items-center justify-center rounded-[1rem]"
        closedContent={<HamburgerIcon />}
      />
    </header>
  );
}
