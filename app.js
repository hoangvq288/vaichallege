const express = require('express');
const path = require("path");


const app = express();
const port = process.env.PORT || "8080";

//routes
const indexRouter = require('./routes/index');



app.use('/', indexRouter)


app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

