import React from "react";
import { setSyntheticLeadingComments } from "typescript";
import styles from "./BurgerIngredients.module.css";

import { DATA } from "../../data";

import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";
import { PetCard } from "./PetCard";
import { useDrop } from "react-dnd";

import { ListItem } from "../ListItem/ListItem";

const PETS = [
  { _id: 1, name: "dog" },
  { _id: 2, name: "cat" },
  { _id: 3, name: "fish" },
  { _id: 4, name: "hamster" },
];

// class BurgerIngredients extends React.Component {
//   render() {
//     return <div className={styles.box}></div>;
//   }
// }

// export default BurgerIngredients;

export const BurgerIngredients = () => {
  const [basket, setBasket] = useState([]);

  const [{ isOver }, dropRef] = useDrop({
    accept: "item",
    drop: (item, monitor) => {
      console.log("dropping");
      console.log(item.name);

      if (basket.filter((e) => e._id === item._id).length === 0) {
        setBasket((basket) =>
          !basket.includes(item) ? [...basket, item] : basket
        );
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const moveListItem = useCallback(
    (dragIndex, hoverIndex) => {
      console.log("-==-");
      const dragItem = basket[dragIndex];
      const hoverItem = basket[hoverIndex];
      console.log(dragIndex);
      console.log(hoverIndex);
      // Swap places of dragItem and hoverItem in the pets array
      setBasket((basket) => {
        const updatedPets = [...basket];
        updatedPets[dragIndex] = hoverItem;
        updatedPets[hoverIndex] = dragItem;
        return updatedPets;
      });
    },
    [basket]
  );

  return (
    <React.Fragment>
      <div>
        {DATA.map((pet, index) => (
          <ListItem
            draggable
            key={pet._id}
            _id={pet._id}
            name={pet.name}
            index={index}
          />
        ))}
      </div>
      <div className={styles.basket} ref={dropRef}>
        {basket.map((pet, index) => (
          <ListItem
            key={pet._id}
            _id={pet._id}
            name={pet.name}
            index={index}
            moveListItem={moveListItem}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
