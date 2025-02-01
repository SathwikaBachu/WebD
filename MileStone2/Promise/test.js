// console.log("you said you will call your frnd after 5 mins");
// console.log("your frnd is waiting...");

//let condition = false;


//creating promise(you)
// let phoneCallPromise = new Promise((fullfill,reject) => {
//         setTimeout(() => {
//             if(condition == true){
//                 fullfill("you called your frnd");
//             }else{
//                 reject("didn't called");
//             }
//         }, 5000);
//     }
// );

//consuming the promise(your frnd)
// phoneCallPromise
// .then((successMsg)=>{
//     console.log(successMsg);
// })
// .catch((rejectMsg)=>{
//     console.log(rejectMsg);
// });

// console.log("later actions");


//director said he will release the teaser tonight.

console.log("director said he will release the teaser tonight.");

let technicalIssue = false;
//creating promise(director)
let releasePromise = new Promise((fullfill,reject)=>{
    setTimeout(() => {
        if(technicalIssue == true){
            reject("sorry...technicalIssue");
        }
        else{
            fullfill("teaser is out...");
        }
    }, 8000);
});

//consuming the promise(fans);

releasePromise
.then((successMsg)=>{
    console.log(successMsg);
})
.catch((rejectMsg)=>{
    console.log(rejectMsg);
});


console.log("the later actions like prepering for teaser")

