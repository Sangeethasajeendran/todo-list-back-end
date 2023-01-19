//connection between server and mongo db
//import mongoose
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/todopro', () => {
    console.log('Mongodb connected successfully');
})

const Todo = mongoose.model('Todo', {
    id: String,
    title: String,
    completed: Boolean
})

module.exports = {
    Todo
}