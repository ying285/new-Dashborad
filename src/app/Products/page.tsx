import React from 'react'
import ProductsTable from './productsTable/page'
import { getProductsData } from "../utility/data";



const Products = async() => {
  const productsData = await getProductsData();
  

  return (
    <div className='px-4'  >
        <ProductsTable data={productsData?.products}/>
        </div>
  )
}

export default Products