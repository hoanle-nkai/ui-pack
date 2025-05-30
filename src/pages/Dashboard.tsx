import { BsThreeDots } from "react-icons/bs"
import { CgArrowTopRight } from "react-icons/cg"
import { GoDotFill } from "react-icons/go"
import { IoIosArrowRoundDown } from "react-icons/io"
import { IoNotificationsOutline } from "react-icons/io5"

const data = [
    {
        id: 'INV-2023',
        name: 'Azure Aura',
        email: 'azureaura@gmail.com',
        avatar: 'https://i.pravatar.cc/100?img=1',
        status: 'Refund',
    },
    {
        id: 'INV-2023',
        name: 'Azure Aura',
        email: 'azureaura@gmail.com',
        avatar: 'https://i.pravatar.cc/100?img=2',
        status: 'Refund',
    },
    {
        id: 'INV-2023',
        name: 'Azure Aura',
        email: 'azureaura@gmail.com',
        avatar: 'https://i.pravatar.cc/100?img=3',
        status: 'Refund',
    },
    {
        id: 'INV-2023',
        name: 'Azure Aura',
        email: 'azureaura@gmail.com',
        avatar: 'https://i.pravatar.cc/100?img=1',
        status: 'Refund',
    },
    {
        id: 'INV-2023',
        name: 'Azure Aura',
        email: 'azureaura@gmail.com',
        avatar: 'https://i.pravatar.cc/100?img=2',
        status: 'Refund',
    },
    {
        id: 'INV-2023',
        name: 'Azure Aura',
        email: 'azureaura@gmail.com',
        avatar: 'https://i.pravatar.cc/100?img=3',
        status: 'Refund',
    },
];


