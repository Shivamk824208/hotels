const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body


app.get('/', (req, res)=> {
    res.send('hello server');
})





const personRoutes = require('./routes/personRoutes.js');
app.use('/', personRoutes);


const menuRoutes = require('./routes/menuRoutes.js');
app.use('/', menuRoutes);
app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}`);
});