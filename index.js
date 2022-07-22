const express = require("express");
const app = express();
require("dotenv").config();
const { typeError } = require("./middleware/errors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const { dbConnection } = require("./config/config");
const cors = require("cors");

dbConnection();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

//Espacio para rutas
app.use("/users", require("./routes/users"));
app.use("/routes",require("./routes/routes"));
app.use("/comments",require("./routes/comments"));
app.use("/ratings", require("./routes/ratings"));

//error middleware
app.use(typeError);

module.exports = app;

app.listen(PORT, console.info(`Server running on port: ${PORT}...`));
