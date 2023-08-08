'use client'

import React from 'react'
import Image from 'next/image'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';

interface Props{
    image:string,
    name:string,
    username:string

}

const UserItem:React.FC<Props> = ({image, name, username}) => {
  return (
    <li className='flex justify-between items-center p-2 pb-4'>
     <Image src={image}  width='30' height='15' alt='user' className='rounded-full object-cover' style={{ width: '30px', height: '30px' }}/>  
    <div className=''> 
        <p className='font-bold text-[14px]'>{name}</p>
        <p className=' text-[12px] text-gray-400'>{username}</p>
    </div>
        
   
    <button className='bg-[#eeeef7] p-1 px-2 rounded text-[10px] text-[#555]'>
      <Link href='/Users'>
       <VisibilityIcon className='text-[18px] mr-1'/>
         Display
      </Link>
       
    </button>
    </li>
  )
}

export default UserItem