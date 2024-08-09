import { Avatar } from "./avatar";
export default {
  title: "Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["lg", "md", "sm"],
    },
  },
};

export const Default = {
  args: {
    src: "./storybook/keke0410.jpg",
  },
};
