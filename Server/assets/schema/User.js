const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    todos: {
        todo: String
    },
    email: String
})

export { userSchema };