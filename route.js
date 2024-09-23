module.exports = (app) => {
 
   const db = require("./db.js");

   app.get("/getcustumer",db.getcustumer);
   app.get("/getcustumerid/:custumer_id", db.getcustumerid);
   app.post("/insert", db.insert);
  app.put("/update/:custumer_id", db.update);
  app.delete("/delete/:custumer_id", db.delete);
}