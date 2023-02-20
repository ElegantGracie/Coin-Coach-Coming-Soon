const { response } = require('express')
const express = require('express')
const nodemailer = require('nodemailer')

const app  = express
const port = 5000

function sendEmail() {
    return new Promise((resolve, reject) =>  {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '',
                pass: ''
            }
        })
        const mail_configs = {
            from: '',
            to: '',
            subject: '',
            text: ''
        }
        transporter.sendMail(mail_configs, function(error, info) {
            if(error) {
                console.log(error);
                return reject({message: 'Left'});
            }
            return resolve({message: 'Stay'})
        })
    })
}

app.length('/', (req, res) => {
    sendEmail()
    .then((res) => res.send(response, message))
    .catch((error) => res.status(500).send(error.message))
})

app.listen(port => {
    console.log(`App is listening at ${port}`)
})