const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const authController = require("./controllers/auth.js");
const passUserToView = require("./middleware/pass-user-to-view.js");
const MongoStore = require("connect-mongo");

const User = require('./models/user.js');
const Application = require('./models/application.js');

/* CONFIGURATIONS */
const app = express();
app.use(express.static(path.join(__dirname, "public")));
// middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
dotenv.config();
// middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
// automatically manages session data for each user request
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);
app.use(passUserToView);

// MONGODB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on(`connected`, () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}`);
})

/* ROUTES*/
// render landing page
app.get('/', async (req, res) => {
  res.render('index.ejs');
})
// render dashboard
app.get('/dashboard', async (req, res) => {
  const foundUser = await User.findOne();
  res.render('dashboard.ejs', { foundUser: foundUser });
})
// render applications page
app.get('/application', async (req, res) => {
  res.render('./applications/index.ejs');
})
// render create applications page
app.get('/application/new', async (req, res) => {
  res.render('./applications/new.ejs');
})

const PORT = process.env.PORT || 3000;
app.use("/auth", authController);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
