const express = require('express');
const app = express();
const PORT = 3000;

// route
app.get('/', (req, res) => {
  return res.status(200).send("Hello World");
});

var ProgressBar = require('./progressbar.js');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});