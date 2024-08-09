export const Select = ({ children, disable, onValueChange, value,id }) => {
  let disable_s;
  if (disable) {
    disable_s = "cursor-not-allowed opacity-50";
  }
  return (
    <select
      className={`rounded-md shadow-md border border-gray-300 bg-white p-2 ${disable_s}`}
      disabled={disable}
      onChange={(e) => {
        onValueChange(e.target.value);
      }}
      value={value}
      id={id}
    >
      {children}
    </select>
  );
};

export const SelectItem = ({ children, value }) => {
  return <option value={value}>{children}</option>;
};
