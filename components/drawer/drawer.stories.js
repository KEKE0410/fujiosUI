import { Button } from "../button/button_d";
import { DrawerContent, DrawerFuji, DrawerTrigger } from "./drawer_d";
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
