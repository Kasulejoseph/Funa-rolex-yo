import pool from './connection'

const userDB = () => {
    const createUser = 
    `
    CREATE TABLE IF NOT EXISTS users(
        id UUID PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        phone_number TEXT NOT NULL,
        address TEXT NOT NULL,
        email TEXT,
        password TEXT NOT NULL
    )
    `;

    pool.query(createUser).then(
        (res) => {
            console.log(res);
            pool.end()   
        }
    ).catch((err) => {
        console.log(err);
        pool.end()
    })
    
}

const dropTables = () => {
    const queryText = 'DROP TABLE IF EXISTS users';
    pool.query(queryText)
        .then((res) => {
            console.log(res);
            pool.end()  
        }).catch((err) => {
            console.log(err);
            pool.end()
        })
}

module.exports = {
    userDB,
    dropTables
}

require('make-runnable')