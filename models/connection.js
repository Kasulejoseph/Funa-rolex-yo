import { Pool } from 'pg'
import dotenv from 'dotenv'
import userDB from './auth'
dotenv.config()
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

pool.on('connect', (client) => {
    console.log('connected to the db');
    
})


export default pool
