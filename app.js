const express = require('express');
const path = require("path");
const bodyParser = require('body-parser')


const app = express();
const port = process.env.PORT || "8080";

//routes
const indexRouter = require('./routes/index');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', indexRouter)


server = app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

module.exports = { server }

