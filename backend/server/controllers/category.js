var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID
 
const repository = require('./repository')
 
module.exports.getAllCategories = (req, res) => {
 repository.getAllCategory(req, res)
 
 }
//  module.exports.getItemByCategory = (req, res) => {
//  repository.getItemByCategory(req, res)
 
//  }