import React from "react";
import UserItem from "./usersTable/page";
import { getUsersData } from "../utility/data";

const UserList = async () => {
  const data = await getUsersData();
  

  return (
    <div
     className='basis-4/5'>
      <UserItem data={data?.users} />
    </div>
  );
};

export default UserList;
