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
     <nav className="className=' h-[50px] flex items-center justify-between 
      mx-auto    shadow-gray-100 ">
        <div className='w-[20px]'>
          <span className="text-xl font-bold text-cyan-700 ">Dashborad</span>
        </div> 

        <div className={`absolute  w-[150%] z-50 bg-gray-400 text-white left-0  ${showMenu?'top-[5.5%]':'top-[-5000%]'} flex items-center px-5 sm:hidden xs:w-full`}>
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
              <span className="mr-3 text-[14px] hidden sm:block">
                {username}
              </span>
              <Image
                src={avatar}
                width="20"
                height="20"
                alt="img"
                className="rounded-[50px] w-[20px] object-cover hidden sm:block"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <MenuIcon className=' w-[20px] sm:hidden' onClick={()=>setShowMenu(prevShow=>!prevShow)} />
        
      </nav>
    </>
  )
}

export default TopbarDetail