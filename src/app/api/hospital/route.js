import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        message: "Welcome to Route: http://localhost:3000/api/hospital",
        method: "PUT"
    });
}

export async function POST(){
    return NextResponse.json({
        message: "Welcoem to Route: http://localhost:3000/api/hospital",
        method: "POST"
    });
}

export async function PUT(){
    return NextResponse.json({
        message: "Welcoem to Route: http://localhost:3000/api/hospital",
        method: "PUT"
    });
}
