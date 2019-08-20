import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const { SECRETKEY } = process.env
const generateToken = (payload) => {        
    const token = jwt.sign(
        payload, SECRETKEY, { expiresIn: '24h' }
        )
    return token
}
export default generateToken