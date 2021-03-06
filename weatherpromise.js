//weather with promise 
const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
    .options({
        a: { //aliace
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/8d2b431095209bb826b44fbc2b6e92c0/${lat},${lng}`
    // var weatherUrl = `https://api.darksky.net/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`
    //console.log("weatherUrl",weatherUrl)
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    //console.log(temperature);
    console.log(`It's currently ${temperature}.its feels like ${apparentTemperature}`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to teh API server');
    } else {
        console.log(e.message);
    }
});