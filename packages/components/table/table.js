import { Children, cloneElement } from "react";
export const Table = ({
  children,
  className
}) => {
  return /*#__PURE__*/React.createElement("table", {
    className: `w-full ${className}`
  }, children);
};
export const TableRow = ({
  children,
  className
}) => {
  return /*#__PURE__*/React.createElement("tr", {
    className: `border-gray-300 border-b ${className}`
  }, children);
};
export const TableRowHeader = ({
  children,
  className
}) => {
  return /*#__PURE__*/React.createElement("tr", {
    className: `bg-gray-100 text-gray-500 font-normal border-b border-gray-300 ${className}`
  }, children);
};
export const TableHeader = ({
  children,
  className
}) => {
  return /*#__PURE__*/React.createElement("th", {
    className: `p-2 ${className}`
  }, children);
};
export const TableData = ({
  children,
  className
}) => {
  return /*#__PURE__*/React.createElement("td", {
    className: `p-2 ${className}`
  }, children);
};
export const TableContent = ({
  children,
  className
}) => {
  const childrenArray = Children.toArray(children);
  const lastIndex = childrenArray.length - 1;
  return /*#__PURE__*/React.createElement("tbody", {
    className: className
  }, Children.map(childrenArray, (child, index) => /*#__PURE__*/cloneElement(child, {
    className: `${child.props.className} ${index === lastIndex ? 'border-b-0' : 'border-b-1'}`
  })));
};
