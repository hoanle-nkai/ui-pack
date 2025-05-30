import {
  ClusterOutlined,
  EnvironmentOutlined,
  MoreOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, Radio, Table } from "antd";
import { CiFilter } from "react-icons/ci";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { MdForum } from "react-icons/md";

const columns = [
  {
    title: "Bid Number",
    dataIndex: "bidNumber",
    key: "bidNumber",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Bid Value",
    dataIndex: "bidValue",
    key: "bidValue",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    key: "dueDate",
  },
  {
    title: "Client Name",
    dataIndex: "clientName",
    key: "clientName",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Delete</Menu.Item>
          </Menu>
        }
        trigger={["click"]}
      >
        <Button type="text" icon={<MoreOutlined />} />
      </Dropdown>
    ),
  },
];

const data = Array(10)
  .fill(0)
  .map((_, index) => ({
    key: index + 1,
    bidNumber: "001",
    name: "Ferrocrete Builders Inc - Web...",
    address: "2464 Royal Ln. Mes...",
    bidValue: "$3,456,650",
    age: "45 days",
    dueDate: "$3,456,650",
    clientName: "Oleo Bone",
  }));

const BidCenterList = () => {
  return (
    <div className="py-9 px-10">
      <div className="flex justify-between items-center">
        <h2 className="text-[36px] text-[#140001]">Bid Center</h2>

        <div className="flex items-center">
          <button className="size-10 rounded-full border border-[#E7EDF3] flex items-center justify-center text-[#4D6077] text-lg bg-white z-10">
            <MdForum />
          </button>
          <button className="size-10 rounded-full border border-[#E7EDF3] flex items-center justify-center text-[#4D6077] text-lg bg-white -ml-2 z-[5]">
            <IoNotificationsOutline />
          </button>
          <div className="grid grid-cols-[40px_1fr] gap-x-[10px] -ml-2">
            <img
              src="https://i.pravatar.cc/40"
              alt=""
              className="rounded-full"
            />

            <div className="flex flex-col gap-y-[4px]">
              <span className="text-[#001631] text-lg font-bold leading-[1]">
                Richard Gere
              </span>
              <span className="text-[#594747] text-xs">Admin</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-[30px]">
        <div className="flex gap-x-[10px] h-[42px]">
          <Input
            prefix={<IoSearchOutline />}
            className="!rounded-full placeholder:!text-xs"
            placeholder="Search"
          />

          <style>
            {`
                .ant-radio-button-wrapper:not(:first-child)::before {
                    display: none !important;
                }
            `}
          </style>

          <Radio.Group className="!bg-[#FFFCFC] !p-1 !rounded-full !border !border-[#FAF2F2] !flex !w-[400px]">
            <Radio.Button
              value="list"
              className="!rounded-full !border-none !bg-white !text-[#E91F27]"
            >
              <UnorderedListOutlined />
              List
            </Radio.Button>
            <Radio.Button
              value="metrics"
              className="!rounded-full !border-none !bg-transparent !text-[#BF9FA0]"
            >
              <ClusterOutlined />
              Metrics
            </Radio.Button>
            <Radio.Button
              value="map"
              className="!rounded-full !border-none !bg-transparent !text-[#BF9FA0]"
            >
              <EnvironmentOutlined />
              Map
            </Radio.Button>
          </Radio.Group>
        </div>
        <div className="space-x-[10px]">
          <Button
            icon={<CiFilter className="!text-sm" />}
            className="!rounded-full !text-xs"
          >
            Filter
          </Button>
          <Button
            type="primary"
            className="!rounded-full !text-xs !font-semibold"
          >
            Add Bid
          </Button>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-y-5 ">
        <span className="text-2xl text-[#140001]">List of bids</span>

        <Table
          columns={columns}
          dataSource={data}
          rowSelection={{ type: "checkbox" }}
          bordered
          pagination={{
            current: 1,
            pageSize: 10,
            total: 100,
            showSizeChanger: true,
            showQuickJumper: false,
            position: ["bottomRight"],
          }}
        />
      </div>
    </div>
  );
};

export default BidCenterList;
