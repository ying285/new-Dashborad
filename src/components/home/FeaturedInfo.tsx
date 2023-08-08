import React,{FC}from 'react'
import Card from './Card'


interface Props{
    title:string,
    mainNumber:any,
    subNumber:string,
    icon:React.ReactNode,
}


const FeaturedInfo:React.FC<Props> = ({title, mainNumber, subNumber,icon}) => {
  return (
  
    <Card height=''>
        <div className='flex-1 px-12 py-5 cursor-pointer rounded-md '>
            <span className='text-[18px] '>{title}</span>
            <div className='my-2 '>
                <span className='font-bold text-xl'>{`${mainNumber}`}</span>
                <span className='ml-3 text-sm'>{subNumber} {icon}</span>
            </div>
            <span className='text-gray-400 text-[14px]'>Compared to last month</span>
        </div>
      </Card>  
   
  )
}

export default FeaturedInfo