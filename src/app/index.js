var React = require('react');
var ReactDOM = require('react-dom');
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');
require('./css/index.css');
import {Router, Route, browserHistory, Link} from 'react-router';
//Create a component
var App = React.createClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        );
    }
});
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'put some close on', 'to abroad']
        }
    }, //getInitialState

    render: function(){
        var todos    = this.state.todos,
            onDelete = this.onDelete,
            onAdd    = this.onAdd;
        console.log('typeOf', typeof todos);
        todos = todos.map(function(item, index){
            return(
                <TodoItem item={item} index={index} onDelete={onDelete}/>
            );
        });
        return(
            <div id="todo-list">
                <Link to={'/about'}>About</Link>
                <p onClick={this.clicked}>The busiest people have the most leisure...</p>
                <ul className='todo-list'>{todos}</ul>
                <AddItem onAdd={onAdd}/>
            </div>
        );
    }, //render
    clicked:function(){
        console.log('!');
    },

    onDelete: function(item) {
        var updatedTodos = this.state.todos.filter(function(value, index){
            return item !== value;
        });
        this.setState({
            todos: updatedTodos
        })
    },
    onAdd:function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);

        this.setState({
            todos: updatedTodos
        })
    }
});


ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
