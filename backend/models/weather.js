// model/comment.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const CitySchema = new Schema({
  city: String
}, { timestamps: true });
const cityModel = mongoose.model('City', CitySchema);
// export our module to use in server.js
module.exports  = cityModel 