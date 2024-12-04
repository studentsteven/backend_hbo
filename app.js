const express = require('express');
const app = express();

// Als de url '/' is
app.get('/', (req, res) => { 
    // Geef 'Hello World' terug.
    return res.json({ 'message': "Hello World!" }); 
});

// Quote endpoint
app.get('/quote', (req, res)  => {
    const quotes = require('./quotes.json'); // Neem alle quotes van het bestand quotes.json

    const quoteVal = Object.values(quotes); // Zet alles in een object array
    const randQuote = quoteVal[parseInt(Math.random() * quoteVal.length)]; // Random getal van het maximale aantal quotes

    return res.send(randQuote); // Geef de random quote terug.
});

// Zorg dat de app 'luistert' op port 3000.
app.listen(3000, () => console.log("server ready on port 3000"));