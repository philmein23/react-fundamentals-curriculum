var React = require('react');
var GetCityContainer = require('./GetCityContainer');

var styles = {
    container: {
        width: '100%',
        height: '92%'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgb(16, 121, 150)',
      padding: 5,
    }
}

var MainContainer = React.createClass({
    render: function() {
        return (
            <div style={styles.container}>
              <div style={styles.header}>
                <h1 style={{margin: 10, fontWeight: 200, color: '#fff'}}>Weather App</h1>
                <GetCityContainer direction='row' />
              </div>
                {this.props.children}
            </div>
        )
    }
});

module.exports = MainContainer;
