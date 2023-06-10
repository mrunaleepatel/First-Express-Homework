require("dotenv").config()
const express = require("express") 
const app = express() 
const PORT = process.env.PORT

app.get('/greeting/:name?', (req, res) => {
    const name = req.params.name || 'stranger';
    const message = name === 'stranger' ? 'Hello, stranger' : `Wow! Hello there, ${name}`;
  
    res.send(message);
  });

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = Number(req.params.total);
    const tipPercentage = Number(req.params.tipPercentage);
  
    const tipAmount = (total * tipPercentage) / 100;
  
    res.send(tipAmount.toString());
  });





app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})