import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const { SECRETKEY } = process.env
class AuthToken {
    static generateToken(payload) {        
        const token = jwt.sign(
            payload, SECRETKEY, { expiresIn: '24h' }
            )
        return token
    }
    static tokenPayload(token) {
        return jwt.verify(token, SECRETKEY)
    }

}
export default AuthToken