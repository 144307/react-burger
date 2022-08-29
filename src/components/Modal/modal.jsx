import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./modal.module.css";

import done from "../../images/done.svg";
import close from "../../images/close.svg";
import testImage from "../../images/bun-02-large.png";

export const Modal = ({ data, closeFunc, CurrentModalOverlay }) => {
  // const [dataNew, setOpen] = useState(data);

  useEffect(() => {
    console.log("test data", data);
  });
  // useEffect();

  // true - ingredients, false - order
  if (CurrentModalOverlay) {
    // ingrediets
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
            backgroundImage: `url(${data.image_large})`,
          }}
        ></div>
        <div className={styles.ingredientsTitle}>{data.name}</div>
        <div className={styles.ingredients}>
          <div className={styles.ingredientsItem}>
            <div className={styles.ingredientsItemTitle}>Калории,ккал</div>
            <div className={styles.ingredientsItemSubtitle}>
              {data.calories}
            </div>
          </div>
          <div className={styles.ingredientsItem}>
            <div className={styles.ingredientsItemTitle}>Белки, г</div>
            <div className={styles.ingredientsItemSubtitle}>
              {data.proteins}
            </div>
          </div>
          <div className={styles.ingredientsItem}>
            <div className={styles.ingredientsItemTitle}>Жиры, г</div>
            <div className={styles.ingredientsItemSubtitle}>{data.fat}</div>
          </div>
          <div className={styles.ingredientsItem}>
            <div className={styles.ingredientsItemTitle}>Углеводы, г</div>
            <div className={styles.ingredientsItemSubtitle}>
              {data.carbohydrates}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // order details

    return (
      <div className={styles.box}>
        <div className={styles.titleGroup}>
          <div></div>
          <div
            className={styles.closeButton}
            style={{ backgroundImage: `url(${close})` }}
            onClick={closeFunc}
          ></div>
        </div>
        <div className={styles.numbers}>034536</div>
        <div className={styles.numbersSubtitle}>идентификатор заказа</div>
        <img src={done} className={styles.done} />
        <div className={styles.subtitle1}>Ваш заказ начали готовить</div>
        <div className={styles.subtitle2}>
          Дождитесь готовности на орбитальной станции
        </div>
      </div>
    );
  }
  // return (
  //   <div className={styles.box}>
  //     <div className={styles.titleGroup}>
  //       <div className={styles.title}>Детали ингредиента</div>
  //       <div
  //         className={styles.closeButton}
  //         style={{ backgroundImage: `url(${close})` }}
  //         onClick={closeFunc}
  //       ></div>
  //     </div>
  //     <div
  //       className={styles.ingredientImage}
  //       style={{
  //         backgroundImage: `url(${testImage})`,
  //       }}
  //     ></div>
  //     <div className={styles.ingredientsTitle}>subtitle</div>
  //     <div className={styles.ingredients}>
  //       <div className={styles.ingredientsItem}>
  //         <div className={styles.ingredientsItemTitle}>Калории,ккал</div>
  //         <div className={styles.ingredientsItemSubtitle}>244,4</div>
  //       </div>
  //       <div className={styles.ingredientsItem}>
  //         <div className={styles.ingredientsItemTitle}>Калории</div>
  //         <div className={styles.ingredientsItemSubtitle}>244,4</div>
  //       </div>
  //       <div className={styles.ingredientsItem}>
  //         <div className={styles.ingredientsItemTitle}>Калории,ккал</div>
  //         <div className={styles.ingredientsItemSubtitle}>244,4</div>
  //       </div>
  //       <div className={styles.ingredientsItem}>
  //         <div className={styles.ingredientsItemTitle}>Калории</div>
  //         <div className={styles.ingredientsItemSubtitle}>244,4</div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
