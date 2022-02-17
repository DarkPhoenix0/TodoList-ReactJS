const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
    content : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required:true
    },
    createdAt : {
        type: String,
        required : true
    }

})

const Todo = model('todos', todoSchema)
module.exports = Todo