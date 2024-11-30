import { PropsWithChildren } from "react";
import Button from "../Button/Button";
import Title from "../Title/Title";

type TitleBarWithButtonProps = {
  buttonLabel: string;
  href: string;
};

const TitleBarWithButton = ({
  children,
  buttonLabel,
  href,
}: PropsWithChildren<TitleBarWithButtonProps>) => {
  return (
    <div className="mb-10 flex items-center justify-between">
      <Title>{children}</Title>
      <Button href={href} type="primary">
        {buttonLabel}
      </Button>
    </div>
  );
};

export default TitleBarWithButton;
