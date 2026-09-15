import Image from "next/image";

export function PortraitSlot({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={["portrait", className].filter(Boolean).join(" ")}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 980px) 90vw, 420px"
        quality={90}
      />
    </figure>
  );
}
