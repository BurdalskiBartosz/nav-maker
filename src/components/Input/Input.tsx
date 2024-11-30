import cn from "classnames";
import { forwardRef } from "react";

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, placeholder, error, ...rest }, ref) => {
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
        <input
          ref={ref}
          id={id}
          type="text"
          className={cn(
            "rounded-md border border-primary px-3 py-2 text-placeholder",
            {
              "border-red-500": error,
            },
          )}
          placeholder={placeholder}
          {...rest}
        />
        <p className="absolute right-0 top-full text-sm text-red-500">
          {error}
        </p>
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
