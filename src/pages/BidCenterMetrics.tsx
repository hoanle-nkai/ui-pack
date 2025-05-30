import {
  ClusterOutlined,
  EnvironmentOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Input, Radio } from "antd";
import { CiFilter } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { MdForum } from "react-icons/md";
import { Cell, Legend, Pie, PieChart } from "recharts";

const data1 = [
  { name: "Qualifying", value: 6500000 },
  { name: "Proposal", value: 4500000 },
  { name: "Won", value: 2500000 },
  { name: "Lost", value: 1500000 },
];

const COLORS1 = ["#d42931", "#5586f2", "#be32f1", "#54ba29"];

const data2 = [
  { name: "Parking Structure", value: 400 },
  { name: "Podium Residential", value: 300 },
  { name: "Full Concrete Residential", value: 200 },
];

const COLORS2 = ["#958de6", "#1f1f1f", "#e2dffe"];

const BidCenterMetrics = () => {
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

      <div className="mt-5 flex flex-col gap-y-5">
        <div className="grid grid-cols-2 gap-x-5">
          <div className="rounded-[20px] p-6 border border-[#DCE2F1] flex flex-col gap-y-4">
            <span className="h-10 text-xl block border-b border-[#DCE2F1]">
              Opportunity
            </span>

            <div className="flex justify-center items-center">
              <PieChart width={300} height={300}>
                <Pie
                  data={data1}
                  innerRadius={80}
                  outerRadius={110}
                  fill="#8884d8"
                  paddingAngle={1}
                  dataKey="value"
                  labelLine={false}
                  startAngle={90}
                  endAngle={-270}
                >
                  {data1.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS1[index]} />
                  ))}
                </Pie>
                {/* <Tooltip formatter={(v) => `$${(v / 1e6).toFixed(2)}M`} /> */}
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  iconSize={8}
                  wrapperStyle={{
                    fontSize: "12px",
                    marginTop: "8px",
                    color: "#230C0D",
                  }}
                />
              </PieChart>
            </div>
          </div>

          <div className="rounded-[20px] p-6 border border-[#DCE2F1] flex flex-col gap-y-4">
            <span className="h-10 text-xl block border-b border-[#DCE2F1]">
              Leads
            </span>

            <div className="flex justify-center items-center flex-1">
              <PieChart width={250} height={250}>
                <Pie
                  data={data2}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                  stroke="#fff"
                  strokeWidth={2}
                  startAngle={90}
                  endAngle={-270}
                >
                  {data2.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS2[index]} />
                  ))}
                </Pie>
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{
                    fontSize: "14px",
                    marginTop: "16px",
                    transform: "translateY(12px)",
                  }}
                />
              </PieChart>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] p-6 border border-[#DCE2F1] flex flex-col gap-y-4">
          <span className="h-10 text-xl block border-b border-[#DCE2F1]">
            Favorites
          </span>

          <div className="flex flex-col gap-y-5">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="grid grid-cols-[1fr_20px]">
                  <span className="text-[#4E3E40] text-sm">
                    Ferrocrete Builders Inc - Web Application Design
                  </span>
                  {index % 2 ? (
                    <FaStar className="text-[#E91F27]" />
                  ) : (
                    <FiStar className="text-[#C7C0C0]" />
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className="rounded-[20px] p-6 border border-[#DCE2F1] flex flex-col gap-y-4">
          <span className="h-10 text-xl block border-b border-[#DCE2F1]">
            Subcontractor
          </span>

          <div className="flex flex-col gap-y-5">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="grid grid-cols-[1fr_60px]">
                  <span className="text-[#4E3E40] text-sm">
                    Ferrocrete Builders Inc - Web Application Design
                  </span>
                  <span className="text-[#4E3E40] text-sm">$1,568</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidCenterMetrics;
