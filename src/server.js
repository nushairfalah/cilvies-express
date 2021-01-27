const express = require('express')
const userRoute = require('./routes/users')

const app = express()

const db = require('./model')
db.sequelize.sync({}).then(() => {
    console.log("Drop and re-sync db.")
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log('Incoming request from', req.ip)
    next();
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    next()
})

app.use('/users', userRoute)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})
