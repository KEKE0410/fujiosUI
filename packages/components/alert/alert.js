import { Children, cloneElement } from "react";
export const Alert = ({
  children,
  variant = "default"
}) => {
  let style_s;
  if (variant == "default") {
    style_s = "border-gray-100";
  } else if (variant == "alert") {
    style_s = "border-fujios-alert";
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `rounded-xl shadow-md border-2 ${style_s} bg-white p-3 relative`
  }, Children.map(children, child => {
    return /*#__PURE__*/cloneElement(child, {
      variant
    });
  }));
};
export const AlertTitle = ({
  children,
  variant
}) => {
  let style_s;
  if (variant == "default") {
    style_s = "";
  } else if (variant == "alert") {
    style_s = "text-fujios-alert";
  }
  return /*#__PURE__*/React.createElement("h2", {
    className: `pl-9 font-semibold ${style_s}`
  }, children);
};
export const AlertDescription = ({
  children,
  variant
}) => {
  let style_s;
  if (variant == "default") {
    style_s = "text-gray-500";
  } else if (variant == "alert") {
    style_s = "text-fujios-alert";
  }
  return /*#__PURE__*/React.createElement("p", {
    className: `pl-9 text-sm text-gray-500 ${style_s}`
  }, children);
};
export const AlertIcon = ({
  children,
  variant
}) => {
  let style_s;
  if (variant == "default") {
    style_s = "";
  } else if (variant == "alert") {
    style_s = "text-fujios-alert";
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `absolute top-[16px] ${style_s}`
  }, children);
};
