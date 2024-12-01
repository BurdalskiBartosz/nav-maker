type ChildCountProps = {
  clone?: boolean;
  childCount?: number;
};

const ChildCount = ({ clone, childCount }: ChildCountProps) => {
  if (clone && childCount && childCount > 1) {
    return (
      <span className="absolute -right-2.5 -top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-400 text-sm font-semibold text-white">
        {childCount}
      </span>
    );
  }

  return null;
};

export default ChildCount;
