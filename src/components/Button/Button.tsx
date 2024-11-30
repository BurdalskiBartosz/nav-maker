import { PropsWithChildren, ReactNode } from "react";
import cn from "classnames";

type ButtonTypes = "primary" | "secondary" | "tetiary";

type ButtonProps = {
  handleClick?: () => void;
  type?: ButtonTypes;
  icon?: ReactNode;
  withBorders?: boolean;
};

const Button = ({
  children,
  handleClick,
  type = "tetiary",
  icon,
  withBorders = true,
}: PropsWithChildren<ButtonProps>) => {
  const buttonStyles: Record<ButtonTypes, string> = {
    secondary: "border-primary text-tetiary-700 bg-white hover:bg-secondary",
    primary: "border-button-primary bg-primary text-white hover:bg-[#6941C6]",
    tetiary: "border-[#D6BBFB] text-[#6941C6] hover:bg-[#F9F5FF]",
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "font-semibold flex items-center  gap-1  duration-200 ease-linear rounded-md py-[10px] px-[14px] ",
        buttonStyles[type],
        {
          "shadow-xs": children,
          border: withBorders,
        }
      )}
    >
      {icon} {children}
    </button>
  );
};

export default Button;
