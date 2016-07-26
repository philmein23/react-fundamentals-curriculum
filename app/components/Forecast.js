var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');

function Forecast(props) {
  return (
    props.isLoading === true
    ? <Loading />
    : <div>
        <h1>{props.city}</h1>
        <h2>Select a day</h2>
        <li>{props.forecast[0].weather[0].description}</li>
        <li>{props.forecast[1].weather[0].description}</li>
        <li>{props.forecast[2].weather[0].description}</li>
        <li>{props.forecast[3].weather[0].description}</li>
        <li>{props.forecast[4].weather[0].description}</li>
      </div>
  )
}

Forecast.propTypes = {

}

module.exports = Forecast;
