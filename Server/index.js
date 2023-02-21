// Dependencies
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
// const axios = require('axios')
// const cheerio = require('cheerio')
require('dotenv').config()

// Instance of express
const app = express()

// Port
const port = 3000
// const url = process.env.URL || 3000

app.use(bodyParser.urlencoded({extended: false}));

app.use(cors({origin: '*'}))

app.post('/send', (req, res)=> {
    const { email } = req.body

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
    
    sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message))
})

app.listen(port, () => {
    console.log(`App is listening at ${port}`)
})