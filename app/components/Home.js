var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
    container: {
        backgroundSize: 'cover',
        backgroundImage: "url('app/images/sky.jpeg')",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    header: {
      color: '#FFF',
      fontWeight: '100'
    }
}

function Home(props) {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Select City and State</h1>
            <GetCityContainer />
        </div>
    )
}

module.exports = Home;
