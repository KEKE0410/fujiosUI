import { useState } from "react";
import { Select, SelectItem } from "./select_d";
export default {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    children: (
      <>
        <SelectItem value="apple">リンゴ</SelectItem>
        <SelectItem value="orange">オレンジ</SelectItem>
        <SelectItem value="waterMelon">スイカ</SelectItem>
        <SelectItem value="grape">ブドウ</SelectItem>
        <SelectItem value="melon">メロン</SelectItem>
      </>
    ),
  },
};

export const Disable = {
  args: {
    disable: true,
    children: (
      <>
        <SelectItem value="apple">リンゴ</SelectItem>
        <SelectItem value="orange">オレンジ</SelectItem>
        <SelectItem value="waterMelon">スイカ</SelectItem>
        <SelectItem value="grape">ブドウ</SelectItem>
        <SelectItem value="melon">メロン</SelectItem>
      </>
    ),
  },
};

export const Control = {
  render: () => {
    const [value, setValue] = useState("apple");
    return (
      <div>
        <Select onValueChange={setValue} value={value}>
          <SelectItem value="apple">リンゴ</SelectItem>
          <SelectItem value="orange">オレンジ</SelectItem>
          <SelectItem value="waterMelon">スイカ</SelectItem>
          <SelectItem value="grape">ブドウ</SelectItem>
          <SelectItem value="melon">メロン</SelectItem>
        </Select>
        <p>{value}を選択しました</p>
      </div>
    );
  },
};
