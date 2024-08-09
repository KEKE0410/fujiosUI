import { Children, cloneElement, useEffect, useRef, useState } from "react";
import css from "./dialog.module.css";
export const Dialog = ({
  children
}) => {
  const [state, setState] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, Children.map(children, child => {
    return /*#__PURE__*/cloneElement(child, {
      state,
      setState
    });
  }));
};
export const DialogOpen = ({
  children,
  state,
  setState,
  className
}) => {
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => {
      setState(true);
    },
    className: className
  }, children);
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: contentRef,
    className: "hidden z-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: css.openBg,
    ref: bgRef
  }), /*#__PURE__*/React.createElement("div", {
    ref: maincontentRef,
    className: `${css.contentOpen} rounded-xl shadow-md border-2 border-gray-100 bg-white`
  }, Children.map(children, child => {
    return /*#__PURE__*/cloneElement(child, {
      state,
      setState
    });
  }))));
};
export const DialogClose = ({
  children,
  className,
  state,
  setState
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onClick: () => {
      setState(false);
    }
  }, children);
};
export const DialogHeader = ({
  children,
  className,
  state,
  setState
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `px-5 pt-5 ${className}`
  }, Children.map(children, child => {
    return /*#__PURE__*/cloneElement(child, {
      state,
      setState
    });
  }));
};
export const DialogTitle = ({
  children,
  state,
  setState
}) => {
  return /*#__PURE__*/React.createElement("h2", {
    className: "text-lg font-bold"
  }, children);
};
export const DialogDescription = ({
  children,
  state,
  setState
}) => {
  return /*#__PURE__*/React.createElement("p", {
    className: "text-sm opacity-50"
  }, children);
};
export const DialogFooter = ({
  children,
  className,
  state,
  setState
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `px-5 pb-5 ${className}`
  }, Children.map(children, child => {
    return /*#__PURE__*/cloneElement(child, {
      state,
      setState
    });
  }));
};
