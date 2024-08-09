import { Children, cloneElement, useEffect } from "react";
import css from "./radioGroup.module.css";
export const RadioGroup = ({
  children,
  name,
  onValueChange,
  value,
  disable
}) => {
  let value1 = value;
  return /*#__PURE__*/React.createElement(React.Fragment, null, Children.map(children, child => {
    return /*#__PURE__*/cloneElement(child, {
      name,
      onValueChange,
      value1,
      disable
    });
  }));
};
export const RadioGroupItem = ({
  value,
  name,
  children,
  onValueChange,
  value1,
  disable
}) => {
  let disable_s;
  if (disable) {
    disable_s = "cursor-not-allowed opacity-50";
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    value: value,
    name: name,
    id: value,
    className: `${css.input}`,
    onClick: () => {
      onValueChange(value);
    },
    checked: value == value1 ? true : false,
    disabled: disable
  }), /*#__PURE__*/React.createElement("label", {
    for: value,
    className: `${css.text} ${disable_s}`
  }, children));
};
