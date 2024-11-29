"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TrashIcon from "../Icons/TrashIcon/TrashIcon";

type AddNavElementFormProps = {
  handleCancel: () => void;
};

const navItemSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  link: z.string().min(1, { message: "Link is required" }),
});

const AddNavElementForm = ({ handleCancel }: AddNavElementFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof navItemSchema>>({
    resolver: zodResolver(navItemSchema),
  });

  async function onSubmit(data: { name: string; link: string }) {
    console.log(data);
  }

  return (
    <div className="py-5 flex items-start gap-x-4 px-6 border border-primary rounded-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-grow gap-y-5"
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
