const express = require('express');
//Not sure the function of cors, look into this
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const db = require("./db/UserInformation");

//Middleware
//let bodyparse parse any requests that are of 
//the type url encoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());

app.post("/UserInformation", async (req, res) =>{
    const results = await db.createUser(req.body);
    res.status(201).json({id: results[0]});
});

app.get("/UserInformation", async (req,res) => {
    const allInfo = await db.getAllUsers();
    res.status(200).json({allInfo});
});
 

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