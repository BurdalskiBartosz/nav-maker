import type { UniqueIdentifier } from "@dnd-kit/core";

export interface TreeItem {
  id: UniqueIdentifier;
  children: TreeItem[];
  name: string;
  link: string;
}

export type TreeItems = TreeItem[];

export type Navs = {
  id: string;
  items: TreeItems;
}[];