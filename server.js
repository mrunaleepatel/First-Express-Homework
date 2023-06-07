const express = require("express") 

const app = express()

app.get("/" , (req, res) => {
    res.send("Hello Stranger")
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
    const greeting = `Hello there, ${name}!`;
    res.send(greeting);
  });

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);
    const tipAmount = (total * tipPercentage) / 100;
    res.send(tipAmount.toString());
  });


app.listen(3000,() => {
    console.log("Listening on port 3000")
})