const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: "User",
    },
    routeId: {
      type: ObjectId,
      ref: "Route",
    },
    body: {
      type: String,
      required: [true, "No puedes añadir un mensaje vacio"],
    },
  },
  { timestamps: true }
);


const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
