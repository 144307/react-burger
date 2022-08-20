import React from "react";
import "./App.css";
import styles from "./App.module.css";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// import { useDrag } from "react-dnd";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className={styles.box}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients></BurgerIngredients>
          {/* <DndProvider backend={HTML5Backend}></DndProvider> */}
          <BurgerConstructor />
        </DndProvider>
      </div>
    </div>
  );
}

export default App;

// export const listItem = ({ id, name }) => {
//   const [{ isDragging }, dragRef] = useDrag({
//     type: "pet",
//     item: { id, name },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });
//   return (
//     <div className="pet-card" ref={dragRef}>
//       {name}
//       {isDragging && "😱"}
//     </div>
//   );
// };
