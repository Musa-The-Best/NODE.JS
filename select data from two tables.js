var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "remotemysql.com", // Give your host name
    user: "Rz8hqn1dk4", // Give your username
    password: "nd0wK03xeO", // Give your password
    database: "Rz8hqn1dk4" // Give your DB name
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected");

    // specify the table name and column name of your table
    connection.query("SELECT Students_Detail.FirstName, Student_Height.Height FROM Students_Detail JOIN Student_Height ON Students_Detail.Reg_ID = Student_Height.Reg_ID", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});