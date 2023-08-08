import { NextResponse } from "next/server";
import connect from "../../../backend/db/db";
import Products from "../../../backend/models/Products";

export const GET = async (request) => {
  try {
    await connect();

    const products = await Products.find();

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    await connect();
    await Products.findByIdAndDelete(id);
    return NextResponse.json(
      { success: true, message: "Done" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const { name, image, stock, id, price, sales} =
    await request.json();

  const newProduct = new Products({
    name,
    image,
    stock,
    id,
    price,
    sales
    
  });

  try {
    await connect();
    await newProduct.save();
    return new NextResponse("New product has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
