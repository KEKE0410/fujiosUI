import { Accordion, AccordionItem, Button } from "@fujios/ui";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@fujios/ui";
import { DrawerContent, DrawerFuji, DrawerTrigger } from "@fujios/ui";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOpen,
  DialogTitle,
} from "@fujios/ui";
export default function Home() {
  return (
    <div>
      <Accordion>
        <AccordionItem title="これは一つ目のアコーディオンです" key="key-1">
          これは一つ目のアコーディオンであり、二つ目のアコーディオンではありません。さらに三つ目のアコーディオンでもないようです。
        </AccordionItem>
        <AccordionItem title="これは二つ目のアコーディオンです" key="key-2">
          これは二つ目のアコーディオンであり、一つ目のアコーディオンではありません。さらに三つ目のアコーディオンでもないようです。
        </AccordionItem>
        <AccordionItem title="これは三つ目のアコーディオンです" key="key-3">
          これは三つ目のアコーディオンであり、二つ目のアコーディオンではありません。さらに一つ目のアコーディオンでもないようです。
        </AccordionItem>
        <AccordionItem title="これは四つ目のアコーディオンです" key="key-4">
          これは四つ目のアコーディオンであり、二つ目のアコーディオンではありません。さらに三つ目のアコーディオンでもないようです。
        </AccordionItem>
      </Accordion>
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
      <Sheet>
        <SheetTrigger>
          <Button>開く</Button>
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetTitle>これはシートです</SheetTitle>
        </SheetContent>
      </Sheet>
      <DrawerFuji>
        <DrawerTrigger>
          <Button>開く</Button>
        </DrawerTrigger>
        <DrawerContent>
          <p>コンテンツ</p>
        </DrawerContent>
      </DrawerFuji>
    </div>
  );
}
