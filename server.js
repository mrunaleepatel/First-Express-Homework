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

const magic8BallResponses = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it, yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful"
  ];

app.get('/magic/:question', (req, res) => {
    const question = decodeURI(req.params.question);
    const someResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];
  
    const responseHtml = `<h1>Your Question: ${question}</h1><h1>Magic 8 Ball Response: ${someResponse}</h1>`;
  
    res.send(responseHtml);
  });


app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})