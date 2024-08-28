import { NextResponse } from "next/server";

export async function POST(){
    return NextResponse.json({
        message: "Welcome to Route: http://localhost:3000/api/user/signin",
        method: "POST"
    });
}