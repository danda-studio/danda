import Image from "next/image";

export function BoxiconsSend({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-7"} data-name="Boxicons">
      <Image alt="" fill className="object-contain" src="/landing/desktop-6/boxicons.svg" />
    </div>
  );
}

export function HamburgerIcon({ className }: { className?: string }) {
  return (
    <div className={className || "relative h-[0.625rem] w-4"}>
      <Image alt="" fill className="object-contain" src="/landing/desktop-6/frame2087329091.svg" />
    </div>
  );
}
