import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";

import styles from "./ListItem.module.css";

export const ListItem = ({ index, _id, name, moveListItem }) => {
  const firstRef = useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: { _id, name, index },

    // collect: (monitor) => ({
    //   isDragging: monitor.isDragging(),
    // }),
  });

  const [spec, dropRef] = useDrop({
    accept: "item",
    drop: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      moveListItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDropRef = dragRef(dropRef(ref));

  const opacity = isDragging ? 0 : 1;
  return (
    <div className={styles.ListItem} ref={dragDropRef} style={{ opacity }}>
      {name}
    </div>
  );
};
