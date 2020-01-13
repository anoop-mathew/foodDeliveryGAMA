
var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID
var MongoClient = require('mongodb').MongoClient
var ReverseMd5 = require('reverse-md5');
//var config = require('../config/db')
const con = 'mongodb://localhost:27017/fooddelivery'
const repository= require('./repository')
const jwt = require('jsonwebtoken');

//const config = require('../config/auth')

const secret = '34500';
/**
 * Retrieves user's cart item(s)
 *
 * @api {get} /cart:username List
 * @apiHeader {String="Bearer :token"} Authorization Replace <code>:token</code> with Auth Token
 * @apiName GetCartItems
 * @apiGroup Cart
 *
 * @apiParam (Route Parameters) {String} username Identifier for the user.
 *
 * @apiSuccess {Mongoid} _id      Identifier for the cart item
 * @apiSuccess {Mongoid} itemId   Identifier for the product
 * @apiSuccess {Number}  quantity Number of the same item in cart
 * @apiSuccess {JSON}    item     Product information for the cart item
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "_id": "5a1d4049802b64ace0d42190",
 *         "itemId": "5a1aa5679dd67514586f5d7a",
 *         "quantity": 3,
 *         "item": {
 *           "name": "abcProduct 1",
 *           "code": "P1",
 *           "unitPrice": "23"
 *       }
 *     ]
 *
 * @apiSampleRequest /cart/:username
 */
module.exports.logIn = (req, res) => {
  condition = {
    username: req.body.username
  }
  MongoClient.connect(con, function (err, db) {
    if (err) throw err

    db.collection('user').findOne(condition, function (err, result) {
      console.log(err, JSON.stringify(result))
      if (err) {
       
        const resultObj = {
          error: true
        }
        err.send(resultObj)
      }
      else if (result  &&  result != 'null'){
        console.log(JSON.stringify(result));
        // const match = await bcrypt.compare(req.body.password, result.password);
        if (req.body.password === result.password) {
          var jwtBearerToken = jwt.sign(
            {
              userId: result._id,
              username: result.username
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
            'userId': result._id,
            'username': result.username,
            'token': jwtBearerToken
          })

        }  else {
          const resultObj = {
            error: true
          }
          res.send(result)
        }

      } else {
        const resultObj = {
          error: true
        }
        res.send(resultObj)
      }

    })
  })

}


module.exports.signup = (req, res) => {
  document =  {
    name: req.body.name,
    moblie: req.body.moblie,
    username: req.body.username,
    password: req.body.password

  }
       
  repository.signup(req, res, 'user', document)
}