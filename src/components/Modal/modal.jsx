import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./modal.module.css";

import done from "../../images/done.svg";
import close from "../../images/close.svg";
import testImage from "../../images/bun-02-large.png";

export const Modal = ({ data, closeFunc, onClick }) => {
  // const [dataNew, setOpen] = useState(data);

  // return (
  //   <div className={styles.box}>
  //     <div className={styles.titleGroup}>
  //       <div></div>
  //       <div
  //         className={styles.closeButton}
  //         style={{ backgroundImage: `url(${close})` }}
  //         onClick={closeFunc}
  //       ></div>
  //     </div>
  //     <div className={styles.numbers}>034536</div>
  //     <div className={styles.numbersSubtitle}>subtitle</div>
  //     <img src={done} className={styles.done} />
  //     <div className={styles.subtitle1}>Ваш заказ начали готовить</div>
  //     <div className={styles.subtitle2}>
  //       Дождитесь готовности на орбитальной станции
  //     </div>
  //   </div>
  // );

  useEffect(() => {
    console.log("test data", data);
  });

  const test = () => {};

  return (
    <div className={styles.box}>
      <div className={styles.titleGroup}>
        <div className={styles.title}>Детали ингредиента</div>
        <div
          className={styles.closeButton}
          style={{ backgroundImage: `url(${close})` }}
          onClick={closeFunc}
        ></div>
      </div>
      <div
        className={styles.ingredientImage}
        style={{
          backgroundImage: `url(${testImage})`,
        }}
      ></div>
      <div className={styles.ingredientsTitle}>subtitle</div>
      <div className={styles.ingredients}>
        <div className={styles.ingredientsItem}>
          <div className={styles.ingredientsItemTitle}>Калории,ккал</div>
          <div className={styles.ingredientsItemSubtitle}>244,4</div>
        </div>
        <div className={styles.ingredientsItem}>
          <div className={styles.ingredientsItemTitle}>Калории</div>
          <div className={styles.ingredientsItemSubtitle}>244,4</div>
        </div>
        <div className={styles.ingredientsItem}>
          <div className={styles.ingredientsItemTitle}>Калории,ккал</div>
          <div className={styles.ingredientsItemSubtitle}>244,4</div>
        </div>
        <div className={styles.ingredientsItem}>
          <div className={styles.ingredientsItemTitle}>Калории</div>
          <div className={styles.ingredientsItemSubtitle}>244,4</div>
        </div>
      </div>
    </div>
  );
};
