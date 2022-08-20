// import React, { useState, useCallback } from "react";
// // import { ListItem } from "./ListItem";
// import { ListItem } from "../ListItem/ListItem";
// import styles from "./BurgerIngredients.module.css";
// import { DATA } from "../../data";

// // import { useState } from "react";
// import { PetCard } from "./PetCard";
// import { useDrop } from "react-dnd";

// const PETS = [
//   { id: 1, name: "dog" },
//   { id: 2, name: "cat" },
//   { id: 3, name: "fish" },
//   { id: 4, name: "hamster" },
// ];

// export const BurgerIngredients = () => {
//   // const [pets, setPets] = useState(PETS);
//   const [basket, setBasket] = useState([]);
//   const [data, setPets] = useState(DATA);

//   const moveListItem = useCallback(
//     (dragIndex, hoverIndex) => {
//       const dragItem = data[dragIndex];
//       const hoverItem = data[hoverIndex];
//       // Swap places of dragItem and hoverItem in the pets array
//       setPets((data) => {
//         const updatedPets = [...data];
//         updatedPets[dragIndex] = hoverItem;
//         updatedPets[hoverIndex] = dragItem;
//         return updatedPets;
//       });
//     },
//     [data]
//   );

//   const [{ isOver }, dropRef] = useDrop({
//     accept: "item",
//     drop: (item) =>
//       setBasket((basket) =>
//         !basket.includes(item) ? [...basket, item] : basket
//       ),
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//     }),
//   });

//   return (
//     <>
//       <div className={styles.basket}>
//         {data.map((item, index) => (
//           <ListItem
//             key={item._id}
//             index={index}
//             text={item.name}
//             moveListItem={moveListItem}
//           />
//         ))}
//       </div>
//       <div className={styles.basket} ref={dropRef}>
//         {basket.map((item, index) => (
//           <ListItem
//             key={item._id}
//             index={index}
//             text={item.name}
//             moveListItem={moveListItem}
//           />
//         ))}
//         {isOver && <div>Drop Here!</div>}
//       </div>
//     </>
//   );
// };

//

return (
  <div className={styles.basket}>
    {data.map((pet, index) => (
      <ListItem
        key={pet._id}
        text={pet.name}
        index={index}
        moveListItem={moveListItem}
      />
    ))}
  </div>
);

import React from "react";
import { setSyntheticLeadingComments } from "typescript";
import styles from "./BurgerIngredients.module.css";

import { data } from "../../data";

import { useState } from "react";
import { PetCard } from "./PetCard";
import { useDrop } from "react-dnd";

import { ListItem } from "../ListItem/ListItem";

const PETS = [
  { id: 1, name: "dog" },
  { id: 2, name: "cat" },
  { id: 3, name: "fish" },
  { id: 4, name: "hamster" },
];

export const BurgerIngredients = () => {
  const [pets, setPets] = useState(PETS);
  const [basket, setBasket] = useState([]);

  const movePetListItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = pets[dragIndex];
      const hoverItem = pets[hoverIndex];
      // Swap places of dragItem and hoverItem in the pets array
      setPets((pets) => {
        const updatedPets = [...pets];
        updatedPets[dragIndex] = hoverItem;
        updatedPets[hoverIndex] = dragItem;
        return updatedPets;
      });
    },
    [pets]
  );

  const [{ isOver }, dropRef] = useDrop({
    accept: "item",
    drop: (item) =>
      setBasket((basket) =>
        !basket.includes(item) ? [...basket, item] : basket
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <React.Fragment>
      <div>
        {PETS.map((pet, index) => (
          <ListItem draggable id={pet.id} name={pet.name} index={index} />
        ))}
      </div>
      <div className={styles.basket} ref={dropRef}>
        {basket.map((pet, index) => (
          <ListItem
            id={pet.id}
            name={pet.name}
            index={index}
            // moveListItem={movePetListItem}
          />
        ))}
        {isOver && <div>Drop Here!</div>}
      </div>
    </React.Fragment>
  );
};

// export default BurgerIngredients;
