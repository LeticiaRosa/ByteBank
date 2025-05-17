import Link from "next/link";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const VARIANT_CLASSES = {
  primary: "link",
  secondary: "link-secoundary",
};

export default function LinkButton({
  href,
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link href={href} className={VARIANT_CLASSES[variant]} {...props}>
      {children}
    </Link>
  );
}
