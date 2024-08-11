import { Button } from "../button/button_d";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOpen,
  DialogTitle,
} from "./dialog_d";

export default {
  title: "Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => {
    return (
      <div className="w-fit h-[500px]">
        <Dialog>
          <DialogOpen>
            <Button>開く</Button>
          </DialogOpen>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>権限を許可して下さい</DialogTitle>
              <DialogDescription>
                以下の権限を許可することによって、このサイトはご利用いただけます。
              </DialogDescription>
            </DialogHeader>
            <div className="my-4">
              <ul className="list-disc ml-10">
                <li>カメラのアクセス</li>
                <li>連絡帳のアクセス</li>
                <li>画像データのフルアクセス</li>
              </ul>
            </div>
            <DialogFooter className="flex gap-2">
              <DialogClose className="w-full">
                <Button className="w-full" variant="secondary">
                  許可しないで閉じる
                </Button>
              </DialogClose>
              <Button className="w-full">許可する</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};
export const DefaultOpen = {
  render: () => {
    return (
      <div className="w-fit h-[500px]">
        <Dialog defaultOpen={true}>
          <DialogOpen>
            <Button>開く</Button>
          </DialogOpen>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>権限を許可して下さい</DialogTitle>
              <DialogDescription>
                以下の権限を許可することによって、このサイトはご利用いただけます。
              </DialogDescription>
            </DialogHeader>
            <div className="my-4">
              <ul className="list-disc ml-10">
                <li>カメラのアクセス</li>
                <li>連絡帳のアクセス</li>
                <li>画像データのフルアクセス</li>
              </ul>
            </div>
            <DialogFooter className="flex gap-2">
              <DialogClose className="w-full">
                <Button className="w-full" variant="secondary">
                  許可しないで閉じる
                </Button>
              </DialogClose>
              <Button className="w-full">許可する</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};
