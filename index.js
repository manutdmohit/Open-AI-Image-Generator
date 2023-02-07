require('dotenv').config();

const path = require('path');

const express = require('express');

const port = process.env.PORT || 8000;

const app = express();

// Enable body parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () =>
  console.log(`The server is listening on the port ${port}`)
);
