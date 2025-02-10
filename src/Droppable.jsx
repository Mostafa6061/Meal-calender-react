import React, { useEffect } from "react";
import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ id, drop }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (drop?.name && drop?.cell === id) {
      setName(drop.name);
    }
  }, [drop]);

  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <td ref={setNodeRef} style={style}>
      {name ? name : "-"}
    </td>
  );
}
