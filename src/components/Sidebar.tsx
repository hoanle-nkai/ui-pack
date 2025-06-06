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
        <button className="rounded-xl p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#FBEAEA] font-semibold bg-gradient-to-b from-[#1a0000] to-[#3a0000] backdrop-blur-sm border border-[#380100]">
          <RiDashboardFill className="text-[26px]" />
          <span className="text-start">Dashboard</span>
        </button>

        <button className="rounded-xl p-[10px] grid grid-cols-[24px_1fr] gap-x-3 items-center text-[#A79697]">
          <RiUserLine className="text-[26px]" />
          <span className="text-start">Employees</span>
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
