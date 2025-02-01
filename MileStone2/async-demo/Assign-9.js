//The daily activity of the user

//sync
// console.log("Eat Breakfast");
// for(let x = 0; x < 10000000000; x++){};
// console.log("Talked to a friend");
// console.log("write an email");
// for(let i = 0; i<1000000000; i++){};
// console.log("met manager");
// console.log("fix a bug");


//Async way
console.log("Eat Breakfast");
setTimeout(() => {
    console.log("Talked to a friend");
}, 3000);
console.log("write an email");
setTimeout(() => {
    console.log("met manager"); 
}, 3000);
console.log("fix a bug");

