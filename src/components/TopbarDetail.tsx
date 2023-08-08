'use client'

import React,{useState} from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import Image from 'next/image';
import Link from 'next/link';

interface Props{
    username:string,
    avatar:string
}

const TopbarDetail:React.FC<Props> = ({username, avatar}) => {
   const[showMenu, setShowMenu]=useState(false)

  return (
    <>
     <nav className="className=' h-[50px] flex items-center justify-between w-[95%] mx-auto  px-5  shadow-gray-100 min-w-[520px] ">
        <div >
          <span className="text-xl font-bold text-cyan-700 ">Dashborad</span>
        </div> 

        <div className={`absolute  w-full min-w-[448px] z-50 bg-gray-400 text-white left-0  ${showMenu?'top-[99%]':'top-[-5000%]'} flex items-center px-5 md:hidden`}>
          <ul className=" flex  items-center gap-[4vw] gap-8 lg:flex-row flex-col py-[5%]">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/Analytics'>Analytics</Link></li>
            <li><Link href='/Users'>Users</Link></li>
            <li><Link href='/CreateUser'>Create User</Link></li>
            <li><Link href='/Produts'>Products</Link></li>
            <li><Link href='/CreateProduct'>Create Product</Link></li>
            
          </ul>
          </div>
          <div className=" flex items-center ">
              <span className="mr-3 text-[14px] hidden md:block">
                {username}
              </span>
              <Image
                src={avatar}
                width="20"
                height="20"
                alt="img"
                className="rounded-[50px] object-cover hidden md:block"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <MenuIcon className='md:hidden' onClick={()=>setShowMenu(prevShow=>!prevShow)} />
        
      </nav>
    </>
  )
}

export default TopbarDetail