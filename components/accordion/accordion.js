import { ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Accordion = ({
  children
}) => {
  return /*#__PURE__*/_jsx("div", {
    children: children
  });
};
export const AccordionItem = ({
  title,
  children,
  key
}) => {
  const child = useRef();
  const arrow = useRef();
  const [openState, setOpenState] = useState(false);
  const open = () => {
    setOpenState(true);
    setTimeout(() => {
      child.current.style.opacity = 1;
    }, 50);
    child.current.style.display = "block";
    arrow.current.style.transform = "rotate(90deg)";
  };
  const close = () => {
    setOpenState(false);
    child.current.style.opacity = 0;
    arrow.current.style.transform = "rotate(0deg)";
    setTimeout(() => {
      child.current.style.display = "none";
    }, 150);
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "border-b border-gray-300 py-2 ",
    children: [/*#__PURE__*/_jsxs("div", {
      onClick: () => {
        if (openState) {
          close();
        } else {
          open();
        }
      },
      className: "pb-1 flex items-center",
      style: {
        userSelect: "none",
        cursor: "pointer",
        fontWeight: 600
      },
      children: [/*#__PURE__*/_jsx(ChevronRight, {
        className: "mr-1 w-5 h-5",
        ref: arrow
      }), title]
    }), /*#__PURE__*/_jsx("div", {
      ref: child,
      style: {
        display: "none",
        opacity: 0,
        transition: "ease 0.2s",
        paddingTop: 5
      },
      children: children
    })]
  });
};
