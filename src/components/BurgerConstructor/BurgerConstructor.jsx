import React from "react"; // импорт библиотеки
import { useState } from "react";
import { useDrop } from "react-dnd";
import { useCallback } from "react";
import styles from "./BurgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DATA } from "../../data";
import { ListItem } from "../ListItem/ListItem";

export const BurgerConstructor = () => {
  // const [basket, setBasket] = useState(DATA);
  const [basket, setBasket] = useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "item",
    drop: (item, monitor) => {
      // console.log("basket", basket.length);
      // console.log("item", item.name);
      // console.log("item", item);
      if (basket.length === 0 && item.type === "bun") {
        setBasket((basket) =>
          !basket.includes(item) ? [...basket, item] : basket
        );
      } else if (basket.length > 0 && item.type != "bun") {
        if (basket.filter((e) => e._id === item._id).length === 0) {
          setBasket((basket) =>
            !basket.includes(item) ? [...basket, item] : basket
          );
        }
      }
      // if (basket.filter((e) => e._id === item._id).length === 0) {
      //   setBasket((basket) =>
      //     !basket.includes(item) ? [...basket, item] : basket
      //   );
      // }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const moveListItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = basket[dragIndex + 1];
      const hoverItem = basket[hoverIndex + 1];
      // console.log("dragItem", dragItem.name);
      // console.log("hoverItem", hoverItem.name);
      setBasket((basket) => {
        const updatedListItems = [...basket];
        updatedListItems[dragIndex + 1] = hoverItem;
        updatedListItems[hoverIndex + 1] = dragItem;
        return updatedListItems;
      });
    },
    [basket]
  );

  const ListItems = () => {
    // let newArray = DATA.slice(1, DATA.length - 1);
    let newArray = basket.slice(1, DATA.length - 1);
    return (
      <ul
        className={styles.constructorWindow}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        ref={dropRef}
      >
        {newArray.map((item, index) => (
          <ListItem
            itemType={"listItem"}
            type={item.type}
            key={item._id}
            _id={item._id}
            name={item.name}
            index={index}
            image={item.image}
            price={item.price}
            moveListItem={moveListItem}
          />
        ))}
      </ul>
    );
  };

  const TopItem = () => {
    if (basket.length > 0) {
      return (
        <div className={styles.topItem}>
          <ConstructorElement
            key={basket[0]._id}
            type={"top"}
            isLocked={true}
            text={basket[0].name + " (верх)"}
            price={basket[0].price}
            thumbnail={basket[0].image}
          />
        </div>
      );
    }
  };

  const BotttomItem = () => {
    if (basket.length > 0) {
      return (
        <div className={styles.topItem}>
          <ConstructorElement
            key={basket[0]._id}
            type={"bottom"}
            isLocked={true}
            text={basket[0].name + " (низ)"}
            price={basket[0].price}
            thumbnail={basket[0].image}
          />
        </div>
      );
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.border}>
        <TopItem />
        <ListItems />
        <BotttomItem />
      </div>
      <div className={styles.orderDetails}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

//

// import React from "react"; // импорт библиотеки
// import styles from "./BurgerConstructor.module.css";
// import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
// import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
// import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
// import { DATA } from "../../data";

// class BurgerConstructor extends React.Component {
//   topItem() {
//     return (
//       <div className={styles.topItem}>
//         <ConstructorElement
//           key={DATA[0]._id}
//           type={"top"}
//           isLocked={true}
//           text={DATA[0].name}
//           price={DATA[0].price}
//           thumbnail={DATA[0].image}
//         />
//       </div>
//     );
//   }

//   // listItems() {
//   //   let newArray = DATA.slice(1, DATA.length - 1);
//   //   // console.log(newArray);
//   //   return newArray.map((d) => (
//   //     <div
//   //       className={styles.constructorWindow}
//   //       style={{ display: "flex", flexDirection: "column", gap: "16px" }}
//   //     >
//   //       <ConstructorElement
//   //         key={d._id}
//   //         // type={"main"}
//   //         isLocked={false}
//   //         text={d.name}
//   //         price={d.price}
//   //         thumbnail={d.image}
//   //       />
//   //     </div>
//   //   ));
//   // }

//   listItems() {
//     let newArray = DATA.slice(1, DATA.length - 1);
//     return (
//       <ul
//         className={styles.constructorWindow}
//         style={{ display: "flex", flexDirection: "column", gap: "16px" }}
//       >
//         {newArray.map((d) => (
//           <ConstructorElement
//             key={d._id}
//             // type={"main"}
//             isLocked={false}
//             text={d.name}
//             price={d.price}
//             thumbnail={d.image}
//           />
//         ))}
//       </ul>
//     );
//   }

//   botttomItem() {
//     return (
//       <div className={styles.topItem}>
//         <ConstructorElement
//           key={DATA[DATA.length - 1]._id}
//           type={"bottom"}
//           isLocked={true}
//           text={DATA[DATA.length - 1].name}
//           price={DATA[DATA.length - 1].price}
//           thumbnail={DATA[DATA.length - 1].image}
//         />
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className={styles.border}>
//           <this.topItem />
//           <this.listItems />
//           <this.botttomItem />
//         </div>
//         <div className={styles.orderDetails}>
//           <div className={styles.price}>
//             <p className="text text_type_digits-medium">610</p>
//             <CurrencyIcon type="primary" />
//           </div>
//           <Button type="primary" size="large">
//             Оформить заказ
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }

// export default BurgerConstructor;
