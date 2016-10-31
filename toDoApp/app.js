var express = require ('express');
var todoController = require('./controllers/todoController');
var app = express();

// set up template eingne
app.set('view engine', 'ejs');
//static files
app.use(express.static('./public'));
app.listen(5000);
console.log('You are listening to port 5000');

//fire controllers
todoController(app);
