import jwt from 'jsonwebtoken'
import ResponseMessage from '../helpers/response'
import AuthToken from '../helpers/token'

class ValidToken{
    
    static verifyToken(req, res, next) {
        const {authorization:token} = req.headers        
        try {            
            AuthToken.tokenPayload(token)
            
        } catch (error) {
            return res.status(401).send(
                ResponseMessage.responseError(401, error)
                )
            
        }
        next()
    }
}

export default ValidToken