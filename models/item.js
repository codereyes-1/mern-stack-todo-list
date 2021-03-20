const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema or shape of data going in out DB
const ItemSchema = new Schema({
 name: {
    type: String,
    required: true
 },
 date: {
  type: Date,
  default: Date.now
 }
});

// Takes an item, puts in the ItemSchema. model needs to know schema
module.exports = Item = mongoose.model('item', ItemSchema);

// Postman built on electron to build desktop apps with JS
