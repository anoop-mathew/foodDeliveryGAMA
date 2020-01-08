const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Login = new Schema({
    
   email: {
      type: String
   },
   password: {
      type: String
   },

}, {
   collection: 'fooddelivery'
})

module.exports = mongoose.model('Login', Login)