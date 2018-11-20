const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

// Create an express app
const app = express();

// Allow cross-origin requests
app.use(cors());

// Connect to mlab database
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log("RUNNING ON SERVER 5000");
});
