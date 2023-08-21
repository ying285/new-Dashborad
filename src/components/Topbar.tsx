

import React from "react";
import TopbarDetail from "./TopbarDetail";
import { getUsersData } from "../app/utility/data";


const Topbar = async () => {
  const userData = await getUsersData();

  

  return (
    <div className='bg-[#fff] px-4'>
     <TopbarDetail username={userData.users[0].username} avatar={userData.users[0].avatar}/>
    
    </div>
  );
};

export default Topbar;
