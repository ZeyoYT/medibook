import { NextResponse } from "next/server";

export async function POST(){
    return NextResponse.json({
        message: "Welcome to route: http://localhost:3000/api/user/signup",
        method:"POST"
    });
}