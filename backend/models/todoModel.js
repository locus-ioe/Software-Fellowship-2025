const mongoose = require('mongoose')

const todoModelSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description:{
        type: String,
    },
    status:{
        type: Boolean,
        default: false
    }
}) 
const Todo = mongoose.model('Todo', todoModelSchema)
module.exports = Todo