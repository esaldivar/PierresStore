const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const mongoose = require("mongoose");
const env = require('dotenv').config();
const PORT = process.env.PORT;
// const cors = require('cors')


app.use(express.json());


// Parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

//session information below
// app.use(session({
//   secret: 'secret santa',
//   resave: false,
//   saveUninitialized: false
// }));

//mongoDB
mongoose.connect(`${process.env.URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'user'
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Route Handlers
app.use('/api', apiRouter);

//Default Error Handler

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'));
});

// Catch-all to unknown routes (404)
app.use((req,res) => res.status(404).send('not found'))
//Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;