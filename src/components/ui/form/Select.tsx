import { forwardRef } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "primary" | "secondary";
  options: Option[];
}

const VARIANT_CLASSES = {
  primary: "campo-select",
  secondary: "select-secondary",
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ variant = "primary", options, ...props }, ref) => {
    return (
      <select className={VARIANT_CLASSES[variant]} ref={ref} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";

export default Select;
