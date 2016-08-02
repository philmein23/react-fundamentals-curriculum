var React = require('react');
var GetCity = require('../components/GetCity');
var PropTypes = React.PropTypes;
var helpers = require('../util/helper');


var GetCityContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function() {
    return {
      direction: 'column'
    }
  },
  getInitialState: function() {
    return {
      city: ''
    }
  },
  handleSubmitCity: function(e) {
    e.preventDefault();
    this.context.router.push('/forecast/' + this.state.city);
    this.setState({
      city: ''
    })
  },
  handleUpdateCity: function(e) {
    this.setState({
      city: e.target.value
    })
  },
  render: function() {
    return (
      <GetCity
        city = {this.state.city}
        onSubmitCity = {this.handleSubmitCity}
        onUpdateCity = {this.handleUpdateCity}
        direction = {this.props.direction} />
    )

  }
});

module.exports = GetCityContainer
