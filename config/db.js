import mysql from 'mysql';
import { config } from 'dotenv';

config();

export const connectionPool = mysql.createPool({
    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    password: '',
    database: process.env.DB_NAME,
    

})

