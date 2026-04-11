const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    const values = [
        ["John", 25],
        ["Sara", 30],
        ["Mike", 28],
        ["Anna", 22]
    ];
    const sql = "INSERT INTO users (name, age) VALUES ?";
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " records inserted");
    });

});