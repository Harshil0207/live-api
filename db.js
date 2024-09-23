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

exports.getcustumerid = (req, res) => {
    console.log("Api call");
    var custumer_id = req.params.custumer_id;
    console.log(custumer_id);
    const sql = "SELECT * FROM tbl_custumer WHERE custumer_id = ?";
    con.query(sql, [custumer_id], (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.end(JSON.stringify(rows));
      }
    });
  };

  exports.insert = (req, res) => {
    const { custumer_name,custumer_id } = req.body;
    var sql = "INSERT INTO tbl_custumer (custumer_id,custumer_name) VALUES (?,?)";
    var values = [custumer_id,custumer_name];
    con.query(sql, values, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting custumer data");
      } else {
        res.send("custumer data added");
      }
    });
  };
  exports.update = (req, res) => {
    const { custumer_id } = req.params;
    const {  custumer_name } = req.body;
    var sql = "UPDATE tbl_custumer SET  custumer_name = ? WHERE custumer_id = ?";
    var values = [custumer_name,custumer_id];
  
    con.query(sql, values, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating custumer data");
      } else {
        res.send("custumer data updated");
      }
    });
  };
  
  exports.delete = (req, res) => {
    const { custumer_id } = req.params;
    const sql = "DELETE FROM tbl_custumer WHERE custumer_id = ?";
  
    con.query(sql, [custumer_id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error deleting custumer data");
      } else {
        res.send("custumer data deleted");
      }
    });
  };
  