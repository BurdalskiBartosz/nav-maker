import { PropsWithChildren } from "react";

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-6xl font-semibold text-tetiary-600">{children}</h1>
  );
};

export default Title;
