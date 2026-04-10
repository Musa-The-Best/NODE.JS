var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "remotemysql.com", // Give your host name
    user: "Rz8hqn1dk4", // Give your username
    password: "nd0wKO3xe0", // Give your password
    database: "Rz8hqn1dk4" // Give your DB name
});
connection.connect((err) => {
    if (err) throw err;
    console.log("connected");
    connection.query("SELECT * FROM students", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});