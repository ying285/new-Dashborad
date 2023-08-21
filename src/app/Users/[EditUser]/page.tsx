import React from "react";
import UserItemRight from "@/components/userItems/UserItemRight";
import UserItemLeft from "@/components/userItems/UserItemLeft";
import Link from "next/link";

interface Props {
  params: any;
}

const usersItem: React.FC<Props> = async ({ params }) => {
  const _id = params.EditUser;

  return (
    <div className="p-5  ">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-bold">Edit User</h1>
        <Link href={"/CreateUser"}>
          <button className="rounded-[5px] bg-[teal] px-2 w-[6rem] py-1 text-[#fff] text-[13px] cursor-pointer">
            Create
          </button>
        </Link>
      </div>
      <div className="flex mt-5">
        <UserItemLeft />
        <UserItemRight id={_id} />
      </div>
    </div>
  );
};

export default usersItem;
