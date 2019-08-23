import express from 'express'
import routers from './routes'
const port = process.env.PORT || 5000
const app = express()

app.use(express.json());
app.use('/api/v1', routers);
app.use('*', (req, res) => {
    res.status(404).send({
        status: 404,
        error: 'Invalid url'
    })
})
app.listen(port, () => {
    console.log(`Running at port ${port}`)
})

export default app