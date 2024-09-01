import { Surreal } from 'surrealdb.js';

export async function connect(){
    const db = new Surreal();

    await db.connect('https://surrealdb.zeyo.xyz');
    await db.use({namespace: 'root', database: 'root'});

    const token = await db.signin({
        username: 'root',
        password: 'rootSurreal',
    });

    await db.authenticate(token);
    
    return db
}