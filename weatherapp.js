const request = require('request');
const yargs = require('yargs');
const encodeurl = require('encodeurl')
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
//console.log(argv);
var encodedAddress = encodeURIComponent(argv.address);
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    //error //url: 'https://maps.googleapis.com/maps/api/geocode/json?address=6%20a2%20yogeshwar%20bungalow%20dwarka%20nashik',
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined,2));
    // console.log(JSON.stringify(response, undefined,2));
    //console.log(JSON.stringify(error, undefined, 2));
    // console.log(body);
    if (error) {
        console.log('unable to to connect google server');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('unable to find the address');
    } else if (body.status === 'OK') {
        console.log(`address: ${body.results[0].formatted_address}`);
        console.log(`latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`longitude: ${body.results[0].geometry.location.lng}`);
    }
});
console.log