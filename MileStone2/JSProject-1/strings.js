let wish = "good marning all!!";

console.log(wish.length);

console.log(wish.slice(0,5)); // 5 is not considered.

console.log(wish.replaceAll("all","everyone"));
console.log(wish.split(' '));

//Assign-7

let str = "aaaabbababababbbbabababaaaa";

let a = 0;
let b = 0;

for(let i = 0; i<str.length; i++){
    if(str.charAt(i) == 'a')
        a++;
    else
        b++;
}
console.log("a is :", a);
console.log(`b is : ${b}`);//template literals.

let getWordsLength = function(sentence){
    let words = sentence.split(" ");
    return words.length;
}
console.log(getWordsLength("how are you all"));