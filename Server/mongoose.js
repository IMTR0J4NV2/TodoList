require('dotenv').config();

const mongoose = require('mongoose');

main().catch(err => console.error(err));

const main = async () => {
    await mongoose.connect(process.env.DB_URL);
}