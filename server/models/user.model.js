const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required:true
    }

})

const Users = model('users', userSchema)
module.exports = Users