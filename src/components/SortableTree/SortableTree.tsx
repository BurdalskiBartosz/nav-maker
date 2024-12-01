"use client";
import React from "react";
import { createPortal } from "react-dom";
import {
  DndContext,
  closestCenter,
  DragOverlay,
  MeasuringStrategy,
} from "@dnd-kit/core";
import { getChildCount } from "@/utils/dnd";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableTreeItem } from "./_components";
import { useMounted } from "@/hooks/useMounted";
import Button from "../Button/Button";
import AddNavElementForm from "../AddNavElementForm/AddNavElementForm";
import { useShowForm } from "@/hooks/useShowForm";
import { TreeItem, TreeItems } from "@/types";
import { useDnd } from "@/hooks/useDnd";

const measuring = {
  droppable: {
    strategy: MeasuringStrategy.Always,
  },
};

type SortableTreeProps = {
  navData: TreeItems;
  indentationWidth?: number;
  handleNavLinkSubmit: (data: TreeItem) => void;
  updateNav: (data: TreeItems) => void;
};

export function SortableTree({
  navData,
  indentationWidth = 64,
  handleNavLinkSubmit,
  updateNav,
}: SortableTreeProps) {
  const mounted = useMounted();
  const { showForm, handleShowForm, handleHideForm } = useShowForm();

  const {
    handleDragStart,
    handleDragMove,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
    handleRemove,
    activeId,
    flattenedItems,
    projected,
    sortedIds,
    activeItem,
  } = useDnd(navData, indentationWidth, updateNav);

  if (!mounted) return null;

  const portal = document.querySelector("#portal")!;
  return (
    <DndContext
      collisionDetection={closestCenter}
      measuring={measuring}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={sortedIds} strategy={verticalListSortingStrategy}>
        <div className="overflow-hidden rounded-lg border border-[#dedede] bg-[#F9FAFB]">
          {flattenedItems.map(({ id, depth, name, link }) => (
            <SortableTreeItem
              key={id}
              id={id}
              value={{ name, link }}
              depth={id === activeId && projected ? projected.depth : depth}
              indentationWidth={indentationWidth}
              onRemove={() => handleRemove(id)}
              handleNavLinkSubmit={handleNavLinkSubmit}
            />
          ))}
          {createPortal(
            <DragOverlay>
              {activeId && activeItem ? (
                <SortableTreeItem
                  id={activeId}
                  depth={0}
                  clone
                  childCount={getChildCount(navData, activeId) + 1}
                  value={{ name: activeItem.name, link: activeItem.link }}
                  indentationWidth={indentationWidth}
                />
              ) : null}
            </DragOverlay>,
            portal,
          )}
          {showForm && (
            <div className="px-6 py-4">
              <AddNavElementForm
                handleCancel={handleHideForm}
                handleNavLinkSubmit={handleNavLinkSubmit}
              />
            </div>
          )}
          <div className="bg-white px-6 py-5">
            <Button handleClick={handleShowForm} type="secondary">
              Dodaj pozycję menu
            </Button>
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
}
