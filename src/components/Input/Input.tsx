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
      <div className="flex flex-col gap-1.5 gap-y-1.5 relative">
        <label
          htmlFor={id}
          className={cn("text-sm text-tetiary-700 font-medium", {
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
            "py-2 px-3 text-placeholder border border-primary rounded-md",
            {
              "border-red-500": error,
            }
          )}
          placeholder={placeholder}
          {...rest}
        />
        <p className="absolute top-full text-sm right-0 text-red-500">
          {error}
        </p>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
