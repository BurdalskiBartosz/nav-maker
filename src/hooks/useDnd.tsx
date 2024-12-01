import {
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  buildTree,
  flattenTree,
  getProjection,
  removeChildrenOf,
  removeItem,
} from "@/utils/dnd";

import { arrayMove } from "@dnd-kit/sortable";
import { FlattenedItem, TreeItems } from "@/types";

export const useDnd = (
  navData: TreeItems,
  indentationWidth: number,
  updateNav: (data: TreeItems) => void,
) => {
  const updateNavRef = useRef(updateNav);

  useLayoutEffect(() => {
    updateNavRef.current = updateNav;
  });

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [overId, setOverId] = useState<UniqueIdentifier | null>(null);
  const [offsetLeft, setOffsetLeft] = useState(0);

  const flattenedItems = useMemo(() => {
    const flattenedTree = flattenTree(navData);

    return removeChildrenOf(flattenedTree, activeId ? [activeId] : []);
  }, [activeId, navData]);

  const projected =
    activeId && overId
      ? getProjection(
          flattenedItems,
          activeId,
          overId,
          offsetLeft,
          indentationWidth,
        )
      : null;

  const sortedIds = useMemo(
    () => flattenedItems.map(({ id }) => id),
    [flattenedItems],
  );
  const activeItem = activeId
    ? flattenedItems.find(({ id }) => id === activeId)
    : null;

  function handleDragStart({ active: { id: activeId } }: DragStartEvent) {
    setActiveId(activeId);
    setOverId(activeId);

    document.body.style.setProperty("cursor", "grabbing");
  }

  function handleDragMove({ delta }: DragMoveEvent) {
    setOffsetLeft(delta.x);
  }

  function handleDragOver({ over }: DragOverEvent) {
    setOverId(over?.id ?? null);
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    resetState();

    if (projected && over) {
      const { depth, parentId } = projected;
      const clonedItems: FlattenedItem[] = JSON.parse(
        JSON.stringify(flattenTree(navData)),
      );
      const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
      const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);
      const activeTreeItem = clonedItems[activeIndex];

      clonedItems[activeIndex] = { ...activeTreeItem, depth, parentId };

      const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);
      const newItems = buildTree(sortedItems);

      updateNavRef.current(newItems);
    }
  }

  function handleDragCancel() {
    resetState();
  }

  function resetState() {
    setOverId(null);
    setActiveId(null);
    setOffsetLeft(0);

    document.body.style.setProperty("cursor", "");
  }

  function handleRemove(id: UniqueIdentifier) {
    const newItems = removeItem(navData, id);
    updateNavRef.current(newItems);
  }

  return {
    handleDragStart,
    handleDragMove,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
    handleRemove,
    navData,
    activeId,
    overId,
    offsetLeft,
    flattenedItems,
    projected,
    sortedIds,
    activeItem,
  };
};
