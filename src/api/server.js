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

app.get('/clientregistration', (req, res) => {

    const user = req.body.username;

    const sql = `SELECT * FROM ClientInformation 
                 WHERE client_username=\'${user}\'`;

    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage);
        console.log(result);
    });
});

app.get('/quotehistory', (req, res) => {

    const user = req.body.username;
    
    const sql = `SELECT * FROM FuelQuote 
                 WHERE quote_form_username=\'${user}\'`;

    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage);
        console.log(result);
    });
});

// ------------------ POST ROUTES ------------------- //

app.post('/login', (req, res) => {

    const user = req.body.credentials.username;
    const pass = req.body.credentials.password;

    const sql = `SELECT * FROM UserCredentials WHERE username=\'${user}\' && pass=\'${pass}\'`;

    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage);
        console.log(result);

        res.send({
            token: user
        });
    });
});

app.post('/signup', (req, res) => {

    const user = req.body.credentials.username;
    const pass = req.body.credentials.password;

    const sql = `INSERT INTO UserCredentials (username, pass)
                 VALUES (\'${user}\', \'${pass}\'`;

    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage);
        console.log(result);

        res.send({
            token: 'test.token.123'
        });
    });
});

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
        console.log(result);
    });
});

app.post('/quoteform', (req, res) => {

    const user = req.body.username;
    const gallons = req.body.gallons;
    const address1 = req.body.address;
    const date = req.body.date;
    const price = req.body.price;
    const total = req.body.total;

    const sql = `INSERT INTO FuelQuote ( 
                    quote_form_username,
                    gallons_requested,
                    delivery_address,
                    delivery_date,
                    suggested_ppg,
                    amount_due
                ) VALUES (
                    \'${user}\',
                    \'${gallons}\',
                    \'${address1}\',
                    \'${date}\',
                    \'${price}\',
                    \'${total}\'
                )`;

    db.query(sql, (err, result) => {
        if (err) console.log(err.sqlMessage);
        console.log(result);
    });
});


app.listen(8080, () => console.log('API running on port 8080'));