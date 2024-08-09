import { Children, cloneElement } from "react";

export const Alert = ({ children, variant = "default" }) => {
  let style_s;
  if (variant == "default") {
    style_s = "border-gray-100";
  } else if (variant == "alert") {
    style_s = "border-fujios-alert";
  }

  return (
    <div
      className={`rounded-xl shadow-md border-2 ${style_s} bg-white p-3 relative`}
    >
      {Children.map(children, (child) => {
        return cloneElement(child, { variant });
      })}
    </div>
  );
};

export const AlertTitle = ({ children, variant }) => {
  let style_s;
  if (variant == "default") {
    style_s = "";
  } else if (variant == "alert") {
    style_s = "text-fujios-alert";
  }

  return <h2 className={`pl-9 font-semibold ${style_s}`}>{children}</h2>;
};

export const AlertDescription = ({ children, variant }) => {
  let style_s;
  if (variant == "default") {
    style_s = "text-gray-500";
  } else if (variant == "alert") {
    style_s = "text-fujios-alert";
  }

  return <p className={`pl-9 text-sm ${style_s}`}>{children}</p>;
};

export const AlertIcon = ({ children, variant }) => {
  let style_s;
  if (variant == "default") {
    style_s = "";
  } else if (variant == "alert") {
    style_s = "text-fujios-alert";
  }

  return <div className={`absolute top-[16px] ${style_s}`}>{children}</div>;
};
