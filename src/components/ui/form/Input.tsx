interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
}

const VARIANT_CLASSES = {
  primary: "campo-input",
  secondary: "input-secoundary",
};

export default function Input({ variant = "primary", ...props }: InputProps) {
  return <input className={VARIANT_CLASSES[variant]} {...props} />;
}
