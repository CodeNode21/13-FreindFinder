// Dependencies
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

//Express init and port declare
var app = express();
var PORT = 8080;

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function(){
    console.log('Listeining on port:  ' + PORT);
});