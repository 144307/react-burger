import React from "react";
import { useEffect } from "react";
import { forwardRef } from "react";

import styles from "./ModalOverlay.module.css";

import { Modal } from "../Modal/modal";

class ModalOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.ingredientRef = props.ingredientRef;
    this.newRef = React.createRef();
    this.oppened = true;
    this.state = { message: "testing" };
  }
  componentDidMount() {
    this.ingredientRef.current = this.testOutput.bind(this);
  }

  testOutput = () => {
    console.log("-=CHECK=-");
  };

  openFunc = () => {
    console.log("open");
    this.oppened = true;
    this.newRef.current.style.display = "flex";
  };

  closeFunc = () => {
    console.log("close");
    this.oppened = false;
    this.newRef.current.style.display = "none";
  };

  render() {
    return (
      <div
        className={this.oppened ? styles.overlayOppened : styles.overlayClosed}
        ref={this.newRef}
      >
        <Modal
          data={this.data}
          closeFunc={this.closeFunc}
          // onClick={console.log("ModalOverlay data", data)}
        />
      </div>
    );
  }
}
export default ModalOverlay;

// export const ModalOverlay = ({ data, ingredientRef }) => {
//   // const [dataNew, setData] = useState(data);

//   const newRef = React.createRef();

//   let oppened = true;

//   useEffect(() => {
//     ingredientRef.current = openFunc;
//   });

//   const openFunc = () => {
//     console.log("open");
//     oppened = true;
//     newRef.current.style.display = "flex";
//   };

//   const closeFunc = () => {
//     console.log("close");
//     oppened = false;
//     newRef.current.style.display = "none";
//   };

//   return (
//     <div
//       className={oppened ? styles.overlayOppened : styles.overlayClosed}
//       ref={newRef}
//     >
//       <Modal
//         data={data}
//         closeFunc={closeFunc}
//         // onClick={console.log("ModalOverlay data", data)}
//       />
//     </div>
//   );
// };
