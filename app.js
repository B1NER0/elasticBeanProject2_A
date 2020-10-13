const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("This is the homepage baby OOOH YEEAH");
})

app.listen(PORT, () => {
    console.log("Server is running...");
})

