var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '300px'
  }
}

function GetCity(props) {
  return (
    <form onSubmit={props.onSubmitCity}>
      <div style={styles.container}>
        <input type="text"
          onChange={props.onUpdateCity}
          placeholder="Type in City"
          value={props.city}/>
        <button style={{margin: 10}} className="btn btn-success" type="submit">Get Weather</button>
      </div>
    </form>

  )
}

GetCity.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetCity;
