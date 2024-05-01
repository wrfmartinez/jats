const express = require('express');
const dotenv = require('dotenv');

// CONFIGURATIONS
const app = express();

dotenv.config();

// ROUTES

// render landing page
app.get('/', (req, res) => {
  res.render('index.ejs');
})

// render dashboard
app.get('/dashboard', async (req, res) => {
  res.send("Hi dash");
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
