const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongoedb://3.84.45.74'



app.get('/', (req, res) => {
    res.send("This is the homepage baby OOOH YEEAH");
})

app.listen(PORT, () => {
    console.log("Server is running...");

    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
      
        const db = client.db("Admin");
      
        client.close();
      });
    

})

