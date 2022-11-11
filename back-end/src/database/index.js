const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoURI = process.env.MONGO_URI;

function connectToDataBase() {
  mongoose
    .connect(mongoURI)
    .then(() => console.log('Connected to DataBase!'))
    .catch(error => console.log(error));
}

module.exports = connectToDataBase;
