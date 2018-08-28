//promises 28 august
var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof(a)==='number' && typeof(b) ==='number'){
                resolve(a+b);
            } else {
                reject('arguments should be numbers');
        }    
    },1500);
});
};
asyncAdd(5,7).then((res)=> {
 //   asyncAdd(5,'seventeen').then((res)=> {
    console.log('result: ', res);
    },(errorMessage)=> {
    console.log(errorMessage);
})
// var somePromise = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve('hey It worked!..'); //or
//         // reject('unable to fullfill promise');
//     },1500);
    
// }); 
// somePromise.then((message) => {
// console.log('success', message);
// }, (errorMessage) =>{
//     console.log(errorMessage);
// })