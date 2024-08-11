import { Card } from "../card/card_d";
import {
  Table,
  TableContent,
  TableData,
  TableHeader,
  TableRow,
  TableRowHeader,
} from "./table";
export default {
  title: "Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  render: () => {
    const data = [
      {
        id: 12,
        facilityCode: "153",
        standbyTime: 10,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 4,
        facilityCode: "154",
        standbyTime: 10,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 37,
        facilityCode: "156",
        standbyTime: 10,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 3,
        facilityCode: "157",
        standbyTime: 5,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 7,
        facilityCode: "158",
        standbyTime: 15,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 36,
        facilityCode: "159",
        standbyTime: 10,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 23,
        facilityCode: "160",
        standbyTime: 30,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 20,
        facilityCode: "161",
        standbyTime: 5,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 16,
        facilityCode: "162",
        standbyTime: 30,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 26,
        facilityCode: "164",
        standbyTime: 30,
        standbyTimeDisplayType: "NORMAL",
      },
    ];
    return (
      <Table>
        <TableRowHeader>
          <TableHeader>id</TableHeader>
          <TableHeader>識別番号</TableHeader>
          <TableHeader>待ち時間</TableHeader>
          <TableHeader>表示状況</TableHeader>
        </TableRowHeader>
        <TableContent>
          {data.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableData className="font-bold">{item.id}</TableData>
                <TableData>{item.facilityCode}</TableData>
                <TableData>{item.standbyTime}分待ち</TableData>
                <TableData>
                  {item.standbyTimeDisplayType == "NORMAL"
                    ? "表示中"
                    : "非表示"}
                </TableData>
              </TableRow>
            );
          })}
        </TableContent>
      </Table>
    );
  },
};

export const OnTheCard = {
  render: () => {
    const data = [
      {
        id: 12,
        facilityCode: "153",
        standbyTime: 10,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 4,
        facilityCode: "154",
        standbyTime: 10,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 37,
        facilityCode: "156",
        standbyTime: 10,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 3,
        facilityCode: "157",
        standbyTime: 5,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 7,
        facilityCode: "158",
        standbyTime: 15,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 36,
        facilityCode: "159",
        standbyTime: 10,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 23,
        facilityCode: "160",
        standbyTime: 30,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 20,
        facilityCode: "161",
        standbyTime: 5,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 16,
        facilityCode: "162",
        standbyTime: 30,
        standbyTimeDisplayType: "NORMAL",
      },
      {
        id: 26,
        facilityCode: "164",
        standbyTime: 30,
        standbyTimeDisplayType: "NORMAL",
      },
    ];
    return (
      <Card>
        <Table>
          <TableRowHeader>
            <TableHeader>id</TableHeader>
            <TableHeader>識別番号</TableHeader>
            <TableHeader>待ち時間</TableHeader>
            <TableHeader>表示状況</TableHeader>
          </TableRowHeader>
          <TableContent>
            {data.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableData className="font-bold">{item.id}</TableData>
                  <TableData>{item.facilityCode}</TableData>
                  <TableData>{item.standbyTime}分待ち</TableData>
                  <TableData>
                    {item.standbyTimeDisplayType == "NORMAL"
                      ? "表示中"
                      : "非表示"}
                  </TableData>
                </TableRow>
              );
            })}
          </TableContent>
        </Table>
      </Card>
    );
  },
};
