import Image from "next/image";

interface IconProps {
  className?: string;
}

export function VuesaxBoldLampOn({ className }: IconProps) {
  return (
    <div className={className || "relative size-4"} data-name="vuesax/bold/lamp-on">
      <Image alt="" fill className="object-contain" src="/landing/desktop-6/vuesax-bold-lamp-on.svg" />
    </div>
  );
}

export function VuesaxBoldProfile2User({ className }: IconProps) {
  return (
    <div className={className || "relative size-4"} data-name="vuesax/bold/profile-2user">
      <Image alt="" fill className="object-contain" src="/landing/desktop-6/vuesax-bold-profile2-user.svg" />
    </div>
  );
}

export function VuesaxBoldPath({ className }: IconProps) {
  return (
    <div className={className || "relative size-4"} data-name="vuesax/bold/path">
      <Image alt="" fill className="object-contain" src="/landing/desktop-6/vuesax-bold-path.svg" />
    </div>
  );
}

export function VuesaxBoldDocumentCode({ className }: IconProps) {
  return (
    <div className={className || "relative size-4"} data-name="vuesax/bold/document-code">
      <Image alt="" fill className="object-contain" src="/landing/desktop-6/vuesax-bold-document-code.svg" />
    </div>
  );
}

export function VuesaxBoldCheck({ className }: IconProps) {
  return (
    <div className={className || "relative size-4"} data-name="vuesax/bold/check">
      <Image alt="" fill className="object-contain" src="/landing/desktop-6/vuesax-bold-check.svg" />
    </div>
  );
}

export function VuesaxBoldFolder({ className }: IconProps) {
  return (
    <div className={className || "relative size-4"} data-name="vuesax/bold/folder">
      <Image alt="" fill className="object-contain" src="/landing/desktop-6/vuesax-bold-folder.svg" />
    </div>
  );
}
