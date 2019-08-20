import db from '../models'
import uuidv4 from 'uuid/v4';
import ResponseMessage from '../helpers/response';
import generateToken from '../helpers/token'

class Auth {
    static async signUp(req, res) {
        const {first_name, last_name, phone_number, address, email, password} = req.body
        const text = `
        INSERT INTO users(id, first_name, last_name, phone_number, address, email, password)
        VALUES($1, $2, $3, $4, $5, $6, $7) returning *
        `;
        const values = [
            uuidv4(),
            first_name,
            last_name,
            phone_number,
            address,
            email,
            password
        ]
        try {
            const { rows } = await db.query(text, values)
            return res.status(201).send({
                status: 201,
                message: 'successfully created',
                data: rows[0]
            })
        } catch(error) {              
            if(error.routine = "_bt_check_unique") {
                return res.status(409).send(
                    ResponseMessage.responseError(409, 'Email already exist')
                )
            }            
            return res.status(400).send(error)
        }
    }

    static async logIn(req, res){ 
        const { email, password } = req.body
        if (!email && !password) {
            return res.status(422).send(
                ResponseMessage.responseError(422, 'Email or password fields is missing')
            )
        }
        const queryText = `
        SELECT * FROM users WHERE email = $1 AND password = $2
        `        
        try {
            const { rows } = await db.query(queryText, [email, password])
            if (!rows[0]) {
                return res.status(404).send(
                    ResponseMessage.responseError(404, 'Login failed, double check your login credentials')
                )
            }
            const token = generateToken({payload: email})
            return res.status(200).send({
                status: 200,
                message: 'successfully logged in',
                data: {
                    token: token
                }
            })
            
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}

export default Auth