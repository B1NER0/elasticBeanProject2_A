const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://thisIsTheUser:1234@3.84.45.74/TestDB?retryWrites=true&w=majority';  //'mongodb+srv://Binero:Alfadelta4@cluster0mongodb.nwadf.mongodb.net/sample_airbnb?retryWrites=true&w=majority';//'mongodb://myUserAdmin:abc123@3.84.45.74/Admin?retryWrites=true&w=majority';

falg = false;

MongoClient.connect(url, (err, database) => {
    if (err) return console.log(err);
    db = database.db("TestDB");
    console.log("SDF");    

    flag = true;
});


app.get('/', (req, res) => {
    res.send("This is the homepage baby OOOH hhYEEAH" + flag);
});
    

app.listen(PORT, () => {
    console.log("Server is running...");

});

