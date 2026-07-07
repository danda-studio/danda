import { Button } from "@/shared/ui/button";
import { HamburgerIcon } from "@/shared/ui/icons/boxicons";

export function Header() {
  return (
    <>
      <div className="absolute top-[1.5rem] left-[1.5rem] flex w-[9.47919rem] flex-col items-start">
        <div className="flex items-center gap-[0.58331rem]">
          <div className="relative size-[1.75rem] overflow-clip">
            <div className="absolute inset-[5.56%_0]">
              <img alt="" className="absolute block inset-0 size-full max-w-none" src="/landing/desktop-6/group2087327113.svg" />
            </div>
          </div>
          <div className="relative h-[0.97225rem] w-[5.05556rem]" data-name="Danda">
            <img alt="" className="absolute block inset-0 size-full max-w-none" src="/landing/desktop-6/danda.svg" />
          </div>
        </div>
      </div>

      <Button variant="light" trailingIcon={<HamburgerIcon />} className="absolute top-[1.5rem] left-1/2 -translate-x-1/2">
        Меню
      </Button>

      <Button variant="primary" className="absolute top-[1.5rem] left-[81.5625rem]">
        Написать
      </Button>
    </>
  );
}
