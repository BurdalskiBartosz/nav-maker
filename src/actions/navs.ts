"use server";
import { redirect } from "next/navigation";
import type { Nav, TreeItems } from "@/types";
import { revalidatePath } from "next/cache";

export async function createNav(items: TreeItems, id?: string) {
  await fetch("http://localhost:3000/api/nav", {
    method: "POST",
    body: JSON.stringify({ items, id }),
    next: { tags: ["nav"] },
  });
  redirect("/");
}

export async function deleteNav(id: string) {
  await fetch(`http://localhost:3000/api/nav/${id}`, {
    method: "DELETE",
    next: { tags: ["nav"] },
  });
  revalidatePath("/", "page");
}

export async function getNavs() {
  const response = await fetch("http://localhost:3000/api/nav", {
    next: { tags: ["nav"] },
  });
  const data = (await response.json()) as Nav[];

  return data;
}

export async function getNavById(id: string) {
  const response = await fetch(`http://localhost:3000/api/nav/${id}`, {
    next: { tags: ["nav"] },
  });
  const data = (await response.json()) as Nav;

  return data;
}
