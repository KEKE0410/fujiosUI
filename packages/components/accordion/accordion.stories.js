import { Camera } from "lucide-react";
import { Accordion, AccordionItem } from "./accordion";
import { Button } from "../button/button";

export default {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
};

export const WithComponent = {
  args: {
    children: (
      <>
        <AccordionItem title="ボタン" key="key-1">
          <p>この権限をこのサイトではアクセス許可する必要があります。</p>
          <div className="flex gap-1 mt-3">
            <Button variant="ghost">許可しない</Button>
            <Button>許可しない</Button>
          </div>
        </AccordionItem>
      </>
    ),
  },
};
