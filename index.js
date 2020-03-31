const express = require('express');
const app = express();
const port = 7001;

const fs = require('fs');

let rawdata = fs.readFileSync('order.json');  
let orders = JSON.parse(rawdata);  
console.log(orders)
app.get('/orders/1', (req, res) => res.send(JSON.stringify(orders)));

app.use(express.static('public'));

app.listen(port, () => console.log(`User Service is running on ${port}!`));