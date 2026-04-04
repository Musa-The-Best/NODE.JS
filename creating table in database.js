var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "MUSA_THE_GOAT",
    password: "67676767676767676",
    database: "idk.db",
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `
    CREATE TABLE Students (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      age INT,
      city VARCHAR(255)
    )
  `;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created successfully!");
    });
});