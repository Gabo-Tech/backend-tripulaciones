const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, SECRET);
    const user = await User.findOne({ _id: payload._id, tokens: token });
    if (!user) {
      return res.status(401).send({ message: "No estas autorizado" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res
      .status(500)
      .send({ error, message: "Ha habido un problema con el token" });
  }
};
const isAdmin = async (req, res, next) => {
  const admin = "admin";
  if (!admin.includes(req.user.role)) {
    return res.status(403).send({
      message: "No eres ADMIN",
    });
  }
  next();
};



module.exports = { authentication, isAdmin };
