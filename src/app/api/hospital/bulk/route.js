import { NextResponse } from "next/server";
import { connect } from "../../db";

export async function GET(_request){

    const body = await _request.json();
    const db = await connect();



    return NextResponse.json({
        message: "Welcome to Route: http://localhost:3000/api/hospital/bulk",
        method: "GET"
    });
}
