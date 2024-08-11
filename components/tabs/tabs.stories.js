import { Button } from "../button/button_d";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card/card";
import { Input } from "../input/input_d";
import {
  Tabs,
  TabsContent,
  TabsContentItem,
  TabsList,
  TabsListItem,
} from "./tabs_d";

export default {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => {
    return (
        <Tabs>
          <TabsList>
            <TabsListItem value="login">ログイン</TabsListItem>
            <TabsListItem value="create">アカウント作成</TabsListItem>
          </TabsList>
          <TabsContent className="mt-2">
            <TabsContentItem value="login">
              <Card>
                <CardHeader>
                  <CardTitle>アカウントにログイン</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 my-2">
                  <div className="flex flex-col gap-2">
                    <label for="email" className="text-sm">
                      メールアドレス
                    </label>
                    <Input
                      id="email"
                      value="sample@fujios.net"
                      type="email"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label for="password" className="text-sm">
                      パスワード
                    </label>

                    <Input
                      id="password"
                      value="sample0410"
                      type="password"
                      className="w-full"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">ログイン</Button>
                </CardFooter>
              </Card>
            </TabsContentItem>
            <TabsContentItem value="create">
              <Card>
                <CardHeader>
                  <CardTitle>アカウント作成</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 my-2">
                  <div className="flex flex-col gap-2">
                    <label for="email" className="text-sm">
                      メールアドレス
                    </label>
                    <Input
                      id="email"
                      value="sample@fujios.net"
                      type="email"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label for="userName" className="text-sm">
                      ユーザーネーム
                    </label>
                    <Input
                      id="userName"
                      value="KEKE0410"
                      type="text"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label for="password" className="text-sm">
                      パスワード
                    </label>

                    <Input
                      id="password"
                      value="sample0410"
                      type="password"
                      className="w-full"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">作成</Button>
                </CardFooter>
              </Card>
            </TabsContentItem>
          </TabsContent>
        </Tabs>
    );
  },
};
