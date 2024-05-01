const express = require("express");
const router = express.Router();

// render create account form
router.get('/sign-up', (req, res) => {
  res.render('auth/sign-up.ejs');
})

// render signin account form
router.get('/sign-in', (req, res) => {
  res.render('auth/sign-in.ejs');
})

// render create profile form
router.get('/create-profile', (req, res) => {
  res.render('auth/create-profile.ejs');
})

module.exports = router;
