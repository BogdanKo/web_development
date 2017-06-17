var React = require('react');

var AddItem = React.createClass({
    render: function(){
        return(
            <form id='add-item' onSubmit={this.submitHandler}>
                <input type='text' required ref='newItem'/>
                <input type='submit' value='Hit Me'/>
            </form>
        );
    },
    submitHandler: function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = AddItem;
