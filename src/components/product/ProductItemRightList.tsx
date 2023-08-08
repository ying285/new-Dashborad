import React from 'react'

interface Props{
    title:string,
    value:string
}

const ProductItemRightList:React.FC<Props> = ({title, value}) => {
  return (
    <div className='flex justify-between w-40'>
            <span>{title}:</span>
            <span className='text-[grey] text-[14px]'>{value}</span>
        </div>
  )
}

export default ProductItemRightList