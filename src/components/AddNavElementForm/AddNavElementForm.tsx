"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TrashIcon from "../Icons/TrashIcon/TrashIcon";
import { TreeItem } from "@/types";
import { generateId } from "@/utils/generateId";

type AddNavElementFormProps = {
  handleCancel: () => void;
  handleNavSubmit: (data: TreeItem) => void;
};

const navItemSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  link: z.string().min(1, { message: "Link is required" }),
});

const AddNavElementForm = ({
  handleCancel,
  handleNavSubmit,
}: AddNavElementFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof navItemSchema>>({
    resolver: zodResolver(navItemSchema),
  });

  function onSubmit({ name, link }: { name: string; link: string }) {
    const navData = {
      id: generateId(),
      name,
      link,
      children: [],
    };

    handleNavSubmit(navData);
  }

  return (
    <div className="flex items-start gap-x-4 rounded-md border border-primary px-6 py-5">
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
          <Button type="secondary" handleClick={handleCancel}>
            Anuluj
          </Button>
          <Button type="tetiary" handleClick={() => {}}>
            Dodaj
          </Button>
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
