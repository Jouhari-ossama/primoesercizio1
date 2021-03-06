var express = require('express');
var app = express(); 
const path = require('path');

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname,'about.html'));
});
 app.get('/sitemap',function(req,res){
 res.sendFile(path.join(__dirname,'sitemap.html'));
});

app.get('/api/products',function(req,res){
 res.sendFile(path.join(__dirname,'dati.json'));
});

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});
