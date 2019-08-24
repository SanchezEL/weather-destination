const crypto = require('crypto')
const mongoose = require('mongoose')
const { authModel } = require('../models/weather')

const SignUp = ({ userName, password }) => {
  console.log(" hey",userName, password)
  if (!userName || !password) return Promise.reject('username and password are required!')
  // let city = []
  const hash = crypto.createHash('md5').update(password).digest("hex")
  return authModel.create({ userName, password: hash, cities: [] })
}

const Login = ({ userName, password }) => {
  // contents of login function
  console.log(password)
  const hash = crypto.createHash('md5').update(password).digest("hex")
  let au = authModel.findOne({ userName: userName, password: hash })
  console.log("auM", au)
  return authModel.findOne({ userName: userName, password: hash })
}

module.exports = {
  SignUp,
  Login
}