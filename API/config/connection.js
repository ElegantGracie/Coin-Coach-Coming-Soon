const dotenv = require('dotenv')
dotenv.config()
const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASS, {
    dialect: 'mysql', host: process.env.HOST
})

module.exports = {sequelize}