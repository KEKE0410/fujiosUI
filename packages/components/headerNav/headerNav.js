import { Menu, X } from "lucide-react";
import css from "./headerNav.module.css";
import { useRef } from "react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export const HeaderNav = ({
  children,
  className
}) => {
  const menuSPRef = useRef();
  const open = () => {
    menuSPRef.current.style.display = "block";
    setTimeout(() => {
      menuSPRef.current.style.opacity = "1";
    }, 10);
  };
  const close = () => {
    menuSPRef.current.style.opacity = "0";
    setTimeout(() => {
      menuSPRef.current.style.display = "none";
    }, 200);
  };
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("div", {
      className: `${css.NavPC} ${className}`,
      children: children
    }), /*#__PURE__*/_jsx("div", {
      className: `${css.NavSP} ${className}`,
      children: /*#__PURE__*/_jsx("div", {
        onClick: () => {
          open();
        },
        children: /*#__PURE__*/_jsx(Menu, {})
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: `${css.menuSP}`,
      style: {
        display: "none"
      },
      ref: menuSPRef,
      children: [/*#__PURE__*/_jsx("div", {
        className: css.closeIcon,
        onClick: () => {
          close();
        },
        children: /*#__PURE__*/_jsx(X, {})
      }), children]
    })]
  });
};
export const HeaderNavMenu = ({
  children,
  className
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: `${className} ${css.navMenu} ${css.naveMenuSP}`,
    children: children
  });
};
export const HeaderNavMenuItem = ({
  children,
  type = "text",
  className
}) => {
  if (type == "text") {
    return /*#__PURE__*/_jsx("div", {
      className: `${className} ${css.menuItem}`,
      children: children
    });
  } else if (type == "logo") {
    return /*#__PURE__*/_jsx("div", {
      className: `${className} ${css.logo}`,
      children: children
    });
  } else if (type == "native") {
    return children;
  }
};
export const HeaderNavSubMenu = ({
  children,
  className
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: `${className} ${css.navMenu} ${css.HeaderNavSubMenuSP}`,
    children: children
  });
};
