import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        message: "Welcome to Route: http://localhost:3000/api/hospital/medadmin",
        method: "GET"
    });
}