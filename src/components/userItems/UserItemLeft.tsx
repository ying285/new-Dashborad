import React from "react";
import { Card } from "@mui/material";
import Image from "next/image";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountDetails from "./AccountDetails";
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import PaidIcon from '@mui/icons-material/Paid';
import { getUsersData } from "../../app/utility/data";

const UserItemLeft = async() => {
  const userData = await getUsersData();
  
  return (
    <Card className=" flex-1 mr-3 basis-1/3 p-10" variant="outlined">
      <div className="flex items-center">
        <Image
          src={userData.users[0].avatar}
          alt="user"
          width={20}
          height={20}
          className="object-cover rounded-full mr-3"
          style={{ width: "30px", height: "30px" }}
        />
        <div className="flex flex-col">
          <span className="font-bold">{userData.users[0].fullname}</span>
          <span className="text-[grey] text-[15px]">{userData.users[0].username}</span>
        </div>
      </div>

      <div className="mt-5">
        <span className="font-medium mt-3 text-[15px]">Account Details</span>
        
        <AccountDetails title={userData.users[0].tel} icon={<LocalPhoneIcon />} />
        <AccountDetails title={userData.users[0].email} icon={<MailOutlineIcon />} />
        <AccountDetails title={userData.users[0].transaction} icon={<PaidIcon />} />
        <AccountDetails title={userData.users[0].status} icon={<PauseCircleFilledIcon />} /> 
      </div>
    </Card>
  );
};

export default UserItemLeft;
