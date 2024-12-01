import Button from "@/components/Button/Button";

type ActionsProps = {
  onRemove: () => void;
  onEdit: () => void;
  onAddNew: () => void;
};

const Actions = ({ onRemove, onEdit, onAddNew }: ActionsProps) => {
  return (
    <div className="flex rounded-lg">
      <Button
        className="rounded-none rounded-s-lg"
        type="secondary"
        handleClick={onRemove}
      >
        Usuń
      </Button>
      <Button
        className="-ml-px rounded-none"
        type="secondary"
        handleClick={onEdit}
      >
        Edytuj
      </Button>
      <Button
        className="-ml-px rounded-none rounded-e-lg"
        type="secondary"
        handleClick={onAddNew}
      >
        Dodaj pozycję menu
      </Button>
    </div>
  );
};

export default Actions;
