import React from "react";
import { useEffect } from "react";
import { forwardRef } from "react";

import styles from "./ModalOverlay.module.css";

import { Modal } from "../Modal/modal";

export const ModalOverlay = ({ data, ingredientRef }) => {
  // const [dataNew, setData] = useState(data);

  const newRef = React.createRef();

  let oppened = true;

  useEffect(() => {
    ingredientRef.current = openFunc;
  });

  const openFunc = () => {
    console.log("open");
    oppened = true;
    newRef.current.style.display = "flex";
  };

  const closeFunc = () => {
    console.log("close");
    oppened = false;
    newRef.current.style.display = "none";
  };

  return (
    <div
      className={oppened ? styles.overlayOppened : styles.overlayClosed}
      ref={newRef}
    >
      <Modal
        data={data}
        closeFunc={closeFunc}
        // onClick={console.log("ModalOverlay data", data)}
      />
    </div>
  );
};
