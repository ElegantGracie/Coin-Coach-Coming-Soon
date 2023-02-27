const { saveMail } = require("../controller/testerControl");
const express = require('express')
const routeManager = express.Router()

routeManager.post('/', saveMail)

module.exports = {routeManager}