const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;

const schema = require('./assets/index');

app.get('/createUser', async (req, res) => {
    const UserModel = mongoose.model('User', schema.userSchema);

    const newUser = new UserModel({
        name: "Joshua",
        email: "jjorgebeau@edenschool.fr",
        todos: {
            todo: "Test todolist"
        }
    })

    await newUser.save();

    await schema.userSchema.update
});

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`);
});