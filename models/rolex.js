import pool from './connection'
import AllQueries from './query'

class RolexDB {
     createRolex() {
        return pool.query(AllQueries.rolexTable()).then((res)=> {
            console.log(res);
            pool.end()
        }).catch((error) => {
            console.log(error);
            pool.end();
            
        })
    }
    updateRolex() {
        return pool.query(AllQueries.updateRorelex()).then((res) => {
            console.log(res);
            pool.end()
        }).catch((error) => {
            console.log(error);
            pool.end();
        })
    }
}

export default RolexDB