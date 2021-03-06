import express from 'express';
import Auth from '../controllers/authControllers'
import Rolex from '../controllers/rolexController'
import AuthValidator from '../middlewares/authMiddleware'
import RolexValidator from '../middlewares/rolexMiddleware'
import ValidToken from '../middlewares/validateToken'

const routers = express.Router()

routers.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'Welcome home...'
    })
})
routers.post('/auth/users', AuthValidator.signUp, Auth.signUp).all((req, res) => {
    res.status(405).send({
        status: 405,
        error: 'Method not around on this route'
    })
})

routers.post('/rolex', ValidToken.verifyToken, RolexValidator.validateInputs,  Rolex.addRolex).all((req, res) => {
    res.status(405).send({
        status: 405,
        error: 'Method not around on this route'
    })
})
routers.post('/auth/login', AuthValidator.logIn, Auth.logIn).all((req, res) => {
    res.status(405).send({
        status: 405,
        error: 'Method not around on this route'
    })
})

export default routers
