var React = require('react');
var PropTypes = React.PropTypes;
var convertUnixDate = require('../util/util');
var temperatureConverter = require('../util/temperature');

var styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        fontWeight: 100,
        fontSize: 75
    },
    subheader: {
        fontWeight: 100,
        fontSize: 50
    },
    icon: {
        height: 150
    }
}

function Details(props) {
    var icon = props.weather.weather[0].icon;
    var date = convertUnixDate(props.weather.dt);
	return (
		<div style={styles.container}>
            <h1 style={styles.header}>{props.city}</h1>
            <div style={styles.subheader}>{date}</div>
            <img style={styles.icon} src={'/app/images/weather-icons/' + icon + '.svg'} />
            <h1 style={styles.header}>{props.weather.weather[0].description}</h1>
            <div style={styles.subheader}>Min temp: {Math.round(temperatureConverter(props.weather.temp.min))} degrees</div>
            <div style={styles.subheader}>Max temp: {Math.round(temperatureConverter(props.weather.temp.max))} degrees</div>
            <div style={styles.subheader}>Humidity: {props.weather.humidity}</div>
        </div>
        )

};

Details.propTypes = {
    city: PropTypes.string.isRequired,
    weather: PropTypes.object.isRequired
}

module.exports = Details;