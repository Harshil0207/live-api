module.exports = (app) => {
 
   const db = require("./db.js");

   app.get("/getcustumer",db.getcustumer);
}