//Synchronous way => means one will execute after the another. line 2 will execute afer completion of line 1.


//restaraunt example..

//synchronous.
// console.log("3 customers entered the restaraunt");
// console.log("customer -1 ordered biryani it will take 15 mins");
// for(let i = 0; i < 10000000000; i++){}
// console.log("customer-1 recieved order biryani");


// console.log("customer -2 ordered pizza it will take 10 mins");
// for(let i = 0; i < 8000000000; i++){}
// console.log("customer-2 recieved order pizza");

// console.log("customer -3 ordered soup it will take 5 mins");
// for(let i = 0; i < 600000000; i++){}
// console.log("customer-3 recieved order soup");

//Async way
console.log("3 customers entered the restaraunt");
console.log("customer -1 ordered biryani it will take 15 mins");
setTimeout(() => {
    console.log("customer-1 recieved order biryani");
}, 5000);

console.log("customer - 2 ordered pizza it will take 10 mins");
setTimeout(() => {
    console.log("customer-2 recieved order pizza");
}, 3000);

console.log("customer -3 ordered soup it will take 5 mins");
setTimeout(() => {
    console.log("customer-3 recieved order soup");
}, 1000);



