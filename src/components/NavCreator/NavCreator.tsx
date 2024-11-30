"use client";
import { FormEvent, useState } from "react";
import AddNavElementForm from "@/components/AddNavElementForm/AddNavElementForm";
import EmptyState from "./_components/EmptyState";
import { TreeItem, TreeItems } from "@/types";
import { createNav } from "@/actions/navs";
import Button from "../Button/Button";

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
        <EmptyState handleClick={handleShowForm} />
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
