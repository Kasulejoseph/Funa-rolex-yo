import db from '../models'
import uuidv4 from 'uuid/v4';
import AllQueries from '../models/query'
import ResponseMessage from '../helpers/response';
import AuthToken from '../helpers/token'

class Rolex {
    static async addRolex(req, res) {
        const {
            name,
            components,
            price,
            quantity,
            Description
        } = req.body
        const tokenObj = AuthToken.tokenPayload(req.headers.authorization)
        const {
            id
        } = tokenObj.payload
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
            const {
                rows
            } = await db.query(AllQueries.insertRolex(), values)
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
    static async updateRolex(req, res) {
        const tokenObj = AuthToken.tokenPayload(req.headers.authorization)
        const {
            id: supplier_id
        } = tokenObj.payload
        const reqObj = req.body
        const findOneQuery = 'SELECT * FROM rolex WHERE id=$1 AND supplier_id = $2';

        try {
            const {
                rows
            } = await db.query(findOneQuery, [req.params.id, supplier_id])
            if (!rows) {
                return res.status(404).send(
                    ResponseMessage.responseError(404, 'Item not found')
                )
            }
            const values = [
                reqObj.name || reqObj.name,
                reqObj.components || reqObj.components,
                reqObj.price || reqObj.price,
                reqObj.quantity || reqObj.quantity,
                reqObj.Description || reqObj.Description,
                req.params.id,
                supplier_id

            ]
            const response = await db.query(AllQueries.updateRorelex(), values)
            if (!response.rows[0]) {
                return res.status(403).send(
                    ResponseMessage.responseError(403, 'Forbidden, You dont have enough permissions to perform this operation')
                )
            }            
            return res.status(200).send({
                status: 200,
                message: 'successfully updated',
                data: response.rows[0]
            })
        } catch (error) {
            if (error.routine === "string_to_uuid") {
                return res.status(422).send(
                    ResponseMessage.responseError(422, 'Invalid rolex ID')
                )
            }
            return res.status(422).send(
                ResponseMessage.responseError(422, error)
            )

        }
    }
}

export default Rolex