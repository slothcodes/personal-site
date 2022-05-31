const express = require('express');


const app = express();

// listen for requests

app.listen(3000);



app.get('/',(req,res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});