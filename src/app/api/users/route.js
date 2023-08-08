import { NextResponse } from "next/server";
import connect from "../../../backend/db/db";
import Users from "../../../backend/models/Users";

export const GET = async (request) => {
  try {
    await connect();

    const users = await Users.find();

    return NextResponse.json({ users }, { status: 200 });
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
    await Users.findByIdAndDelete(id);
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
  const { username, fullname, email, status, transaction, avatar, phone, id } =
    await request.json();

  const newUser = new Users({
    username,
    fullname,
    email,
    status,
    transaction,
    avatar,
    phone,
    id,
  });

  try {
    await connect();
    await newUser.save();
    return new NextResponse("New user has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
