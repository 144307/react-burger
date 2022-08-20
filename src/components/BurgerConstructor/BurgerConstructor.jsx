import React from "react"; // импорт библиотеки
import styles from "./BurgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DATA } from "../../data";

class BurgerConstructor extends React.Component {
  topItem() {
    return (
      <ConstructorElement
        key={DATA[0]._id}
        type={"top"}
        isLocked={true}
        text={DATA[0].name}
        price={DATA[0].price}
        thumbnail={DATA[0].image}
      />
    );
  }

  botttomItem() {
    return (
      <ConstructorElement
        key={DATA[DATA.length - 1]._id}
        type={"bottom"}
        isLocked={true}
        text={DATA[DATA.length - 1].name}
        price={DATA[DATA.length - 1].price}
        thumbnail={DATA[DATA.length - 1].image}
      />
    );
  }

  listItems() {
    let newArray = DATA.slice(1, DATA.length - 1);
    // console.log(newArray);
    return newArray.map((d) => (
      <ConstructorElement
        key={d._id}
        type={d.type}
        isLocked={false}
        text={d.name}
        price={d.price}
        thumbnail={d.image}
      />
    ));
  }

  render() {
    return (
      <>
        <div>
          <div className={styles.border}>
            {/* <this.topItem /> */}
            <div className={styles.topItem}>
              <this.topItem />
            </div>
            <div
              className={styles.constructorWindow}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <this.listItems />
            </div>
            <div className={styles.topItem}>
              <this.botttomItem />
            </div>
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
      </>
    );
  }
}

export default BurgerConstructor;
