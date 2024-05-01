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

// render signup form
app.get('/sign-up', (req, res) => {
  res.send('Sign Up');
})

// render dashboard
app.get('/dashboard', async (req, res) => {
  res.render('dashboard.ejs');
})

// create a new account
app.post('/sign-up', (req, res) => {

})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
