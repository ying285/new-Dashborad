import React from 'react'
import ProductsTable from './productsTable/page'
import { getProductsData } from "../utility/data";



const Products = async() => {
  const productsData = await getProductsData();
  

  return (
    <div className='basis-4/5'  >
        <ProductsTable data={productsData?.products}/>
        </div>
  )
}

export default Products