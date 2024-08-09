import { Button } from "../button/button";
import { DrawerContent, DrawerFuji, DrawerTrigger } from "./drawer";
export default {
  title: "Drawer",
  component: DrawerFuji,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => {
    return (
      <DrawerFuji>
        <DrawerTrigger>
          <Button>開く</Button>
        </DrawerTrigger>
        <DrawerContent>
          <p>コンテンツ</p>
        </DrawerContent>
      </DrawerFuji>
    );
  },
};
