const Sequelize = require('sequelize')
const { sequelize } = require('../config/connection')

const Tester = sequelize.define('tester', {
    testerID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    testerEmail: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = {Tester}