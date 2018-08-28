// wheatherapp1 and geocode are connected
const yargs = require('yargs');
const encodeurl = require('encodeurl')
const geocode = require('./geocode/geocode');
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

geocode.geocodeAddress(argv.address, (errorMessage, result) =>
{
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(result, undefined, 2 ));
    }
});

