import { Children, cloneElement, useEffect, useRef, useState } from "react";
import css from "./dialog.module.css";
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Dialog = ({
  children
}) => {
  const [state, setState] = useState(false);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: Children.map(children, child => {
      return /*#__PURE__*/cloneElement(child, {
        state,
        setState
      });
    })
  });
};
export const DialogOpen = ({
  children,
  state,
  setState,
  className
}) => {
  return /*#__PURE__*/_jsx("div", {
    onClick: () => {
      setState(true);
    },
    className: className,
    children: children
  });
};
export const DialogContent = ({
  children,
  state,
  setState
}) => {
  const contentRef = useRef();
  const bgRef = useRef();
  const maincontentRef = useRef();
  useEffect(() => {
    if (state) {
      contentRef.current.style.display = "block";
      setTimeout(() => {
        bgRef.current.style.opacity = "50%";
        maincontentRef.current.style.opacity = "1";
      }, 10);
    } else {
      bgRef.current.style.opacity = "0";
      maincontentRef.current.style.opacity = "0";
      setTimeout(() => {
        contentRef.current.style.display = "none";
      }, 200);
    }
  }, [state]);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      ref: contentRef,
      className: "hidden z-50",
      children: [/*#__PURE__*/_jsx("div", {
        className: css.openBg,
        ref: bgRef
      }), /*#__PURE__*/_jsx("div", {
        ref: maincontentRef,
        className: `${css.contentOpen} rounded-xl shadow-md border-2 border-gray-100 bg-white`,
        children: Children.map(children, child => {
          return /*#__PURE__*/cloneElement(child, {
            state,
            setState
          });
        })
      })]
    })
  });
};
export const DialogClose = ({
  children,
  className,
  state,
  setState
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: className,
    onClick: () => {
      setState(false);
    },
    children: children
  });
};
export const DialogHeader = ({
  children,
  className,
  state,
  setState
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: `px-5 pt-5 ${className}`,
    children: Children.map(children, child => {
      return /*#__PURE__*/cloneElement(child, {
        state,
        setState
      });
    })
  });
};
export const DialogTitle = ({
  children,
  state,
  setState
}) => {
  return /*#__PURE__*/_jsx("h2", {
    className: "text-lg font-bold",
    children: children
  });
};
export const DialogDescription = ({
  children,
  state,
  setState
}) => {
  return /*#__PURE__*/_jsx("p", {
    className: "text-sm opacity-50",
    children: children
  });
};
export const DialogFooter = ({
  children,
  className,
  state,
  setState
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: `px-5 pb-5 ${className}`,
    children: Children.map(children, child => {
      return /*#__PURE__*/cloneElement(child, {
        state,
        setState
      });
    })
  });
};
