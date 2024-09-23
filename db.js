const mysql = require("mysql2");

var con = mysql.createConnection({
  host: "bmlohmbqiy92d7093h62-mysql.services.clever-cloud.com",
  user: "u632zmuplolzvbiz",
  password: "cbYafQ5CIEe1LiO6XrPz",
  database: "bmlohmbqiy92d7093h62",
});

con.connect(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to database");
    }
  });

  exports.getcustumer = (req, res) => {
  console.log("Api call");
  const sql = "select * from tbl_custumer";
  con.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.end(JSON.stringify(rows));
    }
  });
};