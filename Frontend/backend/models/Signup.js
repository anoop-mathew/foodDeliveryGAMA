const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Signup = new Schema({
   name: {
      type: String
   },
   mobile: {
    type: Number
 },
   email: {
      type: String
   },
   password: {
      type: String
   },

}, {
   collection: 'fooddelivery'
})

module.exports = mongoose.model('Signup', Signup)