const mongoose = require('mongoose');
// define the mongodb connection url
//const MONGODB_URL = ''
require('dotenv').config();



const mongoURL = process.env.MONGODB_URL;
console.log("Loaded URI:", mongoURL);
//set up mongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
    serverSelectionTimeoutMS: 10000
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));


//get the default connection
//mongoose maintains a default connection object representing the mongoDB connection
const db = mongoose.connection;
//console.log("Loaded URI:", process.env.MONGO_URI);

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
