const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/home.html')); 
});

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor mercadoliebre corriendo");
});