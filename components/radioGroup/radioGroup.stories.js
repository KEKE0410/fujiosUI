import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./radioGroup_d";
export default {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => {
    const [value, setValue] = useState("mail");
    return (
      <div>
        <RadioGroup name="contact" onValueChange={setValue} value={value}>
          <RadioGroupItem value="mail">メール</RadioGroupItem>
          <RadioGroupItem value="sms">電話</RadioGroupItem>
          <RadioGroupItem value="discord">ディスコード</RadioGroupItem>
        </RadioGroup>
        <p>{value}を選択しています</p>
      </div>
    );
  },
};

export const Disable= {
  render: () => {
    const [value1, setValue1] = useState("mail");
    return (
      <div>
        <RadioGroup name="contact1" onValueChange={setValue1} value={value1} disable>
          <RadioGroupItem value="mail1">メール</RadioGroupItem>
          <RadioGroupItem value="sms1">電話</RadioGroupItem>
          <RadioGroupItem value="discord1">ディスコード</RadioGroupItem>
        </RadioGroup>
        <p>{value1}を選択しています</p>
      </div>
    );
  },
};