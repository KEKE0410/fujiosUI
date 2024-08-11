import { Drawer } from "vaul";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const DrawerFuji = ({
  children
}) => {
  return /*#__PURE__*/_jsx(Drawer.Root, {
    shouldScaleBackground: true,
    children: children
  });
};
export const DrawerTrigger = ({
  children
}) => {
  return /*#__PURE__*/_jsx(Drawer.Trigger, {
    children: children
  });
};
export const DrawerContent = ({
  children
}) => {
  return /*#__PURE__*/_jsxs(Drawer.Portal, {
    children: [/*#__PURE__*/_jsx(Drawer.Overlay, {
      className: "fixed inset-0 bg-black/40"
    }), /*#__PURE__*/_jsx(Drawer.Content, {
      className: "bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0",
      children: /*#__PURE__*/_jsxs("div", {
        className: "p-4 bg-white rounded-t-[10px] flex-1",
        children: [/*#__PURE__*/_jsx("div", {
          className: "mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8"
        }), children]
      })
    })]
  });
};
