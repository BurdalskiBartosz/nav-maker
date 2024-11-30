import Button from "@/components/Button/Button";
import PlusIcon from "@/components/Icons/PlusIcon/PlusIcon";

type EmptyStateProps = {
  handleClick: () => void;
};

const EmptyState = ({ handleClick }: EmptyStateProps) => {
  return (
    <div className="rounded-md py-6 px-4 flex flex-col items-center bg-secondary  border border-secondary">
      <div className="mb-6 text-center">
        <p className="font-semibold text-primary-900">Menu jest puste</p>
        <p className="text-sm text-tetiary-600">
          W tym menu nie ma jeszcze żadnych linków.
        </p>
      </div>
      <Button type="primary" handleClick={handleClick} icon={<PlusIcon />}>
        Dodaj pozycję menu
      </Button>
    </div>
  );
};

export default EmptyState;
