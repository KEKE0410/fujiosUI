export const Card = ({
  children,
  disable
}) => {
  let disable_s;
  if (disable) {
    disable_s = "cursor-not-allowed opacity-50 pointer-events-none";
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `rounded-xl shadow-md border-2 border-gray-100 bg-white ${disable_s}`
  }, children));
};
export const CardHeader = ({
  children,
  className
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `px-5 pt-5 ${className}`
  }, children);
};
export const CardTitle = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold"
  }, children);
};
export const CardDescription = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("p", {
    className: "text-sm opacity-50"
  }, children);
};
export const CardContent = ({
  children,
  className
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `p-5 ${className}`
  }, children);
};
export const CardFooter = ({
  children,
  className
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `px-5 pb-5 ${className}`
  }, children);
};
