export const Input = ({
  className,
  placeholder = "",
  type = "text",
  disable = false,
  value = null,
  onValueChange,
  id
}) => {
  let disable_s;
  if (disable) {
    disable_s = "cursor-not-allowed opacity-50";
  }
  return (
    <input
      onChange={(e) => {
        onValueChange(e.target.value);
      }}
      value={value}
      type={type}
      className={`rounded-md shadow-md border border-gray-300 bg-white p-2 ${className} ${disable_s}`}
      placeholder={placeholder}
      disabled={disable}
      id={id}
    />
  );
};
