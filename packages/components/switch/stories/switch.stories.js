import { useState } from "react";
import { Switch } from "./switch";

export default {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: {
        type: "boolean",
      },
    },
  },
};

export const Default = {
  args: {},
};

export const Checked = {
  args: {
    checked: true,
  },
};

export const Control = {
  render: () => {
    const [value, setValue] = useState(false);
    return (
      <div>
        <Switch onCheckChange={setValue} />
        <p>スイッチの状態：{value ? "オン" : "オフ"}</p>
      </div>
    );
  },
};

export const Disable = {
  args: {
    disable: true,
  },
};
