"use client";
import { type FormEvent, useState } from "react";
import AddNavElementForm from "@/components/AddNavElementForm/AddNavElementForm";
import type { TreeItem, TreeItems } from "@/types";
import { createNav } from "@/actions/navs";
import Button from "../Button/Button";
import EmptyStateInfoBox from "../EmptyStateInfoBox/EmptyStateInfoBox";
import SortableTree from "../SortableTree/SortableTree";
import { useShowForm } from "@/hooks/useShowForm";
import { updateNested } from "@/utils/updateNested";

type NavCreatorProps = {
  navData?: TreeItems;
  navId?: string;
};

const NavCreator = ({ navData, navId }: NavCreatorProps) => {
  const [nav, setNav] = useState<TreeItems>(navData ?? []);
  const { showForm, handleShowForm, handleHideForm } = useShowForm();

  const handleNavLinkSubmit = (data: TreeItem, id?: string, edit?: boolean) => {
    if (id) {
      const navs = [...nav];
      updateNested(data, navs, id, edit);
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
    await createNav(nav, navId);
  };

  if (nav.length === 0) {
    return (
      <>
        {showForm ? (
          <AddNavElementForm
            handleNavLinkSubmit={handleNavLinkSubmit}
            handleHideForm={handleHideForm}
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
