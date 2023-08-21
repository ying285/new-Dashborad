import React from "react";
import Link from "next/link";
import ProductItemRight from "@/components/product/ProductItemRight";
import ProductItemButtom from "@/components/product/ProductItemButtom";

interface Props {
  params: any;
}

const ProductsList: React.FC<Props> = async ({ params }) => {
  const _id = params.productsList;
  
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-bold">Product</h1>
        <Link href={"/CreateProduct"}>
          <button className="rounded-[5px] bg-[teal] px-2 w-[6rem] py-1 text-[#fff] text-[13px] cursor-pointer">
            Create
          </button>
        </Link>
      </div>
      <div className="flex mt-5">
        <ProductItemRight />
        <ProductItemButtom id={_id} />
      </div>
    </div>
  );
};

export default ProductsList;
