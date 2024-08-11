import { useEffect, useRef, useState } from "react";
import css from "./switch.module.css";

export const Switch = ({ checked = false, onCheckChange, disable }) => {
  const slideRound = useRef();
  const switchRef = useRef();
  const [dataState, setDataState] = useState(false);
  const [switchBgColor, setSwitchBgColor] = useState("bg-gray-300");
  useEffect(() => {
    if (checked) {
      setDataState(true);
    } else {
      setDataState(false);
    }
  }, [checked]);
  useEffect(() => {
    if (onCheckChange) {
      onCheckChange(dataState);
    }
    if (dataState == true) {
      slideRound.current.style.left = "23px";
      setSwitchBgColor("bg-fujios-primary");
    } else {
      slideRound.current.style.left = "3px";
      setSwitchBgColor("bg-gray-300");
    }
  }, [dataState]);

  const clickEvent = () => {
    if (dataState == false) {
      setDataState(true);
    } else {
      setDataState(false);
    }
  };

  return (
    <button
      ref={switchRef}
      className={`${css.switch} ${switchBgColor} ${disable ? "cursor-not-allowed grayscale opacity-50" : null}`}
      onClick={() => {
        if (disable) {
          return;
        }
        clickEvent();
      }}
    >
      <span className={css.slider} ref={slideRound}></span>
    </button>
  );
};
