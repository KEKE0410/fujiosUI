export const Avatar = ({
  src,
  className,
  size = "md"
}) => {
  let size_s;
  if (size == "sm") {
    size_s = "w-8 h-8";
  } else if (size == "md") {
    size_s = "w-12 h-12";
  } else if (size == "lg") {
    size_s = "w-20 h-20";
  }
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    className: `${className} ${size_s}`,
    style: {
      borderRadius: "9999px"
    }
  });
};
