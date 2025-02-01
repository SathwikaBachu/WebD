//promise to check whether the package is arrived after 5 mins.

console.log("promise to check whether the package is arrived after 5 mins.");

let traffic = true;

//creating Promise (package Company)
let packagePromise = new Promise((fullfill,reject)=>{
    setTimeout(() => {
        if(traffic == true ){
            reject("sorry..Package is not arrived");
        }
        else{
            fullfill("Package is arrived");
        }
    }, 5000);
});

//consume package(you)

packagePromise
.then((successMsg)=>{
    console.log(successMsg);
})
.catch((rejectMsg)=>{
    console.log(rejectMsg);
});

console.log("the later actions -- preparing the order");