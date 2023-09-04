import React from "react";
import { Card } from "@mui/material";
import Image from "next/image";
import ProductItemRightList from "./ProductItemRightList";
import { getProductById } from "../../app/utility/data";

interface Props {
  id: string;
}

const ProductItemRight: React.FC<Props> = async({ id }) => {
  const productData = await getProductById(id);
  
  return (
    <Card className="basis-1/3 p-10" variant="outlined">
      <div className="flex items-center mb-5">
        <Image
          src={productData.product.image}
          alt="iphone"
          width={50}
          height={50}
          className="rounded-full object-cover mr-12"
          style={{ width: "60px", height: "60px" }}
        />
        <span className='font-bold'>{productData.product.name}</span>
      </div>
      <ProductItemRightList title="Id" value={productData.product.id} />
      <ProductItemRightList title="Price" value={productData.product.price} />
      <ProductItemRightList title="In Stock" value={productData.product.stock} />
    </Card>
  );
};

export default ProductItemRight;
