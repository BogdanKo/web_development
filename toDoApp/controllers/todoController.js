var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

//connect to the database

mongoose.connect('mongodb://me:me@ds049651.mlab.com:49651/todo');

//create a schema - this is like a blueprint

var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);
//var itemOne = Todo({item: 'buy flowers'}).save(function(error){
//  if (error) throw err;
// console.log('item saved');
//});

//var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/todo',function (req, res){
    Todo.find({}, function(err, data){
      if (err) throw err;
      res.render('todo', {todos: data});
    });
  });

  app.post('/todo', urlencodedParser, function(req, res){

    var newTodo = Todo(req.body).save(function (err, data){
      if (err) {
        throw err;
      } else {
        res.json(data);
      }
    });
  });

app.delete('/todo', function (req, res){

  Todo.find({item: req.para.item.replace(/\-/g, " ")}).remove(function(err, data){
    if (err) throw err;
    res.json(data);
  });
//  data = data.filter(function(todo){
//    return todo.item.replace(/ /g, '-') !== req.params.item;
//  });
//res.json(data);
  });
};
