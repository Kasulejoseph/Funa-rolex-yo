import Joi from 'joi'
import ResponseMessage from '../helpers/response'

class AuthValidator {
    static validate = (values, validations) => {
        return Joi.validate(values, validations);
    }

    static signUp(req, res, next) {
        const result = AuthValidator.validate(req.body, {
            first_name: Joi.string().trim().alphanum().required(),
            last_name: Joi.string().trim().alphanum().required(),
            address: Joi.string().trim().alphanum().required(),
            email: Joi.string().email().required(),
            phone_number: Joi.number().min(9),
            password: Joi.string().trim().alphanum().required()
        })
        if(result.error) {  
            const { message } = result.error.details[0]                 
            return res.status(400).send(
                ResponseMessage.responseError(400, message)
            )
            
        }
        next();
    }

    static logIn(req, res, next) {        
        const result = AuthValidator.validate(req.body, {
            email: Joi.string().email(),
            password: Joi.string().trim().alphanum().required()
        })
        if(result.error) {
            const { message } = result.error.details[0]
            return res.status(400).send(
                ResponseMessage.responseError(400, message)
            )
        }
        next();
    }
}

export default AuthValidator