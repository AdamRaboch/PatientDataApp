const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const router = require("./routers/route");
const app = express();

// runs the program

(() => {
  const port = process.env.PORT;
  app.use(morgan("dev"));

  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: false,
    })
  );
  app.get('/', (request, response) => {
    console.log('check', request.headers)
    response.send('message')
  })
  app.use(router);
  if (process.env.NODE_ENV != "test") {
    app.listen(port, () => {
      console.log("Server is up on port: " + port);
    });
  }
})();


module.exports = app;