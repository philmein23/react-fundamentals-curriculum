var React = require('react');
var Details = require('../components/Details');
var helper = require('../util/helper');

var DetailsContainer = React.createClass({
	render: function() {
        console.log(this.props.location.state.weather);
		return (
         <Details
            city={this.props.routeParams.city}
            weather={this.props.location.state.weather}/>
        )
	}
});

module.exports = DetailsContainer;