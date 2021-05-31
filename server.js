const express = require('express')
const port = 32423
const app = express()


app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.listen(port, () => {
    console.log('server is running on: ', port)
})