import { Children, cloneElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
export const Table = ({
  children,
  className
}) => {
  return /*#__PURE__*/_jsx("table", {
    className: `w-full ${className}`,
    children: children
  });
};
export const TableRow = ({
  children,
  className
}) => {
  return /*#__PURE__*/_jsx("tr", {
    className: `border-gray-300 border-b ${className}`,
    children: children
  });
};
export const TableRowHeader = ({
  children,
  className
}) => {
  return /*#__PURE__*/_jsx("tr", {
    className: `bg-gray-100 text-gray-500 font-normal border-b border-gray-300 ${className}`,
    children: children
  });
};
export const TableHeader = ({
  children,
  className
}) => {
  return /*#__PURE__*/_jsx("th", {
    className: `p-2 ${className}`,
    children: children
  });
};
export const TableData = ({
  children,
  className
}) => {
  return /*#__PURE__*/_jsx("td", {
    className: `p-2 ${className}`,
    children: children
  });
};
export const TableContent = ({
  children,
  className
}) => {
  const childrenArray = Children.toArray(children);
  const lastIndex = childrenArray.length - 1;
  return /*#__PURE__*/_jsx("tbody", {
    className: className,
    children: Children.map(childrenArray, (child, index) => /*#__PURE__*/cloneElement(child, {
      className: `${child.props.className} ${index === lastIndex ? 'border-b-0' : 'border-b-1'}`
    }))
  });
};
