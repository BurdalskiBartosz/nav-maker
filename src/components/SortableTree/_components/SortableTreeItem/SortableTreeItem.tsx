import React, { type CSSProperties, useState } from "react";
import type { UniqueIdentifier } from "@dnd-kit/core";
import { AnimateLayoutChanges, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import cn from "classnames";
import Actions from "../Actions/Actions";
import Handle from "../Handle/Handle";
import { TreeItem } from "@/types";
import { useShowForm } from "@/hooks/useShowForm";
import AddNavElementForm from "@/components/AddNavElementForm/AddNavElementForm";
import ChildCount from "../ChildCount/ChildCount";

export type SortableTreeItemProps = {
  id: UniqueIdentifier;
  childCount?: number;
  clone?: boolean;
  depth: number;
  indentationWidth: number;
  value: {
    name: string;
    link: string;
  };
  onRemove?: () => void;
  handleNavLinkSubmit?: (data: TreeItem, id?: string) => void;
};

const animateLayoutChanges: AnimateLayoutChanges = ({
  isSorting,
  wasDragging,
}) => (isSorting || wasDragging ? false : true);

export function SortableTreeItem({
  id,
  depth,
  indentationWidth = 64,
  onRemove,
  clone,
  childCount,
  value,
  handleNavLinkSubmit,
}: SortableTreeItemProps) {
  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    setDraggableNodeRef,
    setDroppableNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
    animateLayoutChanges,
  });
  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  const { showForm, handleShowForm, handleHideForm } = useShowForm();
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
    handleShowForm();
  };

  return (
    <li
      className={cn("list-none", {
        "pointer-events-none inline-block p-0 pl-2.5 pt-[5px]": clone,
        "opacity-50": isDragging,
        "pointer-events-none": isSorting,
      })}
      ref={setDroppableNodeRef}
      style={{
        paddingLeft: `${indentationWidth * depth}px`,
      }}
    >
      <div
        className={cn(
          "relative -mt-px flex items-center border-b border-t border-secondary bg-white px-6 py-4 text-[#222]",
          { "shadow-tree rounded pr-6": clone },
          { "rounded-es-md border-l": depth },
        )}
        ref={setDraggableNodeRef}
        style={style}
      >
        <Handle {...attributes} {...listeners} />

        <div className="flex flex-grow flex-col gap-y-1.5 overflow-hidden text-ellipsis whitespace-nowrap pl-2 text-sm">
          <span className="font-semibold text-primary-900">{value.name}</span>
          <span className="text-tetiary-600">{value.link}</span>
        </div>
        {!clone && (
          <Actions
            onRemove={onRemove}
            onEdit={handleEdit}
            onAddNew={handleShowForm}
          />
        )}
        <ChildCount clone={clone} childCount={childCount} />
      </div>
      {handleNavLinkSubmit && showForm && (
        <div
          className="px-6 py-4"
          style={{
            paddingLeft: `${depth ? indentationWidth * depth : indentationWidth}px`,
          }}
        >
          <AddNavElementForm
            handleNavLinkSubmit={handleNavLinkSubmit}
            handleHideForm={handleHideForm}
            defaultValues={isEdit ? value : undefined}
            elementId={id}
            onRemove={onRemove}
          />
        </div>
      )}
    </li>
  );
}
