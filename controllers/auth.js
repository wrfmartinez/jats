const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');

// render create account form
router.get('/sign-up', (req, res) => {
  res.render('auth/sign-up.ejs');
})
// render signin account form
router.get('/sign-in', (req, res) => {
  res.render('auth/sign-in.ejs');
})
// Create a user
router.post('/sign-up', async (req, res) => {
  if (req.body.password !== req.body.confirmPassword) {
    return res.send('Password and Confirm Password must match');
  }

  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;
  const hashedConfirmedPassword = bcrypt.hashSync(req.body.confirmPassword, 10);
  req.body.confirmPassword = hashedConfirmedPassword;

  const user = await User.create(req.body);
  res.send(`Thanks for signing up ${user.firstName}`);
})

module.exports = router;
