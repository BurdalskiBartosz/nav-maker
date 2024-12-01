"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TrashIcon from "../Icons/TrashIcon/TrashIcon";
import { TreeItem } from "@/types";
import { generateId } from "@/utils/generateId";
import type { UniqueIdentifier } from "@dnd-kit/core";

type AddNavElementFormProps = {
  elementId?: UniqueIdentifier;
  defaultValues?: z.infer<typeof navItemSchema>;
  handleHideForm: () => void;
  handleNavLinkSubmit: (data: TreeItem, id?: string, edit?: boolean) => void;
};

const navItemSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  link: z.string().min(1, { message: "Link is required" }),
});

const AddNavElementForm = ({
  elementId,
  defaultValues,
  handleHideForm,
  handleNavLinkSubmit,
}: AddNavElementFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof navItemSchema>>({
    resolver: zodResolver(navItemSchema),
    defaultValues,
  });

  function onSubmit({ name, link }: { name: string; link: string }) {
    const navData = {
      id: generateId(),
      name,
      link,
      children: [],
    };

    handleNavLinkSubmit(
      navData,
      elementId as string | undefined,
      !!defaultValues,
    );
    handleHideForm();
  }

  return (
    <div className="flex items-start gap-x-4 rounded-lg border border-primary bg-white px-6 py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-grow flex-col gap-y-5"
      >
        <div className="flex flex-col gap-y-2">
          <Input
            id="name"
            label="Nazwa"
            placeholder="np. Promocje"
            {...register("name")}
            error={errors?.name?.message}
          />
          <Input
            id="link"
            label="Link"
            placeholder="Wklej lub wyszukaj"
            {...register("link")}
            error={errors?.link?.message}
          />
        </div>
        <div className="flex gap-x-2">
          <Button type="secondary" handleClick={handleHideForm}>
            Anuluj
          </Button>
          <Button type="tetiary">{defaultValues ? "Zapisz" : "Dodaj"}</Button>
        </div>
      </form>
      <Button
        type="secondary"
        withBorders={false}
        handleClick={() => {}}
        icon={<TrashIcon />}
      />
    </div>
  );
};

export default AddNavElementForm;
