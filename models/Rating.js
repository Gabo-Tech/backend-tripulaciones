const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const RatingSchema = new mongoose.Schema({
    rating: { type: Number, min: 1, max: 5 },
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    routeId: {
        type: ObjectId,
        ref: 'Route'
    },
   

}, { timestamps: true });

const Rating = mongoose.model('Rating', RatingSchema);
module.exports = Rating;