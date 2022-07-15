const mongoose = require("mongoose");
require("dotenv").config();
const CONNECT_DATABASE = process.env.CONNECT_DATABASE;

const dbConnection = async () => {
    try {
        await mongoose.connect(CONNECT_DATABASE);
        console.log("Base de datos conectada con éxito");
    } catch (error) {
        console.error(error);
        throw new Error("Error a la hora de iniciar la base de datos");
    }
};

module.exports = {dbConnection};