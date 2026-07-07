export function BoxiconsSend({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[1.75rem]"} data-name="Boxicons">
      <img alt="" className="absolute inset-0 block max-w-none size-full" src="/landing/desktop-6/boxicons.svg" />
    </div>
  );
}

export function HamburgerIcon({ className }: { className?: string }) {
  return (
    <div className={className || "relative h-[0.625rem] w-[1rem]"}>
      <img alt="" className="block max-w-none size-full" src="/landing/desktop-6/frame2087329091.svg" />
    </div>
  );
}
