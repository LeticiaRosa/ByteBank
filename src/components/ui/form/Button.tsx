interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

const VARIANT_CLASSES = {
  primary: "btn",
  secondary: "btn-secoundary",
  outline: "btn-outline",
};

export default function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={VARIANT_CLASSES[variant]} {...props}>
      {children}
    </button>
  );
}