const Dashboard = () => {
    return (
        <div className="py-9 px-10">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-[10px]">
                    <h1 className="text-[#140001] text-[36px]">Welcome back, Richard</h1>
                    <span className="text-xl text-[#5A4C4C]">Provide a concise overview, project statuses, and financial summaries</span>
                </div>

                <div className="flex items-center">
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

            <div className="mt-[30px] grid grid-cols-3 gap-x-[22px]">
                <div className="p-5 rounded-[20px] border border-[#DCE2F1]">
                    <div className="flex items-center justify-between">
                        <span className="text-[#130203] text-lg">Active tasks</span>

                        <button className="size-7 rounded-full grid place-items-center bg-[#E91F27] text-white">
                            <CgArrowTopRight />
                        </button>
                    </div>

                    <div className="h-[22px] mt-[30px] flex">
                        <div className="w-3/5 bg-[#E91F27] rounded-full relative">
                            <div className="size-9 rounded-full border-[2px] border-white bg-[#f0bec1] grid place-items-center absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2">
                                <BsThreeDots className="text-white" />
                            </div>
                        </div>

                        <div className="flex-1 rounded-ee-full rounded-se-full bg-[repeating-linear-gradient(135deg,_rgba(255,0,0,0.1)_0px,_rgba(255,0,0,0.1)_8px,_transparent_8px,_transparent_16px)]"></div>
                    </div>

                    <div className="flex items-center justify-between mt-[26px]">
                        <span className="text-[#130203] text-xl font-semibold">95,634</span>

                        <div className="flex items-center gap-x-[5px]">
                            <span className="text-[#462728]">+5.46%</span>
                            <div className="flex items-center">
                                <IoIosArrowRoundDown className="rotate-180 text-[#038336] text-xl -mr-3" />
                                <IoIosArrowRoundDown className="text-[#038336] text-xl opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-[20px] border border-[#DCE2F1]">
                    <div className="flex items-center justify-between">
                        <span className="text-[#130203] text-lg">Active tasks</span>

                        <button className="size-7 rounded-full grid place-items-center bg-[#E91F27] text-white">
                            <CgArrowTopRight />
                        </button>
                    </div>

                    <div className="h-[22px] mt-[30px] flex">
                        <div className="w-3/5 bg-[#E91F27] rounded-full relative">
                            <div className="size-9 rounded-full border-[2px] border-white bg-[#f0bec1] grid place-items-center absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2">
                                <BsThreeDots className="text-white" />
                            </div>
                        </div>

                        <div className="flex-1 rounded-ee-full rounded-se-full bg-[repeating-linear-gradient(135deg,_rgba(255,0,0,0.1)_0px,_rgba(255,0,0,0.1)_8px,_transparent_8px,_transparent_16px)]"></div>
                    </div>

                    <div className="flex items-center justify-between mt-[26px]">
                        <span className="text-[#130203] text-xl font-semibold">95,634</span>

                        <div className="flex items-center gap-x-[5px]">
                            <span className="text-[#462728]">+5.46%</span>
                            <div className="flex items-center">
                                <IoIosArrowRoundDown className="rotate-180 text-[#038336] text-xl -mr-3" />
                                <IoIosArrowRoundDown className="text-[#038336] text-xl opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 rounded-[20px] border border-[#DCE2F1]">
                    <div className="flex items-center justify-between">
                        <span className="text-[#130203] text-lg">Active tasks</span>

                        <button className="size-7 rounded-full grid place-items-center bg-[#E91F27] text-white">
                            <CgArrowTopRight />
                        </button>
                    </div>

                    <div className="h-[22px] mt-[30px] flex">
                        <div className="w-3/5 bg-[#E91F27] rounded-full relative">
                            <div className="size-9 rounded-full border-[2px] border-white bg-[#f0bec1] grid place-items-center absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2">
                                <BsThreeDots className="text-white" />
                            </div>
                        </div>

                        <div className="flex-1 rounded-ee-full rounded-se-full bg-[repeating-linear-gradient(135deg,_rgba(255,0,0,0.1)_0px,_rgba(255,0,0,0.1)_8px,_transparent_8px,_transparent_16px)]"></div>
                    </div>

                    <div className="flex items-center justify-between mt-[26px]">
                        <span className="text-[#130203] text-xl font-semibold">95,634</span>

                        <div className="flex items-center gap-x-[5px]">
                            <span className="text-[#462728]">+5.46%</span>
                            <div className="flex items-center">
                                <IoIosArrowRoundDown className="rotate-180 text-[#038336] text-xl -mr-3" />
                                <IoIosArrowRoundDown className="text-[#038336] text-xl opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[30px] grid grid-cols-3 gap-x-[22px]">
                <div className="col-span-2 p-5 rounded-[20px] border border-[#DCE2F1]">

                </div>

                <div className="col-span-1 p-5 rounded-[20px] border border-[#DCE2F1] flex flex-col">
                    <span className="text-[#140001] text-2xl">Financial tracking</span>

                    <div className="mt-10">

                    </div>
                </div>
            </div>

            <div className="mt-[30px] grid grid-cols-3 gap-x-[22px]">
                <div className="col-span-1 p-5 rounded-[20px] border border-[#DCE2F1]">
                    <span className="text-[#140001] text-2xl">Compliance metrics</span>
                </div>

                <div className="col-span-2 p-5 rounded-[20px] border border-[#DCE2F1] flex flex-col">
                    <span className="text-[#140001] text-2xl">Access KPIs</span>

                    <div className="mt-10">

                    </div>
                </div>
            </div>

            <div className="mt-5 p-5 rounded-[20px] border border-[#DCE2F1]">
                <span className="text-[#140001] text-2xl">Compliance metrics</span>

                <div className="mt-5 grid grid-cols-[2fr_2fr_3fr] gap-x-5">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center gap-x-1">
                            <GoDotFill className="text-[#E91F27] text-xl" />
                            <span className="text-[#3F191A]">RFIs</span>
                        </div>

                        <div className="flex flex-col gap-y-[10px]">
                            {
                                Array(6).fill(0).map((_, index) => (
                                    <div key={index} className="rounded-[10px] h-9 grid grid-cols-[36px_1fr] overflow-hidden">
                                        <div className="bg-[#FFE7E8] grid place-items-center">
                                            <span className="font-black text-[#E91F27] text-lg">F</span>
                                        </div>

                                        <div className="border border-[#DCE2F1] border-l-0 rounded-[10px] rounded-s-none px-[10px] flex items-center">
                                            <span className="line-clamp-1 text-xs">Ferrocrete Builders Inc - Web Application Design</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center gap-x-1">
                            <GoDotFill className="text-[#007AFC] text-xl" />
                            <span className="text-[#3F191A]">COI expirations</span>
                        </div>

                        <div className="grid grid-cols-2 gap-[10px]">
                            <div className="rounded-[10px] border border-[#DCE2F1] flex flex-col overflow-hidden">
                                <div className="flex-1 aspect-video relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center" style={{
                                        backgroundImage: `url('https://placehold.co/600x400')`
                                    }} />
                                </div>
                                <div className="py-[10px] px-3">
                                    <span className="text-[10px] text-[#432829]">Ferrocrete Builders Inc</span>
                                </div>
                            </div>
                            <div className="rounded-[10px] border border-[#DCE2F1] flex flex-col overflow-hidden">
                                <div className="flex-1 aspect-video relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center" style={{
                                        backgroundImage: `url('https://placehold.co/600x400')`
                                    }} />
                                </div>
                                <div className="py-[10px] px-3">
                                    <span className="text-[10px] text-[#432829]">Ferrocrete Builders Inc</span>
                                </div>
                            </div>
                            <div className="rounded-[10px] border border-[#DCE2F1] flex flex-col overflow-hidden">
                                <div className="flex-1 aspect-video relative overflow-hidden">
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center" style={{
                                        backgroundImage: `url('https://placehold.co/600x400')`
                                    }} />
                                </div>
                                <div className="py-[10px] px-3">
                                    <span className="text-[10px] text-[#432829]">Ferrocrete Builders Inc</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center gap-x-1">
                            <GoDotFill className="text-[#F2F2F2] text-xl" />
                            <span className="text-[#3F191A]">Invoices</span>
                        </div>

                        <div className="overflow-x-auto rounded-xl border border-[#F2F2F2]">
                            <table className="min-w-full text-left text-sm">
                                <tbody className="divide-y divide-[#F2F2F2]">
                                    {data.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50 [&>*]:border-r [&>*]:border-[#F2F2F2] ">
                                            <td className="px-[10px] py-2 font-medium text-gray-800">{item.id}</td>
                                            <td className="px-[10px] py-2 flex items-center gap-2">
                                                <img
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-6 h-6 rounded-full"
                                                />
                                                <span className="text-gray-800">{item.name}</span>
                                            </td>
                                            <td className="px-[10px] py-2 text-gray-700">{item.email}</td>
                                            <td className="px-[10px] py-2 text-red-500 font-medium">
                                                <span className="inline-flex items-center gap-1">
                                                    <span className="w-2 h-2 rounded-full bg-red-500" />
                                                    {item.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard