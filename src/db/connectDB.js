import db from './index.js'
import { join } from 'node:path';
import { readFileSync } from 'node:fs';

export async function connectDB(){
    try {
        const filePath = join ('src/db/init.sql')
        const sql = readFileSync(filePath,'utf-8')
        await db.query(sql)
        console.log('Tables created successfully');
    } catch (error) {
        console.log(`Error on creating tables: ${error}`);
    }
}
