import React from "react";
import { useDraggable } from "@dnd-kit/core";

export function Draggable({ children, name }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: name,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <li ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </li>
  );
}
export default Draggable;
