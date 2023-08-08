import React from 'react'

interface Props{
    title:string,
    icon:React.ReactNode,
}

const AccountDetails:React.FC<Props> = ({title, icon}) => {
  return (
    <div className='mt-3 text-[14px] mb-3'>
                {icon}
            <span className="ml-3">{title}</span>
            </div>
  )
}

export default AccountDetails