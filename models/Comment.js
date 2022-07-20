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
    avatar: String,
    likes: [{ type: ObjectId }],
  },
  { timestamps: true }
);

CommentSchema.pre("remove", function (next) {
  this.model("Assignment").remove({ comments: this._id }, next);
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
