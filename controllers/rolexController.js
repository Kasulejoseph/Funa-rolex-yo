import db from '../models'
import uuidv4 from 'uuid/v4';
import AllQueries from '../models/query'



class Rolex {
    static async addRolex(req, res) {
        const {name, components, price, quantity, Description} = req.body
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
            const { rows } = await db.query(AllQueries.insertRolex(), values)
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