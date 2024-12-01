"use client";
import { FormEvent, useState } from "react";
import AddNavElementForm from "@/components/AddNavElementForm/AddNavElementForm";
import { TreeItem, TreeItems } from "@/types";
import { createNav } from "@/actions/navs";
import Button from "../Button/Button";
import EmptyStateInfoBox from "../EmptyStateInfoBox/EmptyStateInfoBox";
import { SortableTree } from "../SortableTree/SortableTree";
import { useShowForm } from "@/hooks/useShowForm";

type NavCreatorProps = {
  navData?: TreeItems;
  id?: string;
};

function findNested(
  data: TreeItem,
  myArray: TreeItems,
  id: string,
  edit?: boolean,
) {
  myArray?.forEach((element, i) => {
    if (element.id !== id) {
      if (element.children.length > 0) {
        findNested(data, element.children, id);
      }
    } else {
      if (edit) {
        myArray[i] = {
          ...element,
          name: data.name,
          link: data.link,
        };
        return;
      }
      element.children.push(data);
    }
  });
}

const NavCreator = ({ navData, id }: NavCreatorProps) => {
  const [nav, setNav] = useState<TreeItems>(navData ?? []);
  const { showForm, handleShowForm, handleHideForm } = useShowForm();

  const handleNavLinkSubmit = (data: TreeItem, id?: string, edit?: boolean) => {
    if (id) {
      const navs = [...nav];
      findNested(data, navs, id, edit);
      setNav([...navs]);
    } else {
      setNav([...nav, data]);
    }
  };

  const updateNav = (data: TreeItems) => {
    setNav(data);
  };

  const handleSumbit = async (
    event: FormEvent<HTMLFormElement | HTMLButtonElement>,
  ) => {
    event.preventDefault();
    await createNav(nav, id);
  };

  if (nav.length === 0) {
    return (
      <>
        {showForm ? (
          <AddNavElementForm
            handleNavLinkSubmit={handleNavLinkSubmit}
            handleCancel={handleHideForm}
          />
        ) : (
          <EmptyStateInfoBox
            title="Menu jest puste"
            subtitle="W tym menu nie ma jeszcze żadnych linków."
            buttonLabel="Dodaj pozycję menu"
            handleClick={handleShowForm}
          />
        )}
      </>
    );
  }
  return (
    <>
      <SortableTree
        handleNavLinkSubmit={handleNavLinkSubmit}
        updateNav={updateNav}
        navData={nav}
      />

      {!!nav.length && (
        <div className="mt-10 flex justify-end">
          <form onSubmit={handleSumbit}>
            <Button>Zapisz</Button>
          </form>
        </div>
      )}
    </>
  );
};

export default NavCreator;
