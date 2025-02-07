import React from "react";
import { useDraggable } from "@dnd-kit/core";

export function Draggable({ background, textContent, image, name }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: name,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  console.log(name);

  return (
    <li ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <div className="card" style={{ background }}>
        <div className="play">
          <div className="main">{textContent}</div>
          <div className="name">{name}</div>
        </div>
        <div className="photo">
          <img src={image} alt={name} />
        </div>
      </div>
    </li>
  );
}
export default Draggable;
