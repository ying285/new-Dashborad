import { NextResponse} from 'next/server'
import connect from "../../../backend/db/db";
import Charts from "../../../backend/models/Charts";

export const GET = async (request) => {
    try {
       await connect();
       const charts = await Charts.find();
     
      return NextResponse.json({ charts}, {status: 200 });
     } catch (error) {
       console.log(error)
       return new NextResponse("Database Error", { status: 500 });
     }
}