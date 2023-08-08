'use client'

import React from 'react'

interface Props{
    type:string
    bgColor:string
}

const ButtonSm:React.FC<Props> = ({type, bgColor}) => {
  return (
    <div className={`${bgColor} p-1 px-2 rounded text-[10px] text-[#555] cursor-pointer`}>{type}</div>
  )
}

export default ButtonSm