import pool from './connection'
import AllQueries from './query'

const userDB = () => {    
    return pool.query(AllQueries.createUser()).then(
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
    pool.query(AllQueries.dropTable())
        .then((res) => {
            console.log(res);
            pool.end()  
        }).catch((err) => {
            console.log(err);
            pool.end()
        })
}

const createRolex =() => {
    return pool.query(AllQueries.rolexTable()).then((res)=> {
        console.log(res);
        pool.end()
    }).catch((error) => {
        console.log(error);
        pool.end();
        
    })
}
const createTables = () => {
    // RolexDB.createRolex;
    userDB()
}

export default  createRolex

require('make-runnable')
