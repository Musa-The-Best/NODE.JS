const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'school_db'
});
db.connect(err => {
    if (err) throw err;
    console.log("Connected");
    const sql = "INSERT INTO modules (module_name, module_code) VALUES (?, ?)";
    const values = ["Math", "MTH101"];
    db.query(sql, values, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");

        db.end();
    });
});