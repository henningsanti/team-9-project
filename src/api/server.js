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

app.post('/getquote-historyfactor', (req, res) => {

    console.log("QUOTE HISTORY FACTOR ATTEMPT");
    console.log(req.body);

    const user = req.body.username;

    const sql = `SELECT * FROM FuelQuote 
                 WHERE quote_form_username=\'${user}\' && order_submitted=${1}`;

    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage);
        console.log(result);

        res.send({
            hasHistory: Object.keys(result).length != 0
        });
    });
});

app.post('/getquote-savequote', (req, res) => {

    console.log("SAVE FUEL QUOTE ATTEMPT");
    console.log(req.body);

    const user = req.body.username;
    const gallons = req.body.gallons;
    const address = req.body.address;
    const date = req.body.date;
    const suggPrice = req.body.suggPrice;
    const total = req.body.total;

    const sql = `INSERT INTO FuelQuote (
                    quote_form_username, 
                    gallons_requested,
                    delivery_address,
                    delivery_date,
                    suggested_ppg,
                    amount_due,
                    order_submitted
                ) VALUES (
                    \'${user}\',
                    ${gallons},
                    \'${address}\',
                    \'${date}\',
                    ${suggPrice},
                    ${total},
                    0)`;

    db.query(sql, (err, result) => {
        if (err) { 
            console.log(err.sqlMessage);
        } else {
            res.send({
                quote_id: result.insertId
            });
        }
    });
});

app.post('/quoteform-submit', (req, res) => {

    console.log("FUEL ORDER ATTEMPT");
    console.log(req.body);

    const user = req.body.username;
    const quoteId = req.body.quoteId;

    const sql = `UPDATE FuelQuote 
                 SET order_submitted=1
                 WHERE quote_form_username=\'${user}\' && quote_id=${quoteId}`;

    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage);
        console.log(result);
    });
});

app.post('/quotehistory', (req, res) => {

    console.log("QUOTE HISTORY FETCH ATTEMPT");
    console.log(req.body);

    const user = req.body.username;

    const sql = `SELECT * FROM FuelQuote 
                 WHERE quote_form_username=\'${user}\'
                 ORDER BY order_submitted DESC`;

    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage);
        console.log(result);

        res.send(result);
    });
});

app.listen(8080, () => console.log('API running on port 8080'));