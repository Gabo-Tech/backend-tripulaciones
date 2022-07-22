const { send } = require("express/lib/response");

const handleValidationError = (err, res) => {
  let errors = Object.values(err.errors).map((el) => el.message); 
  if (errors.length > 1) {
    let chain = "";
    for (let i = 0; i < errors.length; i++) {
      chain += errors[i] + " || ";
    }
    const string = chain.slice(0, -4);
    res.status(400).send({ messages: string });
  } else {
    res.status(400).send({ messages: errors });
  }
};

const typeError = (err, req, res, next) => {
  const errOrigin = err.origin;
  if (err.name === "ValidationError")
    return (err = handleValidationError(err, res));
  else if (err.code === 11000) {
    res.status(400).send({ message: "The email already exists" });
  } else if (errOrigin === "User") {
    res.status(500).send("We had an issue creating the User...");
  } else if (errOrigin === "Comment") {
    res.status(500).send("We had an issue creating the Comment...");
  } else if (errOrigin === "Route") {
    res.status(500).send("We had an issue creating the Route...");
  } else if (errOrigin === "Rating") {
    res.status(500).send("We had an issue rating the Route...");
  } else {
    res.status(500).send("There is an error in your sintaxis...");
  }
};

module.exports = { typeError };
