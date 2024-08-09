import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export const Card = ({
  children,
  disable
}) => {
  let disable_s;
  if (disable) {
    disable_s = "cursor-not-allowed opacity-50 pointer-events-none";
  }
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: `rounded-xl shadow-md border-2 border-gray-100 bg-white ${disable_s}`,
      children: children
    })
  });
};
export const CardHeader = ({
  children,
  className
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: `px-5 pt-5 ${className}`,
    children: children
  });
};
export const CardTitle = ({
  children
}) => {
  return /*#__PURE__*/_jsx("h2", {
    className: "text-lg font-bold",
    children: children
  });
};
export const CardDescription = ({
  children
}) => {
  return /*#__PURE__*/_jsx("p", {
    className: "text-sm opacity-50",
    children: children
  });
};
export const CardContent = ({
  children,
  className
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: `p-5 ${className}`,
    children: children
  });
};
export const CardFooter = ({
  children,
  className
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: `px-5 pb-5 ${className}`,
    children: children
  });
};
