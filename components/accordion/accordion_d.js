import { ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export const Accordion = ({ children }) => {
  return <div>{children}</div>;
};

export const AccordionItem = ({ title, children, key }) => {
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

  return (
    <div className="border-b border-gray-300 py-2 ">
      <div
        onClick={() => {
          if (openState) {
            close();
          } else {
            open();
          }
        }}
        className="pb-1 flex items-center"
        style={{ userSelect: "none", cursor: "pointer", fontWeight: 600 }}
      >
        <ChevronRight className="mr-1 w-5 h-5" ref={arrow} />
        {title}
      </div>
      <div
        ref={child}
        style={{
          display: "none",
          opacity: 0,
          transition: "ease 0.2s",
          paddingTop: 5,
        }}
      >
        {children}
      </div>
    </div>
  );
};
