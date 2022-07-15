const mongoose = require("mongoose");
require("dotenv").config();
const CONNECT_DATABASE = process.env.CONNECT_DATABASE;

const dbConnection = async () => {
    try {
        await mongoose.connect(CONNECT_DATABASE);
        console.info(`Succesfully connected to the database...`)        
    } catch (error) {
        console.error("THIS IS THE DATABASE CONNECTION ERROR:", error.message);        
    }
};

module.exports = {dbConnection};