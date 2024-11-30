import Button from "@/components/Button/Button";
import PlusIcon from "@/components/Icons/PlusIcon/PlusIcon";

type EmptyStateInfoBoxProps = {
  handleClick?: () => void;
  title: string;
  subtitle?: string;
  buttonLabel: string;
  href?: string;
};

const EmptyStateInfoBox = ({
  handleClick,
  title,
  subtitle,
  buttonLabel,
  href,
}: EmptyStateInfoBoxProps) => {
  return (
    <div className="flex flex-col items-center rounded-md border border-secondary bg-secondary px-4 py-6">
      <div className="mb-6 text-center">
        <p className="font-semibold text-primary-900">{title}</p>
        {subtitle && <p className="text-sm text-tetiary-600">{subtitle}</p>}
      </div>
      <Button
        type="primary"
        href={href}
        handleClick={handleClick}
        icon={<PlusIcon />}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};

export default EmptyStateInfoBox;
