import { FiBookmark, FiCalendar } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUserRoundCheck, LuUserRoundSearch } from "react-icons/lu";
import { PiNotepad, PiPackageLight } from "react-icons/pi";
import { RiDashboardFill, RiUserLine } from "react-icons/ri";
import { WiTime5 } from "react-icons/wi";
import Logo from "../assets/logo.svg";

const Sidebar = () => {
    return (
        <aside className="fixed top-0 left-0 bottom-0 w-[320px] overflow-y-auto py-[30px] pl-5 pr-14 bg-[#0D0B0B]">
            <div className="pb-[30px] border-b border-b-[#433939]">
                <img src={Logo} alt="" className="w-full" />
            </div>

            <div className="mt-10 flex flex-col gap-y-5">
                <button className="rounded-xl relative overflow-hidden h-[46px] border border-[#795656]/30">
                    <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
                        <div className="h-2 left-[15px] right-[15px] top-0 absolute bg-gradient-to-b from-red-600/0 to-red-600 rounded-bl-xl rounded-br-xl" />
                        <div className="h-2 bottom-0 left-[15px] right-[15px] absolute bg-gradient-to-b to-red-600/0 from-red-600 rounded-tl-xl rounded-tr-xl" />
                    </div>

                    <div className="absolute top-0 left-0 right-0 bottom-0 p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#FBEAEA] font-semibold z-10 shadow-[inset_0px_2px_6px_0px_rgba(121,86,86,0.13)] backdrop-blur-lg">
                        <RiDashboardFill className="text-[26px]" />
                        <span className="text-start">Dashboard</span>
                    </div>
                </button>

                {/* <button className="rounded-xl relative overflow-hidden h-[46px] border border-[#795656]/30"> */}
                <button className="rounded-xl relative overflow-hidden h-[46px]">
                    {/* <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
                        <div className="h-2 left-[15px] right-[15px] top-0 absolute bg-gradient-to-b from-red-600/0 to-red-600 rounded-bl-xl rounded-br-xl" />
                        <div className="h-2 bottom-0 left-[15px] right-[15px] absolute bg-gradient-to-b to-red-600/0 from-red-600 rounded-tl-xl rounded-tr-xl" />
                    </div> */}

                    {/* <div className="absolute top-0 left-0 right-0 bottom-0 p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#FBEAEA] font-semibold z-10 shadow-[inset_0px_2px_6px_0px_rgba(121,86,86,0.13)] backdrop-blur-lg"> */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#A79697] font-semibold z-10">
                        <RiUserLine className="text-[26px]" />
                        <span className="text-start">Employees</span>
                    </div>
                </button>

                <button className="rounded-xl p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#A79697]">
                    <LuUserRoundCheck className="text-[26px]" />
                    <span className="text-start">CRM</span>
                </button>

                <button className="rounded-xl p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#A79697]">
                    <FiBookmark className="text-[26px]" />
                    <span className="text-start">Insurance</span>
                </button>

                <button className="rounded-xl p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#A79697]">
                    <PiNotepad className="text-[26px]" />
                    <span className="text-start">Project</span>
                </button>

                <button className="rounded-xl p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#A79697]">
                    <FiCalendar className="text-[26px]" />
                    <span className="text-start">Invoice</span>
                </button>

                <button className="rounded-xl p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#A79697]">
                    <LuUserRoundSearch className="text-[26px]" />
                    <span className="text-start">Human Resources</span>
                </button>

                <button className="rounded-xl p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#A79697]">
                    <WiTime5 className="text-[26px]" />
                    <span className="text-start">Timeclock</span>
                </button>

                <button className="rounded-xl p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#A79697]">
                    <PiPackageLight className="text-[26px]" />
                    <span className="text-start">Inventory</span>
                </button>

                <button className="rounded-xl p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#A79697]">
                    <IoSettingsOutline className="text-[26px]" />
                    <span className="text-start">Settings</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
