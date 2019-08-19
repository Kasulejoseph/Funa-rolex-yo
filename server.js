import express from 'express'
import Auth from './controllers/authControllers'
import AuthValidator from './middlewares/authMiddleware'
const port = process.env.PORT || 3000
const app = express()
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'Welcome home...'
    })
})
app.post('/api/v1/auth/users', AuthValidator.signUp, Auth.signUp).all((req, res) => {
    res.status(405).send({
        status: 405,
        error: 'Method not around on this route'
    })
})

app.use('*', (req, res) => {
    res.status(404).send({
        status: 404,
        error: 'Invalid url'
    })
})
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

export default app