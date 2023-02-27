const { sequelize } = require("../config/connection");
const { Tester } = require("../model/mail");

const saveMail = async (req, res) => {
    const tester = {
        testerEmail: req.body.testerEmail
    }

    await sequelize.sync()
    .then(res => {
        Tester.create(tester)
        .then((res) => {
            console.log(res)
            res.status(200).json([{message: 'email saved'}])
        }).catch(err => {
            console.log(err)
            // res.status(403).json([{message: 'error'}])
        })
    }).catch(err => {
        console.log(err)
        res.status(404).json([{message: 'another error'}])
    })
}

module.exports = {saveMail}