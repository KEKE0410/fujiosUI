import { Menu, X } from "lucide-react";
import css from "./headerNav.module.css";
import { useRef } from "react";

export const HeaderNav = ({ children, className }) => {
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
  return (
    <>
      <div className={`${css.NavPC} ${className}`}>{children}</div>
      <div className={`${css.NavSP} ${className}`}>
        <div
          onClick={() => {
            open();
          }}
        >
          <Menu />
        </div>
      </div>
      <div
        className={`${css.menuSP}`}
        style={{ display: "none" }}
        ref={menuSPRef}
      >
        <div
          className={css.closeIcon}
          onClick={() => {
            close();
          }}
        >
          <X />
        </div>
        {children}
      </div>
    </>
  );
};

export const HeaderNavMenu = ({ children, className }) => {
  return (
    <div className={`${className} ${css.navMenu} ${css.naveMenuSP}`}>
      {children}
    </div>
  );
};

export const HeaderNavMenuItem = ({ children, type = "text", className }) => {
  if (type == "text") {
    return <div className={`${className} ${css.menuItem}`}>{children}</div>;
  } else if (type == "logo") {
    return <div className={`${className} ${css.logo}`}>{children}</div>;
  } else if (type == "native") {
    return children;
  }
};

export const HeaderNavSubMenu = ({ children, className }) => {
  return (
    <div className={`${className} ${css.navMenu} ${css.HeaderNavSubMenuSP}`}>
      {children}
    </div>
  );
};
