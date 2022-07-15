const User = require("../models/User");
const bcrypt = require("bcryptjs");
// const transporter = require("../config/nodemailer");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.SECRET;

const UserController = {
  async create(req, res) {
    try {      
      let password;
      if (req.body.password !== undefined) {
        password = bcrypt.hashSync(req.body.password, 10);
      }
      req.body.confirmed = true;
      req.body.role = "user";
      const user = await User.create({
        ...req.body,
        confirmed: req.body.confirmed,
        password,
      });
      // const emailToken = jwt.sign({mail:req.body.mail},JWT_SECRET,{expiresIn:'48h'});
      // const url = 'http://localhost:8080/users/confirm/'+ emailToken;
      // await transporter.sendMail({
      //     to: req.body.mail,
      //     subject: "Confirme su registro",
      //     html: `<h3>Bienvenido, estás a un paso de registrarte </h3>
      //     <a href="${url}"> Click para confirmar tu registro</a>
      //     `,});
      res
        .status(201)
        .send({
          message: "We've just send you a conformation email",
          user,
        });
    } catch (error) {
      console.error(error);      
    }
  },
  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      const token = jwt.sign({ _id: user._id }, JWT_SECRET);
      if (user.tokens.length > 4) user.tokens.shift();
      user.tokens.push(token);
      await user.save();
      res.send({ message: "Welcome ", user, token });
    } catch (error) {
      res
        .status(500)
        .send({ message: "We had a problem with the login" });
    }
  },
  async confirm(req, res) {
    try {
      const token = req.params.emailToken;
      const payload = jwt.verify(token, JWT_SECRET);
      await User.updateOne(
        { mail: payload.email },
        { $set: { confirmed: true } }
      );
      res.status(201).send("User confirmed succesfully!");
    } catch (error) {
      console.error(error);
    }
  },
  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });
      res.status(200).send({ message: "Log Out succesfull!" });
    } catch (error) {
      res
        .status(500)
        .send({
          message: "We had a problem loggin out the user",
        });
    }
  },

  async getAll(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const users = await User.find()
        .populate("commentIds")
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(users);
    } catch (error) {
      res
        .status(500)
        .send({ message: "We had a problem getting the user list" });
    }
  },
};

module.exports = UserController;
