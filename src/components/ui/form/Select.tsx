export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "primary" | "secondary";
  options: Array<{ value: string; label: string }>;
  // onChange?: (value: string) => void;
}

export default function Select({
  variant = "primary",
  options,
  // onChange,
  ...props
}: SelectProps) {
  return (
    <select
      className={`campo-input ${
        variant === "secondary" ? "input-secoundary" : ""
      }`}
      // onChange={(e) => props.onChange?.(e.target.value)}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
