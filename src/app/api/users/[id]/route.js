import { NextResponse } from "next/server";
import connect from "../../../../backend/db/db";
import Users from "../../../../backend/models/Users";

export const PUT = async (request, { params }) => {
  const { id } = params;

  try {
    const {
      newUsername: username,
      newFullname: fullname,
      newEmail: email,
      newPhone: phone,
      newAvatar: avatar,
      newStatus: status,
      newTransaction: transaction,
    } = await request.json();
    await connect();
    await Users.findByIdAndUpdate(id, {
      username,
      fullname,
      email,
      phone,
      avatar,
      status,
      transaction,
    });
    return NextResponse.json(
      { success: true, message: "The user has been updated" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};
