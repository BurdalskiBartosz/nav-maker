"use server";

import { Nav, TreeItems } from "@/types";
import { redirect } from "next/navigation";

export async function createNav(items: TreeItems, id?: string) {
  await fetch("http://localhost:3000/api/nav", {
    method: "POST",
    body: JSON.stringify({ items, id }),
    next: { tags: ["nav"] },
  });
  redirect("/");
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
