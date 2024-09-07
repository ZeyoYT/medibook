import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(_request){

    const body = await _request.json();
    const decoded = jwt.verify(body.token, "secretofdumbledore");

    if(!decoded){
        return NextResponse.error(new Error("Invalid token"));
    }

    return NextResponse.json({
        decoded
    });


}