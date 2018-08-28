const request = require('request')



var geocodeAddress = (address) => {
return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,

        json: true
    }, (error, response, body) => {
        if (error) {
            reject(('unable to to connect google server'));

        } else if (body.status === 'ZERO_RESULTS') {
            reject(('unable to find the address'));
        } else if (body.status === 'OK') {
            resolve({
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    })
});
};
    geocodeAddress('422011').then((location) => {
// geocodeAddress('00001').then((location) => {

    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});