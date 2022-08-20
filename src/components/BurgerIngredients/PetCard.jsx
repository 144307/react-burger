import React from "react";
import { useDrag } from "react-dnd";

export const PetCard = ({ id, name }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div className="pet-card" ref={dragRef}>
      {name}
      {isDragging && "😱"}
    </div>
  );
};
