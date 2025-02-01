let arr = [1,2,3,4,5,6,9,11,7]

//sum of elements of the array

let sum = 0;
for(let i = 0; i<arr.length; i++){
        sum += arr[i];
}
console.log(sum);

//printing even numbers

for(let i = 0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    }
}

//printing prime numbers

for(let i = 0; i<arr.length; i++){
    if(isPrime(arr[i])){
        console.log(arr[i]);
    }
}

//checking prime

function isPrime(x){
    if(x <= 1){
        return false;
    }
        for(let i = 2; i<=x/2; i++){
            if(x%i == 0)
                return false;
        }
        return true;
}