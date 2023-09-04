import React from "react";
import { Card } from "@mui/material";
import Image from "next/image";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountDetails from "./AccountDetails";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PaidIcon from "@mui/icons-material/Paid";
import { getUserById } from "../../app/utility/data";

interface Props {
  id: string;
}

const UserItemLeft: React.FC<Props> = async ({ id }) => {
  const userData = await getUserById(id);

  return (
    <Card className=" flex-1 mr-3 basis-1/3 p-10" variant="outlined">
      <div className="flex items-center">
        <Image
          src={userData.user.avatar}
          alt="user"
          width={20}
          height={20}
          className="object-cover rounded-full mr-3"
          style={{ width: "30px", height: "30px" }}
        />
        <div className="flex flex-col">
          <span className="font-bold">{userData.user.fullname}</span>
          <span className="text-[grey] text-[15px]">
            {userData.user.username}
          </span>
        </div>
      </div>

      <div className="mt-5">
        <span className="font-medium mt-3 text-[15px]">Account Details</span>

        <AccountDetails title={userData.user.tel} icon={<LocalPhoneIcon />} />
        <AccountDetails
          title={userData.user.email}
          icon={<MailOutlineIcon />}
        />
        <AccountDetails title={userData.user.transaction} icon={<PaidIcon />} />
        <AccountDetails
          title={userData.user.status}
          icon={<PauseCircleFilledIcon />}
        />
      </div>
    </Card>
  );
};

export default UserItemLeft;
