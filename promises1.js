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
asyncAdd(5,'7').then((res)=> {
 //   asyncAdd(5,'seventeen').then((res)=> {
    console.log('result: ', res);
    return asyncAdd(res, 33);
    // return asyncAdd(res, '33');
}).then((res) => {
    console.log('should the 45 :', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});