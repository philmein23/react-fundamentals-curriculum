var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var MainContainer = require('../containers/Main');
var HomeContainer = require('../containers/HomeContainer');
var ForecastContainer = require('../containers/ForecastContainer');
var DetailsContainer = require('../containers/DetailsContainer');

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='details/:city'  component={DetailsContainer}/>
    </Route>
  </Router>
);

module.exports = routes;
