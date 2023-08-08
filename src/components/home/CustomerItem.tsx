'use client'

import React from "react";
import Image from "next/image";
import ButtonSm from "./ButtonSm";

interface Props{
    name:string,
    image:string,
    tel:string,
    amount:string,
    type:string,
    bgColor:string
}

const CustomerItem:React.FC<Props> = ({name,image,  amount, type,tel, bgColor}) => {
  return (
    
    <tr >
      <td className=' pl-15 flex items-center pb-3'>
        <Image
          src={image}
          alt="customer"
          width={20}
          height={20}
          className="rounded-full mr-3 object-cover"
          style={{ width: '30px', height: '30px' }}
        />
        <span className='text-[14px] mr-14'>{name}</span>
      </td>
       <td className='pr-[50px] pb-3 text-[14px]'>{tel}</td> 
      <td className='pr-[80px] pb-3 text-[14px]'>{amount}</td>
      <td className='pb-5'>
        <ButtonSm type={type} bgColor={bgColor} />
      </td>
    </tr>
    
  );
};

export default CustomerItem;
