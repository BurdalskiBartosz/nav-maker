import { PropsWithChildren, ReactNode } from "react";
import cn from "classnames";
import Link from "next/link";

type ButtonTypes = "primary" | "secondary" | "tetiary";

type ButtonProps = {
  handleClick?: () => void;
  type?: ButtonTypes;
  icon?: ReactNode;
  withBorders?: boolean;
  href?: string;
  className?: string;
};

const Button = ({
  children,
  handleClick,
  type = "tetiary",
  icon,
  withBorders = true,
  className,
  href,
}: PropsWithChildren<ButtonProps>) => {
  const buttonStyles: Record<ButtonTypes, string> = {
    secondary: "border-primary text-tetiary-700 bg-white hover:bg-secondary",
    primary: "border-button-primary bg-primary text-white hover:bg-[#6941C6]",
    tetiary: "border-[#D6BBFB] text-[#6941C6] hover:bg-[#F9F5FF]",
  };

  const props = {
    className: cn(
      "flex items-center gap-1 rounded-lg px-3.5 py-2.5 font-semibold duration-200 ease-linear",
      buttonStyles[type],
      {
        "shadow-xs": children,
        border: withBorders,
      },
      className,
    ),
  };

  return href ? (
    <Link href={href} {...props}>
      {icon} {children}
    </Link>
  ) : (
    <button onClick={handleClick} {...props}>
      {icon} {children}
    </button>
  );
};

export default Button;
