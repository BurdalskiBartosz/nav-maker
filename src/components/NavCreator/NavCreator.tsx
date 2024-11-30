"use client";
import { FormEvent, useState } from "react";
import AddNavElementForm from "@/components/AddNavElementForm/AddNavElementForm";
import { TreeItem, TreeItems } from "@/types";
import { createNav } from "@/actions/navs";
import Button from "../Button/Button";
import EmptyStateInfoBox from "../EmptyStateInfoBox/EmptyStateInfoBox";

const NavCreator = () => {
  const [showForm, setShowForm] = useState(false);
  const [nav, setNav] = useState<TreeItems>([]);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleNavSubmit = (data: TreeItem) => {
    setNav([...nav, data]);
  };

  const handleSumbit = async (
    event: FormEvent<HTMLFormElement | HTMLButtonElement>,
  ) => {
    event.preventDefault();
    await createNav(nav);
  };

  return (
    <>
      {showForm ? (
        <AddNavElementForm
          handleNavSubmit={handleNavSubmit}
          handleCancel={handleCancel}
        />
      ) : (
        <EmptyStateInfoBox
          title="Menu jest puste"
          subtitle="W tym menu nie ma jeszcze żadnych linków."
          buttonLabel="Dodaj pozycję menu"
          handleClick={handleShowForm}
        />
      )}
      {!!nav.length && (
        <div>
          <form onSubmit={handleSumbit}>
            <Button>Dodaj</Button>
          </form>
        </div>
      )}
    </>
  );
};

export default NavCreator;
