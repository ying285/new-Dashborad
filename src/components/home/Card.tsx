import React from 'react'

interface Props{
    children:React.ReactNode,
    height:string,
    
}

const Card:React.FC<Props> = ({children, height}) => {
  return (
    <div className={`border border-[1px] border-gray-200 p-5 rounded ${height} `}>{children}</div>
  )
}

export default Card