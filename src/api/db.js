//Connect to DB
var mysql = require('mysql');
var db = mysql.createConnection({
    host: "database-1.cj92ko8hrc4q.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "santiagoandadrianapassword",
    database: "fuel_quote_app"
})


db.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});

module.exports = db;