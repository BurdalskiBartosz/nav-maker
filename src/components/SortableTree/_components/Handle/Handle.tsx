import React, { CSSProperties } from "react";

import MoveIcon from "@/components/Icons/MoveIcon/MoveIcon";

export type HandleProps = {
  cursor?: CSSProperties["cursor"];
} & React.HTMLAttributes<HTMLButtonElement>;

const Handle = (props: HandleProps) => {
  return (
    <button
      {...props}
      className="cursor-grab rounded-lg p-2.5 text-tetiary-600 duration-200 hover:bg-secondary"
      tabIndex={0}
    >
      <MoveIcon />
    </button>
  );
};

export default Handle;
