var React = require('react');
var PropTypes = React.PropTypes;
var convertUnixDate = require('../util/util');
var Loading = require('./Loading');

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20
  },
  dayContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    listStyle: 'none'
  },
  header: {
    fontSize: 30,
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 25,
    fontWeight: 100
  },
  weather: {
    height: 150,
    marginBottom: 20
  }
}

function DayContainer(props) {
  return (
    <div style={styles.dayContainer}>
      <img style={styles.weather} src={'/app/images/weather-icons/' + props.list.weather[0].icon + '.svg'}/>
      <li style={styles.subheader}>{convertUnixDate(props.list.dt)}</li>
    </div>
  )
}

function Forecast(props) {
  return (
    props.isLoading === true
    ? <Loading />
  : <div>
      <h1 style={styles.header}>{props.city}</h1>
      <h2 style={styles.header}>Select a day</h2>
      <div style={styles.container}>
        {props.forecast.map(function(list, i) {
          return <DayContainer key={list.dt} list={list} />
        })}
  </div>
</div>
)
}

Forecast.propTypes = {
  forecast: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;
