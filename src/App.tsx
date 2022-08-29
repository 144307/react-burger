import React from "react";
import "./App.css";
import styles from "./App.module.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { BurgerConstructor } from "./components/BurgerConstructor/BurgerConstructor";
// import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients";
// import { ModalOverlay } from "./components/ModalOverlay/ModalOverlay";
import { ModalOverlay } from "./components/ModalOverlay/ModalOverlay";
import { createRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import { DATA } from "./components/utils/data";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Api from "./components/Api/Api";

import "./fonts/fonts.css";

const apiUrl = "https://norma.nomoreparties.space/api/ingredients";

const myApi = new Api(apiUrl);

interface Props {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

export const App = () => {
  const [data, setData] = React.useState<any[]>([]);
  const [ingredientsList, setIngredientsList] = React.useState<any[]>([]);
  const [constructorList, setConstructorList] = React.useState([]);
  const [modalOppened, setModalOppened] = React.useState(false);
  const [CurrentModalOverlay, setCurrentModalOverlay] = React.useState(false); // true - ingredients, false - order

  const ingredientRef = useRef(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        // this.state = {date: new Date()};
        setData(response.data);
        setIngredientsList(response.data);
        setConstructorList(response.data);
        console.log("data", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const openIngredientDetails = (id: string, returnedData: Props[]) => {
    setModalOppened(!modalOppened);
    console.log(
      "openIngredientDetails check id",
      ingredientsList.filter((e) => e._id === id)[0]
    );
    console.log("returnedData", returnedData);
    setData(ingredientsList.filter((e) => e._id === id)[0]);
    setCurrentModalOverlay(true);
  };

  const openOrderDetails = (basket: Props) => {
    setModalOppened(!modalOppened);
    console.log("openOrderDetails", basket);
    setCurrentModalOverlay(false);
  };

  return (
    <div className="App">
      <AppHeader />
      <div className={styles.box}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients
            data={ingredientsList}
            openIngredientDetails={openIngredientDetails}
          />
          <BurgerConstructor
            data={constructorList}
            openIngredientDetails={openIngredientDetails}
            openOrderDetails={openOrderDetails}
          />
        </DndProvider>
        <ModalOverlay
          // object={"test"}
          data={data}
          ingredientRef={ingredientRef}
          modalOppened={modalOppened}
          CurrentModalOverlay={CurrentModalOverlay}
        ></ModalOverlay>
      </div>
    </div>
  );
};

//

// class App extends React.Component {
//   state = {
//     data: [],
//     ingredientsList: [],
//     constructorList: [],
//     selectedItem: [],
//     modalOppened: false,
//   };
//   ingredientRef = React.createRef();

//   // const ingredientRef = useRef(null);

//   componentDidMount() {
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((response) => {
//         console.log("response", response);
//         // this.state = {date: new Date()};
//         this.setState({
//           data: response.data,
//           ingredientsList: response.data,
//           constructorList: response.data,
//         });
//         this.forceUpdate();
//         console.log("this.state.data", this.state.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   openIngredientDetails = (id: string, returnedData: Props) => {
//     console.log(
//       "openIngredientDetails check id",
//       DATA.filter((e) => e._id === id)[0]

//       // returnedData.filter((e: Props) => e._id === id)[0]
//       // const numbers = [1, 4, 9];
//       // returnedData.map(() =>{}})
//     );
//     console.log("returnedData", returnedData);
//     this.setState({
//       data: DATA.filter((e) => e._id === id),
//     });

//     console.log("ingredientRef.current", this.ingredientRef.current);
//     // this.ingredientRef.current();
//   };

//   openOrderDetails = (basket: Props) => {
//     console.log("openOrderDetails", basket);
//   };

//   render() {
//     return (
//       <div className="App">
//         <AppHeader />
//         <div className={styles.box}>
//           <DndProvider backend={HTML5Backend}>
//             <BurgerIngredients
//               data={this.state.ingredientsList}
//               openIngredientDetails={this.openIngredientDetails}
//             />
//             <BurgerConstructor
//               data={this.state.constructorList}
//               openIngredientDetails={this.openIngredientDetails}
//               openOrderDetails={this.openOrderDetails}
//             />
//           </DndProvider>
//           {/* <ModalOverlay ref={ingredientRef}>{"DATA"}</ModalOverlay> */}
//           <ModalOverlay
//             data={this.state.data}
//             ingredientRef={this.ingredientRef}
//             // test={this.props.openFunc}s
//           ></ModalOverlay>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
