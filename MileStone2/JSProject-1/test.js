console.log("hello world");
let a = 900;
console.log('value of a '+ a);

let b = 900;

if(a>b){
    console.log("a:",a);
}
else if(a == b)
    console.log("equal");
else
    console.log("b :",b)

//difference between "==" and "==="

//equal operator
let s = 100;
let t = "100";
let q = 100; 
console.log(s == t)//checks only value not type. -->true
console.log(s === t)//checks  value and type.--> false
console.log(s === q)//checks  value and type. -->true

//functions

//factors of a given number

function getFactor(x){
    
    for(let i = 1; i<=x; i++){
        if(x%i == 0){
            console.log(i);
        }
    }
}

getFactor(10);

//checking prime number.

let isPrime  = function(x){
    for(let i = 2; i<x/2; i++){
        if(x%i == 0){
            console.log(x,"is not a prime number");
            return;
        }
    }
    console.log(x,"is a prime number");
    return;

}

isPrime(10);


//printing even factors of a given number

let getEvenFactors = function(x){
    for(let i = 2; i<x; i+=2){
        if(x%i == 0){
            console.log(i);
        }
    }
}

getEvenFactors(12);

//sum of digits of a number
let sumOfDigits = function(x){
    let sum = 0;
    while(x>0){
        sum += x%10;
        x = Math.floor(x/10);
    }
    console.log(sum);
}

sumOfDigits(234);