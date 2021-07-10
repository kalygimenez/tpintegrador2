const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, 'register')); 
});


app.use(express.static(path.join(__dirname, './public')));  

app.use(express.static(path.join(__dirname, './views')));

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
});