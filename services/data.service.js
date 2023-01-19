//import model account
const { Promise } = require('mongoose')
const db = require('./db')

const saveTodo = (id,todo) => {
    return db.Todo.findOne({
        id,
        title: todo
    }).then((result) => {
        if (result) {
            //acno n pswd is present in db
           
            return {
                status: false,
                message: 'id error',
                statusCode: 404
            }
        }
        else {
            let newTodo = new db.Todo({
                id,
                title:todo,
                completed: false
            })
            newTodo.save()
            return {
                status: true,
                message: 'created successfully',
                statusCode: 200
            }
        }
       
    })
}

const getAlltodo = () => {
    return db.Todo.find().then((data) => {
        if (data) {
            return {
                statusCode: 200,
                result: data
            }
        }
        else {
            return {
                statusCode: 404,
                message: 'failed to fetch data from database'
            }
        }
    }).catch((error) => {
        console.log(error);
    })
}

const deleteTodo=(id,todo)=>{
    return db.Todo.deleteOne({
        id,

    }).then((result)=>{
        if(result){
            //send to client
            return{
                status:true,
                statusCode:200,
                message:'Account deleted successfully'
            }
        }
        else{
             //acno not present in db
                //send to client
                return {
                    status: false,
                    message: 'invalid account number',
                    statusCode: 404
                }
        }
    })
}


module.exports = {
    saveTodo,
    getAlltodo,
    deleteTodo

}