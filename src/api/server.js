const express = require('express');
//Not sure the function of cors, look into this
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())

// ------------------ GET ROUTES  ------------------- //

// ------------------ POST ROUTES ------------------- //

app.post('/login', (req, res) => {

    const user = req.body.credentials.username;
    const pass = req.body.credentials.password;

    const sql = `SELECT * FROM UserCredentials WHERE username=\'${user}\' && pass=\'${pass}\'`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err.sqlMessage);
            return;
        }
        console.log("Login Result: ");
        console.log(result);
        console.log("END LOGIN RESULT -----");

        if (Object.keys(result).length != 0) {
            res.send({
            token: user
            });
        }
    });
});

app.post('/signup', (req, res) => {

    const user = req.body.credentials.username;
    const pass = req.body.credentials.password;


    const sql = `INSERT INTO UserCredentials (username, pass)
                 VALUES (\'${user}\', \'${pass}\')`;

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err.sqlMessage);
            return;
        }

        console.log("Signup Result: ");
        console.log(result);
        console.log("END LOGIN RESULT -----");

        if (Object.keys(result).length != 0) {
            res.send({
            token: user
            });
        }
    });
});

app.post('/clientregistration', (req, res) => {

    console.log("CLIENT REGISTRATION ATTEMPT");
    console.log(req.body);

    const user = req.body.username;

    const sql = `SELECT * FROM ClientInformation 
                 WHERE client_username=\'${user}\'`;

    console.log("User: " + user);

    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage);
        console.log(result);

        res.send(result)
    });
});

/*
app.post('/clientregistration-submit', (req, res) => {

    const user = req.body.username;
    const full_name = req.body.fullName;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;

    const sql = `INSERT INTO ClientInformation ( 
                    client_username,
                    full_name,
                    address1,
                    address2,
                    city,
                    state,
                    zip
                ) VALUES (
                    \'${user}\',
                    \'${full_name}\',
                    \'${address1}\',
                    \'${address2}\',
                    \'${city}\',
                    \'${state}\',
                    \'${zip}'\
                )`;

    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage);
        console.log(result);
    });
});
*/

app.post('/clientregistration-update', (req, res) => {

    const user = req.body.username;
    const full_name = req.body.fullName;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;

    const sql = `UPDATE ClientInformation 
                 SET 
                    full_name = \'${full_name}\',
                    address1 = \'${address1}\',
                    address2 = \'${address2}\',
                    city = \'${city}\',
                    state = \'${state}\',
                    zip = \'${zip}'\
                 WHERE
                    client_username = \'${user}\'`;

    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage);
    });
});

app.listen(8080, () => console.log('API running on port 8080'));