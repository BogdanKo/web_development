var React     = require('react');
require('./css/todoItem.css');
// import React from 'react';
// import ReactDOM from 'react-dom';

var TodoItem = React.createClass({

    deleteHandler:function(){
        this.props.onDelete(this.props.item);
    },

    render(){
        return(
            <li>
                <div className='todo-item'>
                    <span className='item-name'>{this.props.item}</span>
                    <span className='item-remo' onClick={this.deleteHandler}> x </span>
                </div>
            </li>
        );
    }
});

module.exports = TodoItem;
