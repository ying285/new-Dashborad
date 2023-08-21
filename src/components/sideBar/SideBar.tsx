import React from "react";
import DashItem from "./DashItem";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const SideBar = () => {
  return (
    <div
      className=" bg-slate-100 min-h-[100vh] text-gray-500 hidden sm:block  md:w-[75px] xl:min-w-[250px]"
    >
      <div className="p-3 md:p-4 xl:p-10 ">
        <DashItem
          item="Home"
          icon={<LineStyleIcon />}
          active="bg-gray-300 "
        />
         <DashItem
          item="Users"
          icon={<PersonOutlineIcon />}
          active=''
        />
         <DashItem
          item="Create User"
          icon={<PersonAddAltIcon />}
          active=''
        />
         <DashItem
          item="Products"
          icon={<WarehouseIcon />}
          active=''
        />
        <DashItem
          item="Create Product"
          icon={<AddBusinessIcon />}
          active=''
        />
      </div>
    </div>
  );
};

export default SideBar;
