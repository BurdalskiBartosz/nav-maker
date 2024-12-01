"use client";
import type { Nav, TreeItems } from "@/types";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { deleteNav } from "@/actions/navs";

type GoToNavigationProps = {
  data: Nav;
};

const GoToNavigation = ({ data }: GoToNavigationProps) => {
  const router = useRouter();
  const { id, items } = data;

  const getMenuItemsNames = (items: TreeItems) => {
    return items.map((el) => el.name).join("/");
  };

  const names = getMenuItemsNames(items);

  const handleClick = () => {
    router.push(`/navigation-creator/${id}`);
  };

  const handleDelete = async () => {
    await deleteNav(id);
  };

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer items-center justify-between rounded-lg border border-secondary px-4 py-6 duration-200 hover:bg-[#F9F5FF]"
    >
      <div>
        {id} - <span className="font-bold">{names}</span>
      </div>
      <div className="flex gap-4">
        <Button
          handleClick={(e) => {
            e.stopPropagation();
            handleDelete();
          }}
          type="primary"
        >
          Usuń
        </Button>
        <Button type="primary">Edytuj</Button>
      </div>
    </div>
  );
};

export default GoToNavigation;
