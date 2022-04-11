const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

console.log("Server staretd...");

//  app.use(express.static(publicPath));

app.get('', (_, res)=>{
    console.log("home page requested...");
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (_, res)=>{
    console.log("about page requested...");
    res.sendFile(`${publicPath}/about.html`);
});

app.get('/help', (_, res)=>{
    console.log("help page requested...");
    res.sendFile(`${publicPath}/help.html`);
});

app.get('*', (_, res)=>{
    console.log("Error in URL......");
    res.sendFile(`${publicPath}/404.html`);
});

// console.clear();
app.listen(5000);