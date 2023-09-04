import { NextResponse } from "next/server";
import connect from "../../../../backend/db/db";
import Products from "../../../../backend/models/Products";


export const GET =async(request, { params })=>{
  const { id } = params;
  try{
    await connect();
    const product=await Products.findById(id)
    return NextResponse.json({ product }, { status: 200 });
  }catch(error){
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }

}

export const PUT = async (request, { params }) => {
  const { id } = params;

  try {
    const {
      newName: name,
      newImage: image,
      newStock: stock,
      newPrice: price,
      newSales: sales
    } = await request.json();
    await connect();
    await Products.findByIdAndUpdate(id, {
      name,
      image,
      stock,
      price,
      sales
    });
    return NextResponse.json(
      { success: true, message: "The product has been updated" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};
