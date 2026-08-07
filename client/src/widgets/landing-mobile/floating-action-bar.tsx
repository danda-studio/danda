import { TELEGRAM_CONTACT_URL } from "@/shared/config/social-links";
import { HamburgerIcon } from "@/shared/ui/icons/boxicons";
import { NavMenu } from "@/shared/ui/nav-menu";

export function FloatingActionBarMobile() {
  return (
    <div className="fixed inset-x-0 bottom-6 z-30 flex items-center justify-center gap-3">
      <NavMenu
        mode="click"
        align="center"
        panelAnchor="bottom"
        panelPositionClassName="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        idSuffix="-mobile"
        closedClassName="inline-flex h-11 cursor-pointer items-center justify-center gap-[0.625rem] whitespace-nowrap rounded-[1rem] px-5 py-4 text-[1rem] font-medium tracking-[-0.025rem] text-black shadow-lg"
        closedContent={(
          <span className="flex items-center gap-[0.625rem]">
            Меню
            <HamburgerIcon />
          </span>
        )}
      />

      <a
        href={TELEGRAM_CONTACT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 cursor-pointer items-center justify-center rounded-[1rem] bg-brand px-5 py-4 font-(family-name:--font-manrope-sans) text-[1rem] font-medium tracking-[-0.025rem] text-white shadow-lg outline-none transition-colors hover:bg-black focus-visible:ring-[0.125rem] focus-visible:ring-[rgba(0,96,253,0.6)] focus-visible:ring-offset-[0.125rem]"
      >
        Написать
      </a>
    </div>
  );
}
