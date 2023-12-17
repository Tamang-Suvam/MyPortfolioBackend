const router = require('express').Router();
let User = require('../models/user.model');
const nodemailer = require('nodemailer');
require('dotenv').config();

router.route('/add').post((req, res) => {
  const name = req.body.username;
  const email = req.body.useremail;
  const message = req.body.usermessage;
  const newUser = new User({name, email, message});

  newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;