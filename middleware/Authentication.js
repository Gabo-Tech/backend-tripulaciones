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

const isAuthorComment = async (req, res, next) => {
  try {
    const post = await Comment.findById(req.params._id);
    if (post.userId.toString() !== req.user._id.toString()) {
      return res.status(403).send({ message: "Este comentario no es tuyo" });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error,
      message: "Hubo un problema al comprobar la autoría de este comentario",
    });
  }
};


module.exports = { authentication, isAdmin, isAuthorComment };
