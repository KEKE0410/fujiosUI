import { Button } from "../button/button_d";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

export default {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {},
};

export const Example = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>権限を許可して下さい</CardTitle>
          <CardDescription>
            以下の権限を許可することによって、このサイトはご利用いただけます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc ml-10">
            <li>カメラのアクセス</li>
            <li>連絡帳のアクセス</li>
            <li>画像データのフルアクセス</li>
          </ul>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button className="w-full" variant="secondary">
            許可しない
          </Button>
          <Button className="w-full">許可する</Button>
        </CardFooter>
      </>
    ),
  },
};


export const Disable = {
  args: {
    disable:true,
    children: (
      <>
        <CardHeader>
          <CardTitle>権限を許可して下さい</CardTitle>
          <CardDescription>
            以下の権限を許可することによって、このサイトはご利用いただけます。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc ml-10">
            <li>カメラのアクセス</li>
            <li>連絡帳のアクセス</li>
            <li>画像データのフルアクセス</li>
          </ul>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button className="w-full" variant="secondary">
            許可しない
          </Button>
          <Button className="w-full">許可する</Button>
        </CardFooter>
      </>
    ),
  },
};
