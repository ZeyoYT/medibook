import { Surreal } from 'surrealdb.js';

export async function connect(){
    const db = new Surreal();

    await db.connect('ws://localhost:8000');
    await db.use({namespace: 'root', database: 'root'});

    const token = await db.signin({
        username: 'root',
        password: 'root',
    });

    await db.authenticate(token);
    
    return db
}