const execSync = require('child_process').execSync
const express = require('express')
var bodyParser = require('body-parser');

const app = express()
const port = 8080

app.use(express.static('public'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var licznik = 0;
app.get('/', (req, res) => {
    res.send(`Liczę, i mam ${licznik}`);
    licznik++;
})

app.post('/', (req, res) => {
    //console.log(req.body);
    res.send(`OK`);
    execSync('ls');
    //licznik++;
})

app.listen(port,
    () => console.log(`Example app listening on port ${port}!`))
