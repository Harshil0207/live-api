const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());
app.get("/", (req, res) => { 
  res.json({ message: "welcome to ne api" });
});

require("./route.js")(app);
app.listen(3305, () => {
  console.log("Server is running in the 3305 port number");
})
 