const express = require('express');
//Not sure the function of cors, look into this
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())

app.post('/login', (req, res) => {

    console.log(req.body.credentials.username)

    if (req.body.credentials.username == "user")
    {
        res.send({
            token: 'test.token.123'
        });

    } else {
        throw Error;
    }
});

app.listen(8080, () => console.log('API running on port 8080'));