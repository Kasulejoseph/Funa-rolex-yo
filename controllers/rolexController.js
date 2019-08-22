import db from '../models'
import uuidv4 from 'uuid/v4';



class Rolex {
    static async addRolex(req, res) {
        const {name, components, price, quantity, Description} = req.body
        const text = `
        INSERT INTO rolex(id, supplier_id, name, components, price, quantity, Description)
        VALUES($1, $2, $3, $4, $5, $6, $7) returning *
        `;
        const values = [
            uuidv4(),
            'ad140744-28e6-4e4a-bc6e-a3ed55841060',
            name,
            components,
            price,
            quantity,
            Description
        ]
        try {
            const { rows } = await db.query(text, values)
            return res.status(201).send({
                status: 201,
                message: 'successfully created',
                data: rows[0]
            })
            
        } catch (error) {
            return res.status(400).send(error)
        }

    }
}

export default Rolex