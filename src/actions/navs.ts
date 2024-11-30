"use server";

import { Nav, TreeItems } from "@/types";
import { redirect } from "next/navigation";

export async function createNav(items: TreeItems) {
  await fetch("http://localhost:3000/api/nav", {
    method: "POST",
    body: JSON.stringify(items),
    next: { tags: ["nav"] },
  });
  redirect("/");
}

export async function getNavs() {
  const res = await fetch("http://localhost:3000/api/nav", {
    next: { tags: ["nav"] },
  });
  const data = (await res.json()) as Nav[];

  return data;
}
