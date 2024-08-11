import { useState } from "react";
import { Input } from "./input_d";

export default {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    placeholder: "email",
  },
};

export const Disable = {
  args: {
    disable: true,
    placeholder: "email",
  },
};

export const file = {
  args: {
    type: "file",
  },
};

export const Control = {
  render: () => {
    const [value, setValue] = useState("入力した文字");
    return (
      <div>
        <Input value={value} onValueChange={setValue} />
        <p>入力した文字：{value}</p>
      </div>
    );
  },
};
