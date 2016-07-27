var moment = require('moment');

var covertUnixDate = function(unix) {
  return moment.unix(unix).format("dddd DD MMMM");
}

module.exports = covertUnixDate;
