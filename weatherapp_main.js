//actual weather application 
// URL : https://api.darksky.net/forecast/8d2b431095209bb826b44fbc2b6e92c0/19.9974533,73.789802299

// wheatherapp1 and geocode are connected
const request = require('request');
//const yargs = require('yargs');
// const encodeurl = require('encodeurl')
// const argv = yargs
//     .options({
//         a: { //aliace
//             demand: true,
//             alias: 'address',
//             describe: 'address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;
//console.log(argv);
//var encodedAddress = encodeURIComponent(argv.address);
request({
   // url: 'https://api.darksky.net/forecast/8d2b431095209bb826b44fbc2b6e92c0/19.9974533,73.789802299 ', //  Nashik
      url:      'https://api.darksky.net/forecast/8d2b431095209bb826b44fbc2b6e92c0/35.86166,104.195397', // China
    json: true
}, (error, response, body) => {
     if (error) 
         console.log('unable to to connect to forecast.io');
      else if (response.statusCode === 400) 
         console.log('unable to find the address');
      else if (response.statusCode === 200) 
        console.log(body.currently.temperature); 
     else console.log('Unable tofetch weather');   
});




