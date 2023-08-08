import React from "react";
import DashItem from "./DashItem";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const SideBar = () => {
  return (
    <div className="basis-1/5 bg-slate-100 h-[calc(100vh-50px)]  text-gray-500 sticky top-[50px] hidden md:block">
      <div className="p-10 ">
        <DashItem
          title="Dashborad"
          item1="Home"
          item2="Analytics"
          item3=""
          icon1={<LineStyleIcon />}
          icon2={<TimelineIcon />}
          icon3=""
          active="bg-gray-300 "
        />
        <DashItem
          title="User Menu"
          item1="Users"
          item2="Create User"
          item3=""
          icon1={<PersonOutlineIcon />}
          icon2={<PersonAddAltIcon />}
          icon3=""
          active=""
        />
        <DashItem
          title="Product Menu"
          item1="Products"
          item2="Create Product"
          item3=""
          icon1={<WarehouseIcon />}
          icon2={<AddBusinessIcon />}
          icon3=""
          active=""
        />
      </div>
    </div>
  );
};

export default SideBar;
