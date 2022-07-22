const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const RouteSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Rellena un nombre de ruta"]
    },
    difficulty: String,            
    image: String,    
    duration: Number,
    startingPoint: String,
    endingPoint: String,    
    description_es: String,
    description_va: String,
    description_en: String,
    transport: String,
    type: String,
    url:String,
    userId: { type: ObjectId, ref: "User" },
    commentsId: [
      {
        type: ObjectId,
        ref: "Comment",
      },
    ],
    poi:[{
        poi_id: Number,
        name: String,
        description_es: String,
        description_va: String,
        description_en: String,
        latitude: Number,
        longitude: Number,
        Image: String,
      }]
}, {timestamps: true});


const Route = mongoose.model('Route', RouteSchema);
module.exports = Route;