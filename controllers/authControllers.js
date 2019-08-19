import db from '../models'
import uuidv4 from 'uuid/v4';

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
            return res.status(201).send(rows[0])
        } catch(error) {              
            if(error.routine = "_bt_check_unique") {
                return res.status(409).send({
                    status: 409,
                    error: 'Email already exist'
                })
            }            
            return res.status(400).send(error)
        }
    }
}

export default Auth