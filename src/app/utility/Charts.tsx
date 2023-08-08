'use client'


import React from 'react'
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



interface Props{
  title: string,
  userData: any[],
  dataKey:string,
 
}

 
const Charts:React.FC<Props> = ({title, userData, dataKey}) => {
  return (
    
      <>
      <h3 className='mb-10 font-bold'>{title}</h3>
      
          <ResponsiveContainer width="100%" aspect={4/1}>
         <LineChart data={userData}>
           <XAxis dataKey="name" stroke='#585656' />
           <Line type="monotone" dataKey={dataKey} stroke='#d60c0c' />
           <Tooltip/>
            <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/> 
         </LineChart>
       </ResponsiveContainer>   
      </>
       
     


    
  )
}

export default Charts