import { Camera, House } from "lucide-react";
import { Button } from "./button_d";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "ghost", "alert", "disable"],
    },
    radius: {
      control: "select",
      options: ["none", "md", "full"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    loading: {
      control: "boolean",
    },
  },
};

export const Primary = {
  args: {
    children: "ボタン",
  },
};

export const BetweenIcon = {
  args: {
    children: (
      <>
        <Camera className="mr-2" />
        カメラ
      </>
    ),
  },
};

export const Wide = {
  args: {
    className: "w-full",
    children: "ワイドボタン",
  },
};

export const IconButton={
  args:{
    children:<House />,
  }
}