var React = require('react');
var Forecast = require('../components/Forecast');
var PropTypes = React.PropTypes;
var helper = require('../util/helper');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      forecast: []
    }
  },
  componentDidMount: function() {
    helper.getFiveDayForecast(this.props.routeParams.city)
    .then(function(forecastList) {
      this.setState({
        isLoading: false,
        forecast: forecastList.slice(0, 5)
      });
      console.log(forecastList.slice(0, 5));
    }.bind(this));
  },
  handleCurrentCity: function(weather) {
    this.context.router.push({
      pathname: '/details/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },
  render: function() {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}
        onCurrentCity={this.handleCurrentCity}
        forecast={this.state.forecast} />
    )
  }
})

module.exports = ForecastContainer;
