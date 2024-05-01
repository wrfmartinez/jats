const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

/* CONFIGURATIONS */
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
dotenv.config();

// MONGODB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on(`connected`, () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}`);
})

/* ROUTES*/
// render landing page
app.get('/', (req, res) => {
  res.render('index.ejs');
})

// render create account form
app.get('/create-account', (req, res) => {
  res.render('./account/new.ejs');
})

app.get('/login', (req, res) => {
  res.render('./account/login.ejs');
})

// render dashboard
app.get('/dashboard', async (req, res) => {
  res.render('dashboard.ejs');
})

// // create a new user
// app.post('/user/new', (req, res) => {

// })

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
