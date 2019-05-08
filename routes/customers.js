const express = require('express')
const customerRouter = express.Router()
const expressGraphQL = require("express-graphql");
const { buildSchema } = require("graphql");
const Customer = require('../models/customer')


module.exports = customerRouter