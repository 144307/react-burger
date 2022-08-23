import React from "react";
import "./App.css";
import styles from "./App.module.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { BurgerConstructor } from "./components/BurgerConstructor/BurgerConstructor";
// import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import { BurgerIngredients } from "./components/BurgerIngredients/BurgerIngredients";
import { useState } from "react";
import { useEffect } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Api from "./components/Api/Api";

// import { useDrag } from "react-dnd";

const apiUrl = "https://norma.nomoreparties.space/api/ingredients";
const myApi = new Api(apiUrl);

// class App extends React.Component {
//   // state = { data: true };

//   componentDidMount() {
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((result) => this.setState({ data: result }));
//   }

//   render() {
//     return <div className="App">
//     <AppHeader />
//     <div className={styles.box}>
//       <DndProvider backend={HTML5Backend}>
//         <BurgerIngredients />
//         <BurgerConstructor />
//       </DndProvider>
//     </div>
//   </div>;
//   }
// }

// export default App;

export default function App() {
  // const [data, setResponse] = useState([]);
  // state = {test: test};

  useEffect(() => {
    // myApi.getData().then((response) => {
    //   setResponse(response.results);
    // });
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log("apiUrl", apiUrl);
        console.log("result", result);
        // this.state = {date: new Date()};
      });
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <div className={styles.box}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   render({});
// }

// export default App;

//

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getIngredients(url)
//       .then((item) => {
//         setData(Array.from(item.data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
// };
