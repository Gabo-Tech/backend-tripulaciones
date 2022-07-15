import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use(cors());

//Espacio para rutas



mongoose.connect(process.env.CONNECT_DATABASE).then(() => app.listen(PORT, () => (console.info(`Succesfully connected to the database...`),console.info(`Server running on port: ${PORT}...`))))
    .catch((err) => console.error("THIS IS THE DATABASE CONNECTION ERROR:",err.message));