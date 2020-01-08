const express = require('express');
const app = express();
const signupRoute  = express.Router();

// Employee model
let Signup = require('../models/Signup');

// Add Customer
signupRoute.route('/create').post((req, res, next) => {
    Signup.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Employees
signupRoute.route('/').get((req, res) => {
  Signup.find(req.params.email,req.params.password,(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = signupRoute;