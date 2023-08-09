'use client'

import React, {useState} from "react";
import InputItem from "@/app/utility/InputItem";
import Selection from "../utility/Selection";
import { useRouter } from "next/navigation";

const NewProducts = () => {
  const router = useRouter();

  const [createProduct, setCreateProduct] = useState({
    id:'',
    name: "",
    image: "",
    price: "",
    stock: "",
    sales:''
  });

  const createProductHandler = (e: any) => {
    setCreateProduct({ ...createProduct, [e.target.name]: e.target.value });
  };

  const handleProductSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/products`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id:createProduct.id,
          name: createProduct.name,
          image: createProduct.image,
          price: `$${createProduct.price}`,
          stock: createProduct.stock,
          sales: `${createProduct.sales}pcs`
        }),
      });

      if (res.status === 201) {
        alert("The product has been created!");
        router.push('/Products')
      }
    } catch (err) {
      console.log(err);
      
    }
  };
  return (
    <div className="p-5 basis-4/5  ">
      <h1>New Product</h1>
      <form className="flex flex-wrap " onSubmit={handleProductSubmit}>
        <div className="w-[400px] mr-3">
          <InputItem
            title="Product Id"
            type="text"
            placeholder="**"
            width=""
            name='id'
            onChange={createProductHandler}
          />
        </div>
        <div className="w-[400px] mr-3">
          <InputItem
            title="Product Name"
            type="text"
            placeholder="iphone"
            width=""
            name='name'
            onChange={createProductHandler}
          />
        </div>
        <div className="w-[400px] mr-3">
          <InputItem
            title="Product Price"
            type="text"
            placeholder="123"
            width=""
            name='price'
            onChange={createProductHandler}
          />
        </div>
        <div className="w-[400px] mr-3">
          <InputItem
            title="Product Image"
            type="text"
            placeholder="https://i.postimg.cc/YM6G9rvm/iphone.png"
            width=""
            name='image'
            onChange={createProductHandler}
          />
        </div>
        <div className="w-[400px] mr-3">
          <InputItem
            title="Sales"
            type="text"
            placeholder="54"
            width=""
            name='sales'
            onChange={createProductHandler}
          />
        </div>
        

        
        <div className="mt-3 w-[400px] mr-3">
          <Selection
            title="In Stock"
            name="stock"
            id="stock"
            value={createProduct.stock}
            value1='None'
            value2="Yes"
            value3="No"
            onChange={createProductHandler}
          />
        </div>
        <div className="w-[400px] mt-7">
          <button className="rounded-[5px] bg-[darkblue] px-2 w-[12rem] py-1.5 text-[#fff] text-[13px] cursor-pointer">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProducts;
