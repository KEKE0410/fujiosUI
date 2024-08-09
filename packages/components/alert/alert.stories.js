import { Bell } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertHeader,
  AlertIcon,
  AlertTitle,
} from "./alert";

export default {
  title: "Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => {
    return (
      <Alert>
        <AlertIcon>
          <Bell className="h-5 w-5"/>
        </AlertIcon>
        <AlertTitle>お知らせがあります</AlertTitle>
        <AlertDescription>
          このサイトはアップデートされました。新機能はこちらから確認できます。
        </AlertDescription>
      </Alert>
    );
  },
};

export const VariantAlert = {
  render: () => {
    return (
      <Alert variant="alert">
        <AlertIcon>
          <Bell className="h-5 w-5"/>
        </AlertIcon>
        <AlertTitle>お知らせがあります</AlertTitle>
        <AlertDescription>
          このサイトはアップデートされました。新機能はこちらから確認できます。
        </AlertDescription>
      </Alert>
    );
  },
};