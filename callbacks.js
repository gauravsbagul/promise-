//028 Callback Functions & APIs
console.log('Callback Functions & APIs started');
var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'gaurav'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);

};
getUser(31, (userObject) => {
    console.log(userObject);
});
/*https://maps.googleapis.com/maps/api/geocode/json?address=6%20a2%20yogeshwar%20bungalow%20dwarka%20nashik */