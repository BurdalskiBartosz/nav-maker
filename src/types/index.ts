import type { UniqueIdentifier } from "@dnd-kit/core";

export interface TreeItem {
  id: UniqueIdentifier;
  children: TreeItem[];
  name: string;
  link: string;
}

export type TreeItems = TreeItem[];

export type Nav = {
  id: string;
  items: TreeItems;
};

export type FlattenedItem = TreeItem & {
  parentId: UniqueIdentifier | null;
  depth: number;
  index: number;
};
