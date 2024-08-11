import { jsx as _jsx } from "react/jsx-runtime";
export const Select = ({
  children,
  disable,
  onValueChange,
  value,
  id
}) => {
  let disable_s;
  if (disable) {
    disable_s = "cursor-not-allowed opacity-50";
  }
  return /*#__PURE__*/_jsx("select", {
    className: `rounded-md shadow-md border border-gray-300 bg-white p-2 ${disable_s}`,
    disabled: disable,
    onChange: e => {
      onValueChange(e.target.value);
    },
    value: value,
    id: id,
    children: children
  });
};
export const SelectItem = ({
  children,
  value
}) => {
  return /*#__PURE__*/_jsx("option", {
    value: value,
    children: children
  });
};
