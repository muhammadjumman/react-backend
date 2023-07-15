const express = require('express')
const path = require('path')
const routes = require('./routes/routes')

const app = express()

// To do - setup database

// ToDo logger, express.json(), express.urlencoded, cookieParser()

app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)
app.get('/data', (req,res)=>{
    res.send({name: 'Muhammad', age: 21, status: 'it works'})
})

// TODO
// catch 404 error and forward to error handler
// createError(404) http-errors

// TODO
// error-handler


module.exports = app

