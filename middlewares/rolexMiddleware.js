import Joi from 'joi'
import ResponseMessage from '../helpers/response'

class RolexValidator {
    static validate = (values, validations) => {
        return Joi.validate(values, validations);
    }

    static validateInputs(req, res, next) {
        const result = RolexValidator.validate(req.body, {
            name: Joi.string().trim().required(),
            components: Joi.array().required(),
            quantity: Joi.array().required(),
            price: Joi.array().required(),
            Description: Joi.string().trim().alphanum().required()
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

export default RolexValidator