//import express
const express = require('express')

//import data service app
const dataService = require('./services/data.service')

//import cors
const cors = require('cors')

//2.create a server app  using express
const app = express()

//using cors define origin to server app
app.use(cors({
    origin: ['http://localhost:3000']
}))

//to parse json data
app.use(express.json())

//3.set port for server app
app.listen(3005, () => {
    console.log('server started at port 3005');
})

app.post('/saveTodo', (req, res) => {
    console.log('inside save function');
    console.log(req.body);
    // asynchronous
    dataService.saveTodo(req.body.id,req.body.todo)
        .then((result) => {
            res.status(result.statusCode).json(result)
        })
})

app.get('/getAlltodo', (req, res) => {
    
    dataService.getAlltodo()
        .then((result) => {
            res.status(result.statusCode).json(result)
        })
})

app.delete('/deleteTodo/:id', (req, res) => {
    console.log('inside  function');
    dataService.deleteTodo(req.params.id)
    .then((result) => {
        res.status(result.statusCode).json(result)
    })
})