'use client'
import React from "react";
import  Link  from 'next/link';
import { MergeWords } from "@/app/utility/help";


interface Props{
title:string,
item1:string,
item2:string,
item3:string,
icon1:React.ReactNode,
icon2:React.ReactNode,
icon3:React.ReactNode,

active:string
}

const DashItem:React.FC<Props> = ({title, item1, item2, item3,  icon1, icon2, icon3,  active }) => {

 console.log(MergeWords(item2))
  return (
    <div >
    <h3 className=''>{title}</h3>
    <ul className='p-[5px] cursor-pointer text-sm/[17px] '>
        <li className={`p-[5px] flex items-center hover:bg-gray-200 rounded-md ${active} mb-2`}>
            {icon1}
            <p className='ml-2'><Link href={item1==='Home'? '/' :`/${MergeWords(item1)}`}>{item1}</Link></p>
        </li>
        <li className='p-[5px] flex items-center hover:bg-gray-200 rounded-md mb-2'>
            {icon2}
            <p className='ml-2'><Link href={`/${MergeWords(item2)}`}>{item2}</Link></p>
        </li>
        <li className='p-[5px] flex items-center hover:bg-gray-200 rounded-md'>
            <Link href={`/${MergeWords(item3)}`}>{icon3}</Link>
            <p className='ml-2'>{item3}</p>
        </li>
        
    </ul>
</div>
  )
}

export default DashItem