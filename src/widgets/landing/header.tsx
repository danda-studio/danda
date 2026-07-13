import Image from "next/image";
import { TELEGRAM_CONTACT_URL } from "@/shared/config/social-links";
import { Button } from "@/shared/ui/button";
import { HamburgerIcon } from "@/shared/ui/icons/boxicons";
import { NavMenu } from "@/shared/ui/nav-menu";

export function Header() {
  return (
    <header className="relative z-20 grid grid-cols-[1fr_auto_1fr] items-start px-6 py-6">
      <div className="flex w-[9.47919rem] flex-col items-start justify-self-start">
        <div className="flex items-center gap-[0.58331rem]">
          <div className="relative size-7 overflow-clip">
            <div className="absolute inset-[5.56%_0]">
              <Image alt="" fill sizes="28px" className="object-contain" src="/landing/desktop-6/group2087327113.svg" />
            </div>
          </div>
          <div className="relative h-[0.97225rem] w-[5.05556rem]" data-name="Danda">
            <Image alt="" fill sizes="81px" className="object-contain" src="/landing/desktop-6/danda.svg" />
          </div>
        </div>
      </div>

      <div className="justify-self-center">
        <NavMenu
          mode="hover"
          closedClassName="inline-flex h-11 cursor-pointer items-center justify-center whitespace-nowrap rounded-[1rem] px-5 py-4 text-[1rem] font-medium tracking-[-0.025rem] text-black"
          closedContent={(
            <span className="flex items-center gap-[0.625rem]">
              Меню
              <HamburgerIcon />
            </span>
          )}
        />
      </div>

      <Button
        variant="primary"
        className="justify-self-end"
        render={<a href={TELEGRAM_CONTACT_URL} target="_blank" rel="noopener noreferrer" />}
        nativeButton={false}
      >
        Написать
      </Button>
    </header>
  );
}
