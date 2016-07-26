var React = require('react');

var styles = {
    container: {
        width: '100%',
        height: '92%'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(252, 90, 44, 0.89)',
      color: '#fff',
      padding: 5,
    }
}

var MainContainer = React.createClass({
    render: function() {
        return (
            <div style={styles.container}>
              <div style={styles.header}>
                <h1 style={{margin: 10, fontWeight: 200}}>Weather App</h1>
              </div>
                {this.props.children}
            </div>
        )
    }
});

module.exports = MainContainer;
