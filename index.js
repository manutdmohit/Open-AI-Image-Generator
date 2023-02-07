require('dotenv').config();

const express = require('express');

const port = process.env.PORT || 8000;

const app = express();

// Enable body parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () =>
  console.log(`The server is listening on the port ${port}`)
);
