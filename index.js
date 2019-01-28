const express = require('express')
const app = express()
const port = 8080

var licznik = 0;
app.get('/', (req, res) => {res.send(`Liczę, i mam ${licznik}`);licznik++;})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
