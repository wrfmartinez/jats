const express = require('express');
const dotenv = require('dotenv');

// CONFIGURATIONS
const app = express();
dotenv.config();

// ROUTES
app.get('/', (req, res) => {
  res.render('index.ejs');
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
