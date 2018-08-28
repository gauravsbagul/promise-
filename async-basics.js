/* // 026 Async Basics 26 august
console.log('Starting app');

setTimeout(()=> {
    console.log('Insde of callback');
},2000);

setTimeout(() => {
    console.log('second setTime');
}, 0);

console.log('finishing up');
*/
/*
E:\workspaceGaurav\weatherApp>node async-basics.js
Starting app
finishing up
Insde of callback
*/
// 027 Call Stack & Event Loop