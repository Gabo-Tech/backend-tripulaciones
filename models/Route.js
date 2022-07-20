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
    description: String,
    tags:[],
    pois:[]
}, {timestamps: true});


const Route = mongoose.model('Route', RouteSchema);
module.exports = Route;