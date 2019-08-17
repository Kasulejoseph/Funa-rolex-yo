import express from 'express'
import Auth from './controllers/authControllers'
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
console.log(Auth.signUp);

app.post('/api/v1/auth/users', Auth.signUp)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

export default app