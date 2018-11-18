const express = require("express");

const app = express();

app.use("/", (req, res) => res.send("HEfeafeaLLO"));

app.listen(5000, () => {
  console.log("RUNNING ON SERVER 5000");
});
