const express = require('express')
let path = require('path');
const router = require('./routes');
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//server
//João Marques
//Student No: 301253512

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})