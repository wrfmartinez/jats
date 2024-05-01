const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const authController = require("./controllers/auth.js");

/* CONFIGURATIONS */
const app = express();
app.use(express.static(path.join(__dirname, "public")));
// middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
app.use("/auth", authController);
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
// render dashboard
app.get('/dashboard', async (req, res) => {
  res.render('dashboard.ejs');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
