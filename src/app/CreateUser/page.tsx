"use client";

import React, { useState } from "react";
import InputItem from "../utility/InputItem";
import Selection from "../utility/Selection";
import { useRouter } from "next/navigation";

const NewUser = () => {
  const router = useRouter();

  const [inputContent, setInputContent] = useState({
    username: "",
    fullname: "",
    email: "",
    status: "",
    transaction: "",
    avatar: "",
    phone: "",
    id: "",
  });

  const InputIdHandler = (e: any) => {
    setInputContent({ ...inputContent, [e.target.name]: e.target.value });
  };

  const handleUserSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: inputContent.id,
          username: inputContent.username,
          fullname: inputContent.fullname,
          email: inputContent.email,
          status: inputContent.status,
          transaction: `$${inputContent.transaction}`,
          avatar: inputContent.avatar,
          phone: inputContent.phone,
        }),
      });

      if (res.status === 201) {
        alert("The user has been added!");
        router.push('/Users')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-5 basis-4/5  ">
      <h1 className="font-bold text-[20px]">New User</h1>
      <form className="flex flex-wrap" onSubmit={handleUserSubmit}>
        <div className="w-[400px] mt-4 mr-3">
          <InputItem
            title="Id"
            placeholder="**"
            type="text"
            width="20rem"
            name="id"
            onChange={InputIdHandler}
          />
        </div>
        <div className="w-[400px] mt-4 mr-3">
          <InputItem
            title="User Name"
            type="text"
            placeholder="John"
            width=""
            name="username"
            onChange={InputIdHandler}
          />
        </div>
        <div className="w-[400px] mt-4 mr-3">
          <InputItem
            title="Full Name"
            type="text"
            placeholder="John Smith"
            width=""
            name="fullname"
            onChange={InputIdHandler}
          />
        </div>
        <div className="w-[400px] mt-4 mr-3">
          <InputItem
            title="Email"
            type="email"
            placeholder="john@gamil.com"
            width=""
            name="email"
            onChange={InputIdHandler}
          />
        </div>
        <div className="w-[400px] mt-4 mr-3">
          <InputItem
            title="Transaction"
            type="text"
            placeholder="123"
            width=""
            name="transaction"
            onChange={InputIdHandler}
          />
        </div>

        <div className="w-[400px] mt-4 mr-3">
          <InputItem
            title="Phone"
            type="text"
            placeholder="+46-082385634"
            width=""
            name="phone"
            onChange={InputIdHandler}
          />
        </div>
        <div className="w-[400px] mt-4 mr-3">
          <InputItem
            title="Avatar"
            placeholder="https://i.postimg.cc/CLNGwTdn/person4.png"
            type="text"
            width="20rem"
            name="avatar"
            onChange={InputIdHandler}
          />
        </div>

        <div className="mt-7 w-[400px] flex flex-col">
          <Selection
            title="Status"
            name="status"
            id="status"
            value={inputContent.status}
            value1='none'
            value2="Active"
            value3="Inactive "
            onChange={InputIdHandler}
          />
        </div>

        <div className="w-[400px] ml-0 mt-7 xxxl:mt-14 xxxl:ml-3 ">
          <button className="rounded-[5px] bg-[darkblue] px-2 w-[12rem] py-1.5 text-[#fff] text-[13px] cursor-pointer">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
