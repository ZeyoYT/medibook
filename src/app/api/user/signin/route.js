import { NextRequest, NextResponse } from "next/server";
import {Surreal} from 'surrealdb.js';
import {connect} from '../../db';

import jwt from 'jsonwebtoken'




async function areCredentialsTrue(_data){

    const db = await connect();

    const contact = _data.contact;
    const password = _data.password;

    const user = await db.query(`
        SELECT * FROM user 
        WHERE 
        contact="${contact}"
        AND
        password="${password}";
    `);


    if(user){
        return [true, {user}];
    } else {
        return false;
    }

}

export async function POST(_request){
 
    const body = await _request.json();
    const user = await areCredentialsTrue(body);

    const filteredUser = user[1].user[0][0]; 


    if(filteredUser){

        const token = await jwt.sign(
            filteredUser, "secretofdumbledore",
        );

        return NextResponse.json({
            message: "Credentials are true",
            token: token,
            user
        });

    } else {

        return NextResponse.json({
            message: "Credentials Invalid",
            status: 403
        });

    }



}