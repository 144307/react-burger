import React from "react";
// import { setSyntheticLeadingComments } from "typescript";
import styles from "./BurgerIngredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import { DATA } from "../../data";

// import { useCallback } from "react";
// import { useRef } from "react";
// import { useState } from "react";
// import { useDrop } from "react-dnd";

import { ListItem } from "../ListItem/ListItem";
// import { prettyDOM } from "@testing-library/react";

export const BurgerIngredients = ({ onClick }) => {
  const [current, setCurrent] = React.useState("one");

  return (
    <div className={styles.mainBox}>
      <div className={styles.tilte}>
        <div className="p-4">
          <p className="text text_type_main-large">Соберите бургер</p>
        </div>
        <div style={{ display: "flex" }}>
          {/* <Tab value="one" active={current === "one"} onClick={setCurrent}>
            One
          </Tab>
          <Tab value="two" active={current === "two"} onClick={setCurrent}>
            Two
          </Tab>
          <Tab value="three" active={current === "three"} onClick={setCurrent}>
            Three
          </Tab> */}
        </div>
      </div>
      <div className={styles.box}>
        <div className="m-2">
          <p className="text text_type_main-medium">Булки</p>
        </div>
        <ul className={styles.ingredients}>
          {DATA.filter((e) => e.type === "bun").map((item, index) => (
            <ListItem
              itemType={"gridItem"}
              type={item.type}
              key={item._id}
              _id={item._id}
              name={item.name}
              index={index}
              image={item.image}
              image_large={item.image_large}
              price={item.price}
              onClick={() => {
                onClick(item._id);
              }}
            />
          ))}
        </ul>
        <div className="m-2">
          <p className="text text_type_main-medium">Соусы</p>
        </div>
        <ul className={styles.ingredients}>
          {DATA.filter((e) => e.type === "sauce").map((item, index) => (
            <ListItem
              itemType={"gridItem"}
              type={item.type}
              key={item._id}
              _id={item._id}
              name={item.name}
              index={index}
              image={item.image}
              image_large={item.image_large}
              price={item.price}
              onClick={() => {
                onClick(item._id);
              }}
            />
          ))}
        </ul>
        <div className="m-2">
          <p className="text text_type_main-medium">Основное</p>
        </div>
        <ul className={styles.ingredients}>
          {DATA.filter((e) => e.type === "main").map((item, index) => (
            <ListItem
              itemType={"gridItem"}
              type={item.type}
              key={item._id}
              _id={item._id}
              name={item.name}
              index={index}
              image={item.image}
              image_large={item.image_large}
              price={item.price}
              onClick={() => {
                onClick(item._id);
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
