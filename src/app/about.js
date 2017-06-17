var React = require('react');
import {Link} from 'react-router';
var About = React.createClass({
    render: function(){
        return(
            <div>
                <Link to={'/'}>Home</Link>
                <h1>This Is About Me Page</h1>
            </div>
        );
    }
});

module.exports = About;
