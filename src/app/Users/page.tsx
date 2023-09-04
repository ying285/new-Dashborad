import React from "react";
import UserItem from "./usersTable/page";
import { getUsersData } from "../utility/data";

const UserList = async () => {
  const data = await getUsersData();
  console.log('ying')
  console.log(data)
  
  

  return (
    <div
     className='px-4'>
      <UserItem data={data?.users} />
    </div>
  );
};

export default UserList;
