import { Children, cloneElement } from "react";

export const Table = ({ children, className }) => {
  return <table className={`w-full ${className}`}>{children}</table>;
};

export const TableRow = ({ children, className }) => {
  return (
    <tr className={`border-gray-300 border-b ${className}`}>{children}</tr>
  );
};

export const TableRowHeader = ({ children, className }) => {
  return (
    <tr
      className={`bg-gray-100 text-gray-500 font-normal border-b border-gray-300 ${className}`}
    >
      {children}
    </tr>
  );
};

export const TableHeader = ({ children, className }) => {
  return <th className={`p-2 ${className}`}>{children}</th>;
};

export const TableData = ({ children, className }) => {
  return <td className={`p-2 ${className}`}>{children}</td>;
};

export const TableContent = ({ children, className }) => {
  const childrenArray = Children.toArray(children);
  const lastIndex = childrenArray.length - 1;

  return (
    <tbody className={className}>
      {Children.map(childrenArray, (child, index) =>
        cloneElement(child, {
          className: `${child.props.className} ${
            index === lastIndex ? 'border-b-0' : 'border-b-1'
          }`,
        })
      )}
    </tbody>
  );
};