import db from '../models'
import uuidv4 from 'uuid/v4';

class Auth {
    static async signUp(req, res) {
        console.log(req.body, uuidv4());
        
        const text = `
        INSERT INTO users(id, first_name, last_name, phone_number, address, email, password)
        VALUES($1, $2, $3, $4, $5, $6, $7) returning *
        `;
        const values = [
            uuidv4(),
            req.body.first_name,
            req.body.last_name,
            req.body.phone_number,
            req.body.address,
            req.body.email,
            req.body.password
        ]
        try {
            const { rows } = await db.query(text, values)
            return res.status(201).send(rows[0])
        } catch(error) {
            return res.status(400).send(error)
        }
    }
}

export default Auth