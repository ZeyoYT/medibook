import { NextResponse } from "next/server";
import { connect } from "../../db";

const db = await connect();


async function isContactValid(contact){
    const user = await db.query(`
        SELECT * FROM user 
        WHERE 
        contact="${contact}";
    `);
    
    if(user[0].length == 0 ){
        return true;
    } else {
        return false;
    }
}

export async function POST(_request){

    const body = await _request.json();

    if(await isContactValid(body.contact)){

        try{

            const query = `
                INSERT INTO user {
                    full_name: '${body.fullName}',
                    email: '${body.email}',
                    contact: '${body.contact}',
                    address: '${body.address}',
                    password: '${body.password}',
                    records_ids: [],
                    requests: [] 
                };
            `;

            console.log(body.requests);

            console.log(query);
            const user = await db.query(query);

            return NextResponse.json({
                message: "User registered successfully",
                user
            });
       } catch(e){
            return NextResponse.json({
                e
            });
       }

    } else {
        return NextResponse.json({
            message: "Number already registered",
            status: 403
        });
    }
    
}