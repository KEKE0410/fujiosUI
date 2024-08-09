import { Children, cloneElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
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
  return /*#__PURE__*/_jsx("div", {
    className: `rounded-xl shadow-md border-2 ${style_s} bg-white p-3 relative`,
    children: Children.map(children, child => {
      return /*#__PURE__*/cloneElement(child, {
        variant
      });
    })
  });
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
  return /*#__PURE__*/_jsx("h2", {
    className: `pl-9 font-semibold ${style_s}`,
    children: children
  });
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
  return /*#__PURE__*/_jsx("p", {
    className: `pl-9 text-sm text-gray-500 ${style_s}`,
    children: children
  });
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
  return /*#__PURE__*/_jsx("div", {
    className: `absolute top-[16px] ${style_s}`,
    children: children
  });
};
