import Link from "next/link";

type Variant = "primary" | "secondary" | "coral" | "ghost" | "light";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

const variants: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  coral: "btn btn-coral",
  ghost: "btn btn-ghost",
  light: "btn btn-light",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: Props) {
  const classes = [variants[variant], className].filter(Boolean).join(" ");

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
