var React = require('react');
var Forecast = require('../components/Forecast');
var helper = require('../util/helper');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      forecast: []
    }
  },
  componentDidMount: function() {
    helper.getFiveDayForecast(this.props.routeParams.city)
    .then(function(weather) {
      this.setState({
        isLoading: false,
        forecast: weather.data.list.slice(0, 5)
      });
      console.log(weather.data.list.slice(0, 5));
    }.bind(this));
  },
  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}
        forecast={this.state.forecast}/>
    )
  }
})

module.exports = ForecastContainer;
