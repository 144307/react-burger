import React from "react"; // импорт библиотеки
import styles from "./AppHeader.module.css";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

class AppHeader extends React.Component {
  render() {
    return (
      <>
        <nav className={styles.AppHeader}>
          {/* buttons */}
          <div className={styles.buttons}>
            <div className={styles.buttonActive}>
              <BurgerIcon type="primary" />
              <div className={styles.label}>Конструктор</div>
            </div>
            <div className={styles.button}>
              <ListIcon type="secondary" />
              <div className={styles.label}>Конструктор</div>
            </div>
          </div>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.profileGrpoup}>
            <ProfileIcon type="secondary" />
            <div className={styles.label}>Конструктор</div>
          </div>
        </nav>
      </>
    );
  }
}

export default AppHeader;
