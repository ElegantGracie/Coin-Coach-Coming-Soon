// Dependencies
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

// Instance of express
const app  = express()

// Port
const port = process.env.PORT

app.use(cors({origin: '*'}))

// Function to send mail
function sendEmail() {
    return new Promise((resolve, reject) =>  {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        })
        const mail_configs = {
            from: process.env.USER,
            to: email,
            subject: 'Testing',
            text: 'Welcome'
        }
        transporter.sendMail(mail_configs, function(error, info) {
            if(error) {
                console.log(error);
                return reject({message: 'Not sent'});
            }
            return resolve({message: 'Sent'})
        })
    })
}

app.get('/send', (req, res) => {
    sendEmail()
    .then((res) => res.send(response, message))
    .catch((error) => res.status(500).send(error.message))
})

app.listen(port => {
    console.log(`App is listening at ${port}`)
})