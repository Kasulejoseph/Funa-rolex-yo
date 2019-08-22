import db from '../models'
import uuidv4 from 'uuid/v4';
import AllQueries from '../models/query'
import ResponseMessage from '../helpers/response';
import AuthToken from '../helpers/token'

class Rolex {
    static async addRolex(req, res) {
        const {name, components, price, quantity, Description} = req.body
        const tokenObj = AuthToken.tokenPayload(req.headers.authorization)
        const { id } = tokenObj.payload
        const values = [
            uuidv4(),
            id,
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
            return res.status(422).send(
                ResponseMessage.responseError(422, error)
                )
        }

    }
}

export default Rolex