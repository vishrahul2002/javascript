// Creating Promises
const promiseOne = new Promise(function(resolve, reject) {
    // Do async task
     // call Database, cryptography, network
     setTimeout(() => {
        console.log("Async completed");
        resolve() // here we have to use resolve method to connect the resolve and then 
     }, 2000);
})

// Consuming Promise
promiseOne.then(() => {
    console.log('Promise Consumed');
}) 

// Creating a Promise without any variable and using it directly
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async Task 2');
        resolve()
    }, 1000);
}).then(function(){
    console.log('Async Task 2 Resovled');
})