import express from 'express'
const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: 'Welcome home...'
    })
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

export default app