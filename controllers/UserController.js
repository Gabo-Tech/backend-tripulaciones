const User = require("../models/User");
const bcrypt = require("bcryptjs");
// const transporter = require("../config/nodemailer");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.SECRET;

const UserController = {
  async create(req, res, next) {
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
      res.status(201).send({
        message: "Te hemos enviado un correo de confirmación",
        user,
      });
    } catch (error) {
      console.log(error);
      error.origin = "User";
      next(error);
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
      res.status(500).send({ message: "Hubo un problema con el login" });
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
      res.status(201).send("Usuario confirmado!");
    } catch (error) {
      console.error(error);
    }
  },
  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });
      res.status(200).send({ message: "Desconectado correctamente!" });
    } catch (error) {
      res.status(500).send({
        message: "Hubo un problema desconectando al usuario",
      });
    }
  },

  async getAll(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const users = await User.find()
        // .populate("commentIds")
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(users);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Tuvimos un problema recuperando los usuarios" });
    }
  },
  async getInfo(req, res) {
    try {
      const user = await User.findById(req.user._id).populate({
        path: "likes",
        // populate: {
        //   path: "commentIds",
        // },
      });
      // .populate("likeIDs")
      res.send(user);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({
          message: "Ha habido un problema al cargar la información del usuario",
        });
    }
  },
  async update(req, res) {
    try {
      const updatedUser = {
        apiUser: req.body.user_id        
      };
      const user = await User.findByIdAndUpdate(req.user._id, updatedUser, {
        new: true
      });
      res.status(201).send({ message: "Usuario modificado con éxito", user })
    } catch (error) {
      console.error(error);
      res.status(400).send({ message: "Hubo un problema al intentar modificar el usuario" })
    }
  },
};

module.exports = UserController;
