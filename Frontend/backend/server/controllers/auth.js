
// import express from "express";
// import bcrypt from "bcryptjs";
// import mongoose from "mongoose";
//import jwt from "jsonwebtoken";
// import passport from "passport";

//Import User Model

//import User from "../models/userSchema";





const jwt = require('jsonwebtoken');


//const config = require('../config/auth')

const secret = '34500';

/**
 * @api {post} / Authentication
 * @apiName LogIn
 * @apiGroup Auth
 *
 * @apiParam {String} username Users unique identifier.
 * @apiParam {String} password Users password.
 *
 * @apiSuccess {JWT} token Authorization token for the user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJhbGciOiJIUzI1N...",
 *     }
 * 
 * @apiError InvalidUserOrPass Invalid username or password.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "InvalidUserOrPass"
 *     }
 *
 * @apiSampleRequest /login
 */
module.exports.logIn = (req, res) => {
  
    let username = req.body.username
  
    condition = {
      username: req.bodu.username,
    }
  
    if (username) {
      condition['username'] = mongodb.ObjectID(req.query.username)
      fetchOne(req, res, 'login', condition) 
    } else {
      MongoClient.connect(con, function (err, db) {
        if (err) throw err;
        db.collection('login').findOne(condition, function (err, result) {
          if (err) {throw err} 
          else{
            var jwtBearerToken = jwt.sign(
              {
                userId: user._id
              },
              secret,
              {
                algorithm: 'HS256',                
                expiresIn: 9999,
                issuer: 'Xpress-Auth',
                subject: 'Authenticate & Authorize'
              }
            );
            res.send({
              'token': jwtBearerToken
            }) 
            return res.status(200).json({
              user: {
                username: user.username,
                id: user._id
              },
              token: `Bearer ${token}`
            });
          }
          
        })
      })
    }
  }

