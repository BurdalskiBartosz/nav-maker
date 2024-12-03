import cn from "classnames";
import { forwardRef, ReactNode } from "react";

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
  icon?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, placeholder, icon, error, ...rest }, ref) => {
    return (
      <div className="relative flex flex-col gap-1.5 gap-y-1.5">
        <label
          htmlFor={id}
          className={cn("text-sm font-medium text-tetiary-700", {
            "text-red-500": error,
          })}
        >
          {label}
        </label>
        <div className="relative">
          {icon && (
            <span className="absolute left-3.5 top-2.5 text-quanternary-500">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            type="text"
            className={cn(
              "w-full rounded-lg border border-primary px-3 py-2 text-placeholder",
              {
                "border-red-500": error,
                "pl-10": icon,
              },
            )}
            placeholder={placeholder}
            {...rest}
          />
        </div>

        <p className="absolute right-0 top-full text-sm text-red-500">
          {error}
        </p>
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
