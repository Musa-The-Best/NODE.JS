var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "remotemyql.com", // Give your host name
    user: "Rz8hqn1dk4", // Give your username
    password: "nd0wK03xe0", // Give your password
    database: "Rz8hqn1dk4" // Give your DB name
});
connection.connect((err) => {
    if (err) throw err;
    console.log("connected");
    var sql = "INSERT INTO Students(Student_ID,Student_FirstName,Student_LastName,Student_City,Student_Grade) VALUES ?";
    var values = [
        [101, 'Teenu', 'Prashant', 'Madurai', '5'],
        [103, 'Chintu', 'Prakash', 'Chennai', '6'],
        [107, 'Caral', 'Smith', 'Texas', '2'],
        [109, 'Riya', 'Gupta', 'Pune', '9'],
        [102, 'Teka', 'Prashant', 'Bangalore', '8']
    ];
    connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Multiple Data inserted in DB");
    });
});