import React from "react";
import "./App.css";
import styles from "./App.module.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { BurgerConstructor } from "./components/BurgerConstructor/BurgerConstructor";
// import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients";
// import { ModalOverlay } from "./components/ModalOverlay/ModalOverlay";
import ModalOverlay from "./components/ModalOverlay/ModalOverlay";
import { createRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import { DATA } from "./components/utils/data";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Api from "./components/Api/Api";

import "./fonts/fonts.css";

// import { useDrag } from "react-dnd";

const apiUrl = "https://norma.nomoreparties.space/api/ingredients";

const myApi = new Api(apiUrl);

class App extends React.Component {
  state = { data: [] };
  ingredientRef = React.createRef();
  private myRef = createRef();

  componentDidMount() {
    myApi.getData().then((response) => {
      // setResponse(response.results.data);
      this.setState({
        data: response.results.data,
      });
    });
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log("result", result);
        // this.state = {date: new Date()};
      })
      .catch((error) => {
        console.log(error);
      });
  }

  testing = (id: string) => {
    console.log("check id", DATA.filter((e) => e._id === id)[0]);
    this.setState({
      data: DATA.filter((e) => e._id === id),
    });

    // console.log("ingredientRef.current", ingredientRef.current);
    // ingredientRef.current(); //?
  };
  openIngredientDetails = (id: string) => {
    console.log("check id", DATA.filter((e) => e._id === id)[0]);
    this.setState({
      data: DATA.filter((e) => e._id === id),
    });

    console.log("ingredientRef.current", this.ingredientRef.current);
    // this.ingredientRef.current; //?
  };

  testOutput = () => {
    console.log("testOutput");
  };

  openOrderDetails = () => {};

  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className={styles.box}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients onClick={this.testing} />
            <BurgerConstructor
              openIngredientDetails={this.openIngredientDetails}
              openOrderDetails={this.testOutput}
            />
          </DndProvider>
          {/* <ModalOverlay ref={ingredientRef}>{"DATA"}</ModalOverlay> */}
          <ModalOverlay
            data={this.state.data}
            ingredientRef={this.ingredientRef}
          ></ModalOverlay>
        </div>
      </div>
    );
  }
}

export default App;

// const myApi = new Api(apiUrl);

// // class App extends React.Component {
// //   // state = { data: true };

// // export default App;

// export default function App() {
//   interface StateProperties {
//     _id: string;
//     name: string;
//     type: string;
//     proteins: number;
//     fat: number;
//     carbohydrates: number;
//     calories: number;
//     price: number;
//     image: string;
//     image_mobile: string;
//     image_large: string;
//     __v: number;
//   }

//   const [data, setResponse] = useState<StateProperties[]>(DATA);

//   console.log("DATA", DATA);

//   // myApi.getData().then((response) => {
//   //   setResponse(response.results.data);
//   // });
//   // fetch(apiUrl)
//   //   .then((response) => response.json())
//   //   .then((result) => {
//   //     console.log("apiUrl", apiUrl);
//   //     console.log("result", result);
//   //     // this.state = {date: new Date()};
//   //   })
//   //   .catch((error) => {
//   //     console.log(error);
//   //   });

//   // const ingredientRef = React.createRef();
//   const ingredientRef = useRef(null);

//   const testing = (id: string) => {
//     console.log("check id", DATA.filter((e) => e._id === id)[0]);
//     setResponse(DATA.filter((e) => e._id === id));

//     console.log("ingredientRef.current", ingredientRef.current);
//     // ingredientRef.current(); //?
//   };
//   const openIngredientDetails = (id: string) => {
//     console.log("check id", DATA.filter((e) => e._id === id)[0]);
//     setResponse(DATA.filter((e) => e._id === id));

//     console.log("ingredientRef.current", ingredientRef.current);
//     // ingredientRef.current(); //?
//   };

//   const testOutput = () => {
//     console.log("testOutput");
//   };

//   const openOrderDetails = () => {};

//   return (
//     <div className="App">
//       <AppHeader />
//       <div className={styles.box}>
//         <DndProvider backend={HTML5Backend}>
//           <BurgerIngredients onClick={testing} />
//           <BurgerConstructor
//             openIngredientDetails={testing}
//             openOrderDetails={testOutput}
//           />
//         </DndProvider>
//         {/* <ModalOverlay ref={ingredientRef}>{"DATA"}</ModalOverlay> */}
//         <ModalOverlay data={data} ingredientRef={ingredientRef}></ModalOverlay>
//       </div>
//     </div>
//   );
// }

// // class App extends React.Component {
// //   render({});
// // }

// // export default App;

// //

// // const App = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     getIngredients(url)
// //       .then((item) => {
// //         setData(Array.from(item.data));
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   }, []);
// // };
