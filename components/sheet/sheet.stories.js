import { Button } from "../button/button_d";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./sheet_d";
export default {
  title: "Sheet",
  component: Sheet,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger>
          <Button>開く</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>これはシートです</SheetTitle>
        </SheetContent>
      </Sheet>
    );
  },
};
