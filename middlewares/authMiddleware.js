import Joi from 'joi'

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
            return res.status(400).send({
                status: 400,
                error: result.error.details[0].message
            })
            
        }
        next();
    }
}

export default AuthValidator