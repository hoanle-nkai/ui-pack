import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Table, Tabs, Tag } from "antd";
import { FaFilePdf, FaPen } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiStar } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdForum } from "react-icons/md";
import { RiAttachmentLine } from "react-icons/ri";
import { TbShare } from "react-icons/tb";

const BidCenterProjectDetail = () => {
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

            <div className="flex items-center gap-x-[10px] text-[#140001] mt-[30px]">
                <FaArrowLeftLong className="text-xl" />
                <span className="leading-[1] text-2xl">
                    Ferrocrete Builders Inc - Web Application Design
                </span>
            </div>

            <div className="mt-[30px] flex items-center justify-between">
                <div>
                    <Tabs defaultActiveKey="overview">
                        <Tabs.TabPane tab="Overview" key="overview"></Tabs.TabPane>
                        <Tabs.TabPane tab="Budget" key="budget"></Tabs.TabPane>
                        <Tabs.TabPane tab="Proposal" key="proposal"></Tabs.TabPane>
                        <Tabs.TabPane tab="Schedule" key="schedule"></Tabs.TabPane>
                    </Tabs>
                </div>
                <div className="flex items-center gap-x-[15px]">
                    <Button
                        className="!text-xs !border-none !shadow-none"
                        icon={
                            <FiStar className="text-[#C7C0C0] text-sm translate-y-[2px]" />
                        }
                        iconPosition="end"
                    >
                        Add to Favorites
                    </Button>
                    <Button className="!text-xs !rounded-full" type="primary">
                        Send Out Bid Invites
                    </Button>
                </div>
            </div>

            <div className="mt-[30px] grid grid-cols-3 gap-5">
                <div className="col-span-1 grid grid-cols-1 gap-5">
                    <div className="rounded-[20px] p-6 border border-[#DCE2F1] flex flex-col gap-y-4">
                        <span className="h-10 text-xl block border-b border-[#DCE2F1]">
                            Favorites
                        </span>

                        <div className="flex flex-col gap-y-5">
                            {Array(2)
                                .fill(0)
                                .map((_, index) => (
                                    <div key={index} className="flex flex-col gap-y-[6px]">
                                        <span className="text-xs text-[#310D12]">Bid Name</span>
                                        <span className="text-sm text-[#736365]">
                                            Ferrocrete Builders Inc - Web Application Design
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="rounded-[20px] p-6 border border-[#DCE2F1] flex flex-col gap-y-4">
                        <span className="h-10 text-xl block border-b border-[#DCE2F1]">
                            Client Info
                        </span>

                        <div className="flex flex-col gap-y-5">
                            {Array(5)
                                .fill(0)
                                .map((_, index) => (
                                    <div key={index} className="flex flex-col gap-y-[6px]">
                                        <span className="text-xs text-[#310D12]">Name</span>
                                        <span className="text-sm text-[#736365]">Oleo Bone</span>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="rounded-[20px] p-6 border border-[#DCE2F1] flex flex-col gap-y-4">
                        <span className="h-10 text-xl block border-b border-[#DCE2F1]">
                            Structural Engineer Info
                        </span>

                        <div className="flex flex-col gap-y-5">
                            {Array(5)
                                .fill(0)
                                .map((_, index) => (
                                    <div key={index} className="flex flex-col gap-y-[6px]">
                                        <span className="text-xs text-[#310D12]">Name</span>
                                        <span className="text-sm text-[#736365]">Oleo Bone</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-5">
                    <div className="rounded-[20px] p-6 border border-[#DCE2F1] flex flex-col gap-y-4 col-span-1">
                        <div className="h-6 pb-4 flex items-center justify-between border-b border-[#DCE2F1]">
                            <span className="text-xl">Plan Room</span>

                            <div className="flex items-center">
                                <Button
                                    icon={<FaPen />}
                                    className="!border-none !text-xs !text-[#4E3E40] !px-1 !shadow-none"
                                >
                                    Edit
                                </Button>
                                <Button
                                    icon={<RiAttachmentLine />}
                                    className="!border-none !text-xs !text-[#4E3E40] !px-1 !shadow-none"
                                >
                                    Attach
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-5">
                            {Array(5)
                                .fill(0)
                                .map((_, index) => (
                                    <div key={index} className="flex flex-col gap-y-[6px]">
                                        <span className="text-xs text-[#310D12]">Name</span>
                                        <span className="text-sm text-[#736365]">Oleo Bone</span>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="rounded-[20px] p-6 border border-[#DCE2F1] flex flex-col gap-y-4 col-span-1">
                        <div className="h-6 pb-4 flex items-center justify-between border-b border-[#DCE2F1]">
                            <span className="text-xl">Sale Documents</span>

                            <div className="flex items-center">
                                <Button
                                    icon={<FaPen />}
                                    className="!border-none !text-xs !text-[#4E3E40] !px-1 !shadow-none"
                                >
                                    Edit
                                </Button>
                                <Button
                                    icon={<RiAttachmentLine />}
                                    className="!border-none !text-xs !text-[#4E3E40] !px-1 !shadow-none"
                                >
                                    Attach
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-5">
                            {Array(3)
                                .fill(0)
                                .map((_, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-[24px_1fr] items-end gap-x-[6px]"
                                    >
                                        <FaFilePdf className="text-xl text-[#E5252A]" />
                                        <span className="text-xs text-[#5A4346]">
                                            Logistic Plan
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="col-span-2 flex flex-col gap-y-[10px]">
                        <div className="h-6 pb-4 flex items-center justify-between">
                            <span className="text-xl">Subcontractor</span>

                            <div className="flex items-center">
                                <Button
                                    icon={<TbShare />}
                                    className="!border-none !text-xs !text-[#4E3E40] !px-1 !shadow-none"
                                >
                                    Invite
                                </Button>
                                <Button
                                    icon={<FaPen />}
                                    className="!border-none !text-xs !text-[#4E3E40] !px-1 !shadow-none"
                                >
                                    Edit
                                </Button>
                            </div>
                        </div>

                        <Table
                            columns={[
                                {
                                    title: "Rebar",
                                    dataIndex: "rebar",
                                    key: "rebar",
                                    width: '27%',
                                },
                                {
                                    title: "Status",
                                    dataIndex: "status",
                                    key: "status",
                                    width: '27%',
                                    render: (text) => <Tag color="green" className="!rounded-full">{text}</Tag>,
                                },
                                {
                                    title: "Bid Amount",
                                    dataIndex: "bidAmount",
                                    key: "bidAmount",
                                    width: '27%',

                                },
                                {
                                    title: "Action",
                                    key: "action",
                                    width: '14%',
                                    align: "center",
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
                            ]}
                            dataSource={Array(4)
                                .fill(0)
                                .map((_, index) => ({
                                    key: index + 1,
                                    rebar: "Camblin",
                                    status: "Invited",
                                    bidAmount: "$3,456,650",
                                }))}
                            rowSelection={{ type: 'checkbox', columnWidth: 50 }}
                            pagination={false}
                            bordered
                            rootClassName="!rounded-xl !overflow-hidden border border-[#F2F2F2]"
                        />

                        <Table
                            columns={[
                                {
                                    title: "Rebar",
                                    dataIndex: "rebar",
                                    key: "rebar",
                                    width: '27%',
                                },
                                {
                                    title: "Status",
                                    dataIndex: "status",
                                    key: "status",
                                    width: '27%',
                                    render: (text) => <Tag color="red" className="!rounded-full">{text}</Tag>,
                                },
                                {
                                    title: "Bid Amount",
                                    dataIndex: "bidAmount",
                                    key: "bidAmount",
                                    width: '27%',

                                },
                                {
                                    title: "Action",
                                    key: "action",
                                    width: '14%',
                                    align: "center",
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
                            ]}
                            dataSource={Array(3)
                                .fill(0)
                                .map((_, index) => ({
                                    key: index + 1,
                                    rebar: "Camblin",
                                    status: "Sub",
                                    bidAmount: "$3,456,650",
                                }))}
                            rowSelection={{ type: 'checkbox', columnWidth: 50 }}
                            pagination={false}
                            bordered
                            rootClassName="!rounded-xl !overflow-hidden border border-[#F2F2F2]"
                        />

                        <Table
                            columns={[
                                {
                                    title: "Rebar",
                                    dataIndex: "rebar",
                                    key: "rebar",
                                    width: '27%',
                                },
                                {
                                    title: "Status",
                                    dataIndex: "status",
                                    key: "status",
                                    width: '27%',
                                    render: (text) => <Tag color="purple" className="!rounded-full">{text}</Tag>,
                                },
                                {
                                    title: "Bid Amount",
                                    dataIndex: "bidAmount",
                                    key: "bidAmount",
                                    width: '27%',

                                },
                                {
                                    title: "Action",
                                    key: "action",
                                    width: '14%',
                                    align: "center",
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
                            ]}
                            dataSource={Array(1)
                                .fill(0)
                                .map((_, index) => ({
                                    key: index + 1,
                                    rebar: "Camblin",
                                    status: "Not Bidding",
                                    bidAmount: "$3,456,650",
                                }))}
                            rowSelection={{ type: 'checkbox', columnWidth: 50 }}
                            pagination={false}
                            bordered
                            rootClassName="!rounded-xl !overflow-hidden border border-[#F2F2F2]"
                        />
                    </div>

                    <div className="rounded-[20px] p-6 border border-[#DCE2F1] flex flex-col gap-y-4 col-span-2">
                        <span className="h-10 text-xl block border-b border-[#DCE2F1]">
                            Project Note
                        </span>

                        <div className="flex flex-col gap-y-5">
                            <span className="text-sm text-[#44292C] leading-[2]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidCenterProjectDetail;
