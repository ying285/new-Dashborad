import React from "react";
import { Card } from "@mui/material";
import Image from "next/image";
import ProductItemRightList from "./ProductItemRightList";
import { getProductsData } from "../../app/utility/data";

const ProductItemRight = async() => {
  const productData = await getProductsData();
  return (
    <Card className="basis-1/3 p-10" variant="outlined">
      <div className="flex items-center mb-5">
        <Image
          src={productData.products[0].image}
          alt="iphone"
          width={50}
          height={50}
          className="rounded-full object-cover mr-12"
          style={{ width: "60px", height: "60px" }}
        />
        <span className='font-bold'>{productData.products[0].name}</span>
      </div>
      <ProductItemRightList title="Id" value={productData.products[0].id} />
      <ProductItemRightList title="Price" value={productData.products[0].price} />
      <ProductItemRightList title="In Stock" value={productData.products[0].stock} />
    </Card>
  );
};

export default ProductItemRight;
