const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client/public")));

const routes = require("./routes");

app.use(routes);

const connection = require("./config/connection");

connection
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3001;

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
