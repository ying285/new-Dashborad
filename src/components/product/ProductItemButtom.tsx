'use client'

import React,{useState} from "react";
import { Card } from "@mui/material";
import InputItem from "../../app/utility/InputItem";
import Selection from "@/app/utility/Selection";
import { useRouter } from "next/navigation";


interface Props {
  id: string;
}

const ProductItemButtom: React.FC<Props> = ({id}) => {
  const router = useRouter();
  const [updateProduct, setUpdateProduct] = useState({
    name: "",
    image: "",
    price: "",
    stock: "",
    sales:''
  });

  const UpdateProductHandler = (e: any) => {
    setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value });
  };

  const handleProductSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newName: updateProduct.name,
          newImage: updateProduct.image,
          newPrice: `$${updateProduct.price}`,
          newStock: updateProduct.stock,
          newSales: `${updateProduct.stock}pcs`
        }),
      });

      if (res.status === 200) {
        alert("The product has been updated!");
        router.push('/Products')
      }
    } catch (err) {
      console.log(err);
      
    }
  };
  return (
    <Card variant="outlined" className="flex-1 basis-2/3 p-10">
      <form className="flex justify-between" onSubmit={handleProductSubmit} >
        <div className='flex flex-wrap'>
        
        <div className=" w-[400px]">
          <InputItem
            title="Product name"
            type="text"
            placeholder="iphone"
            width="20rem"
            name='name'
            onChange={UpdateProductHandler}
          />
        </div>
          <div className=" w-[400px]">
            <InputItem
            title="Product image"
            type="text"
            placeholder="https://i.postimg.cc/YM6G9rvm/iphone.png"
            width="20rem"
            name='image'
            onChange={UpdateProductHandler}
          />
          </div>
          <div className=" w-[400px]">
            <InputItem
            title="Product Price"
            type="text"
            placeholder="$123"
            width="20rem"
            name='price'
            onChange={UpdateProductHandler}
          />
          </div>
          <div className="w-[400px]">
          <InputItem
            title="Sales"
            type="text"
            placeholder="54"
            width=""
            name='sales'
            onChange={UpdateProductHandler}
          />
        </div>
           
          <div className="w-[400px] mt-3">
            <Selection
              title="In Stock"
              name="stock"
              id="stock"
              value={updateProduct.stock}
              value1='None'
              value2="Yes"
              value3="No"
              onChange={UpdateProductHandler}
            />
          </div>
       
          <div className="w-[400px] mt-7">
          <button className="rounded-[5px] bg-[darkblue] px-2 w-[12rem] py-1.5 text-[#fff] text-[13px] cursor-pointer">
            Update
          </button>
        </div>
        </div>
        
      </form>
    </Card>
  );
};

export default ProductItemButtom;
