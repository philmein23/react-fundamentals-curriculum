function temperatureConverter(temp) {
    var newTemp;
    newTemp = (temp - 273.15) * 1.8 + 32;
    return newTemp;
}

module.exports = temperatureConverter;