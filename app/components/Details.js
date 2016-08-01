var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
    container: {
        display: 'flex',
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
	return (
		<div style={styles.container}>
            <h1 style={styles.header}>{props.city}</h1>
            <img style={styles.icon} src={'/app/images/weather-icons/' + icon + '.svg'} />
            <h1 style={styles.header}>{props.weather.weather[0].description}</h1>
            <div style={styles.subheader}>Min temp: {props.weather.temp.min}</div>
            <div style={styles.subheader}>Min temp: {props.weather.temp.max}</div>
            <div style={styles.subheader}>Humidity: {props.weather.humidity}</div>
        </div>
        )

};

module.exports = Details;