let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 4000,
  user: "root",
  password: "Super$on1cs",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;