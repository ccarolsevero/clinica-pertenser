import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function Logo({ className = "logo", width = 210, height = 119, priority }: Props) {
  return (
    <Link href="/" className={className} aria-label="PertenSer — Avaliação Psicológica">
      <Image
        src="/logo-pertenser.png"
        alt="PertenSer — Avaliação Psicológica"
        width={width}
        height={height}
        priority={priority}
        quality={90}
      />
    </Link>
  );
}
