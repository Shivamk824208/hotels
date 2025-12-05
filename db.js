const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'

//set up mongoDB connection
mongoose.connect(mongoURL)
.then(()=> console.log('mongodb connected'))
.catch((err)=> console.log('mongodb connection error', err));

//get the default connection
//mongoose maintains a default connection object representing the mongoDB connection
const db = mongoose.connection;

//define event listeners for database connection
db.on('connected', ()=> {
    console.log("MongoDb connected server ");
});
db.on('error', (err)=> {
    console.log('mongodb connection error');
});
db.on('disconnected', ()=>{
    console.log('mongodb server disconnected');
});
//export the database connection
module.exports = db;
