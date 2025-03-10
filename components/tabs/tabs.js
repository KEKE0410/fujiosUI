import { useEffect, useRef, useState } from "react";
import { Children, cloneElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
export const Tabs = ({
  children
}) => {
  const [selectedTab, setSelectedTab] = useState(null);
  useEffect(() => {
    if (Children.count(children) > 0) {
      const firstTabList = Children.toArray(children).find(child => child.type === TabsList);
      if (firstTabList) {
        const firstTabItem = Children.toArray(firstTabList.props.children)[0];
        if (firstTabItem) {
          setSelectedTab(firstTabItem.props.value);
        }
      }
    }
  }, [children]);
  return /*#__PURE__*/_jsx("div", {
    children: Children.map(children, child => {
      return /*#__PURE__*/cloneElement(child, {
        selectedTab,
        setSelectedTab
      });
    })
  });
};
export const TabsList = ({
  children,
  selectedTab,
  setSelectedTab
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: "flex gap-2 bg-gray-300 rounded-md p-1",
    children: Children.map(children, child => {
      return /*#__PURE__*/cloneElement(child, {
        selectedTab,
        setSelectedTab
      });
    })
  });
};
export const TabsListItem = ({
  children,
  value,
  selectedTab,
  setSelectedTab
}) => {
  const isSelected = selectedTab === value;
  return /*#__PURE__*/_jsx("div", {
    className: `py-2 px-5 rounded-md ${isSelected ? "bg-white" : null} w-full text-center cursor-pointer`,
    onClick: () => {
      setSelectedTab(value);
    },
    children: children
  });
};
export const TabsContent = ({
  children,
  selectedTab,
  className
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: className,
    children: Children.map(children, child => {
      return /*#__PURE__*/cloneElement(child, {
        selectedTab
      });
    })
  });
};
export const TabsContentItem = ({
  children,
  selectedTab,
  value
}) => {
  if (selectedTab == value) {
    return children;
  }
};
