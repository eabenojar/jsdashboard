const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
// Create an express app
const app = express();
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
