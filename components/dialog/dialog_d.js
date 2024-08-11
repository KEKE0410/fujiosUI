import { Children, cloneElement, useEffect, useRef, useState } from "react";
import css from "./dialog.module.css";
export const Dialog = ({ children, defaultOpen = false }) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    if (defaultOpen == true) {
      setState(true);
    }
  }, []);
  console.log(state)
  return (
    <>
      {Children.map(children, (child) => {
        return cloneElement(child, { state, setState });
      })}
    </>
  );
};

export const DialogOpen = ({ children, state, setState, className }) => {
  return (
    <div
      onClick={() => {
        setState(true);
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export const DialogContent = ({ children, state, setState }) => {
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
  return (
    <>
      <div ref={contentRef} className="hidden z-50">
        <div className={css.openBg} ref={bgRef}></div>
        <div
          ref={maincontentRef}
          className={`${css.contentOpen} rounded-xl shadow-md border-2 border-gray-100 bg-white`}
        >
          {Children.map(children, (child) => {
            return cloneElement(child, { state, setState });
          })}
        </div>
      </div>
    </>
  );
};

export const DialogClose = ({ children, className, state, setState }) => {
  return (
    <div
      className={className}
      onClick={() => {
        setState(false);
      }}
    >
      {children}
    </div>
  );
};

export const DialogHeader = ({ children, className, state, setState }) => {
  return (
    <div className={`px-5 pt-5 ${className}`}>
      {Children.map(children, (child) => {
        return cloneElement(child, { state, setState });
      })}
    </div>
  );
};

export const DialogTitle = ({ children, state, setState }) => {
  return <h2 className="text-lg font-bold">{children}</h2>;
};

export const DialogDescription = ({ children, state, setState }) => {
  return <p className="text-sm opacity-50">{children}</p>;
};

export const DialogFooter = ({ children, className, state, setState }) => {
  return (
    <div className={`px-5 pb-5 ${className}`}>
      {Children.map(children, (child) => {
        return cloneElement(child, { state, setState });
      })}
    </div>
  );
};
