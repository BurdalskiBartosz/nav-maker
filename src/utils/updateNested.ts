import type { TreeItem, TreeItems } from "@/types";

export function updateNested(
  data: TreeItem,
  myArray: TreeItems,
  id: string,
  edit?: boolean,
) {
  myArray?.forEach((element, i) => {
    if (element.id === id && edit) {
      myArray[i] = {
        ...element,
        name: data.name,
        link: data.link,
      };
      return;
    }

    if (element.id !== id) {
      if (element.children.length > 0) {
        updateNested(data, element.children, id, edit);
      }
    } else {
      element.children.push(data);
    }
  });
}
