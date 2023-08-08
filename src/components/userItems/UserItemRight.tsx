"use client";

import React, { useState } from "react";
import InputItem from "../../app/utility/InputItem";
import { Card } from "@mui/material";
import Selection from "@/app/utility/Selection";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

const UserItemRight: React.FC<Props> = ({ id }) => {

  const router = useRouter();

  const [updateUser, setUpdateUser] = useState({
    username: "",
    fullname: "",
    email: "",
    status: "",
    transaction: "",
    avatar: "",
    phone: "",
  });

  const UpdateUserHandler = (e: any) => {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
  };

  const handleUserSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newUsername: updateUser.username,
          newFullname: updateUser.fullname,
          newEmail: updateUser.email,
          newStatus: updateUser.status,
          newTransaction: `$${updateUser.transaction}`,
          newAvatar: updateUser.avatar,
          newPhone: updateUser.phone,
        }),
      });

      if (res.status === 200) {
        alert("The item has been updated!");
        router.push('/Users')
      }
    } catch (err) {
      console.log(err);
      
    }
  };

  return (
    <Card className=" flex-1 basis-2/3 p-10" variant="outlined">
      <span className="text-[20px] font-bold">Edit</span>
      <form className="flex flex-col mt-3" onSubmit={handleUserSubmit}>
        <div className="flex flex-wrap">
          <div className="w-[400px]">
            <InputItem
              title="UserName"
              placeholder="anna01"
              type="text"
              width="20rem"
              name="username"
              onChange={UpdateUserHandler}
            />
          </div>
          <div className="w-[400px]">
            <InputItem
              title="Full Name"
              placeholder="Anna Becker"
              type="text"
              width="20rem"
              name="fullname"
              onChange={UpdateUserHandler}
            />
          </div>
          <div className="w-[400px]">
            <InputItem
              title="Email"
              placeholder="anna@gamil.com"
              type="text"
              width="20rem"
              name="email"
              onChange={UpdateUserHandler}
            />
          </div>
          <div className="w-[400px]">
            <InputItem
              title="Phone"
              placeholder="+46-08234759"
              type="text"
              width="20rem"
              name="phone"
              onChange={UpdateUserHandler}
            />
          </div>
          <div className="w-[400px]">
            <InputItem
              title="Transaction"
              placeholder="$123"
              type="text"
              width="20rem"
              name="transaction"
              onChange={UpdateUserHandler}
            />
          </div>
          <div className="w-[400px]">
            <InputItem
              title="Avatar"
              placeholder="https://i.postimg.cc/CLNGwTdn/person4.png"
              type="text"
              width="20rem"
              name="avatar"
              onChange={UpdateUserHandler}
            />
          </div>

          <div className="mt-3 w-[400px]">
            <Selection
              title="Status"
              name="status"
              id="status"
              value={updateUser.status}
              value1='none'
              value2="active"
              value3="Inactive"
              onChange={UpdateUserHandler}
            />
          </div>
        </div>

        <button
          className="border px-3 py-1 text-[14px] rounded-md cursor-pointer w-[10rem]
        bg-[darkblue] text-[#fff] mt-5"
        >
          Update
        </button>
      </form>
    </Card>
  );
};

export default UserItemRight;
