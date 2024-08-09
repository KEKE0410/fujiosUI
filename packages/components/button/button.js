import { LoaderCircle } from "lucide-react";
export const Button = ({
  children,
  variant = "primary",
  size = "md",
  radius = "md",
  className,
  loading = false,
}) => {
  let variant_s;
  if (variant == "primary") {
    variant_s = "bg-fujios-primary hover:contrast-75 text-white";
  } else if (variant == "secondary") {
    variant_s =
      "border-fujios-primary border text-fujios-primary hover:bg-gray-100";
  } else if (variant == "ghost") {
    variant_s = "text-fujios-primary hover:bg-gray-100";
  } else if (variant == "alert") {
    variant_s = "bg-fujios-alert text-white hover:contrast-75";
  } else if (variant == "disable") {
    variant_s = "text-white bg-gray-500 cursor-not-allowed";
  }

  let radius_s;
  if (radius == "md") {
    radius_s = "rounded-md";
  } else if (radius == "none") {
    radius_s = "border-radius: 0;";
  } else if (radius == "full") {
    radius_s = "rounded-full";
  }

  let size_s;
  if (size == "md") {
    size_s = "py-2 px-3";
  } else if (size == "sm") {
    size_s = "py-1 px-2";
  } else if (size == "lg") {
    size_s = "py-3 px-4";
  }
  let loading_s;
  if (loading == true) {
    loading_s = <LoaderCircle className="mr-2 rotate-360 animate-spin"/>;
  } else if (loading == false) {
    loading_s = null;
  }
  return (
    <button
      className={`${className} ${variant_s} ${size_s} ${radius_s} flex items-center justify-center`}
    >
      {loading_s}
      {children}
    </button>
  );
};