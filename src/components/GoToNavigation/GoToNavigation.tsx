import { Nav, TreeItems } from "@/types";
import Link from "next/link";
import Button from "../Button/Button";

type GoToNavigationProps = {
  data: Nav;
};

const GoToNavigation = ({ data }: GoToNavigationProps) => {
  const { id, items } = data;

  const getMenuItemsNames = (items: TreeItems) => {
    return items.map((el) => el.name).join("/");
  };

  const names = getMenuItemsNames(items);

  return (
    <Link
      href={`/navigation-creator/${id}`}
      className="flex items-center justify-between rounded-md border border-secondary px-4 py-6 duration-200 hover:bg-[#F9F5FF]"
    >
      <div>
        {id} - <span className="font-bold">{names}</span>
      </div>
      <Button type="primary">Edytuj</Button>
    </Link>
  );
};

export default GoToNavigation;
