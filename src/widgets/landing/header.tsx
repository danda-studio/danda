import { Button } from "@/shared/ui/button";
import { HamburgerIcon } from "@/shared/ui/icons/boxicons";

export function Header() {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-start px-6 py-6">
      <div className="flex w-[9.47919rem] flex-col items-start justify-self-start">
        <div className="flex items-center gap-[0.58331rem]">
          <div className="relative size-7 overflow-clip">
            <div className="absolute inset-[5.56%_0]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src="/landing/desktop-6/group2087327113.svg" />
            </div>
          </div>
          <div className="relative h-[0.97225rem] w-[5.05556rem]" data-name="Danda">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src="/landing/desktop-6/danda.svg" />
          </div>
        </div>
      </div>

      <Button variant="light" trailingIcon={<HamburgerIcon />} className="justify-self-center">
        Меню
      </Button>

      <Button variant="primary" className="justify-self-end">
        Написать
      </Button>
    </header>
  );
}
