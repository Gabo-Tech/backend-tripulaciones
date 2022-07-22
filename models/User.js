const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please provide a name"]
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Invalid email"],
        unique: true,
        required: [true,"Please provide an email"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    genre: String,
    age: { type: Number, min: 18, max: 85 },
    tokens:[],
    confirmed: Boolean,
    role: String,
    commentIds: [{ type: ObjectId, ref: "Comment"}],
    likes: [{ type: ObjectId, ref: 'Route' }]
}, {timestamps: true});

UserSchema.methods.toJSON = function () {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    return user;
}

const User = mongoose.model('User', UserSchema);
module.exports = User;