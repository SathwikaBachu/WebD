//the adv methods of arr are:
//filter()
//map()
// reduce()
// forEach()
// find()
// findIndex()


let arr = [1,2,3,4];

//filter --> finding the ele according to condition.

//finding ele >2;
let ans = arr.filter((x) => x>2);
console.log(ans);

//map is used to change/update the ele.
ans = arr.map((x) => x+2);
console.log(ans);

//map ( add 10 ele which are <2 and 20 which are having >=4)

// ans = arr.map( (ele) => {
//     if(ele<2){
//         return ele+10;
//     }
//     else 
//       return ele+20;
// }
// )

ans = arr.map((ele) => ele<2 ? ele+10 : ele+20);
console.log(ans);

//reduce() --> reduce the arr to 1 value based on condition.

//sum of ele.
ans = arr.reduce((accumulator, ele) => accumulator+ele);
console.log(ans);

//smallest ele
ans = arr.reduce((a,b) => a<b?a:b);
console.log(ans);

//greater ele
ans = arr.reduce((a,b) => a>b? a : b);
console.log(ans);


//forEach -> iteration
arr.forEach((val,idx) => console.log("value is",val,"at index",idx));

//find() --> The find() method returns the value of the first element that passes a test.
let res = arr.find((ele) => ele === 1);
console.log(res);
let anss = arr.find((ele) => ele === 20);
console.log(anss); //The find() method returns undefined if no elements are found.

//findIndex() -->The findIndex() method returns the index (position) of the first element that passes a test.

res = arr.findIndex((ele) => ele === 1);
console.log(res);

anss = arr.findIndex((ele) => ele === 20);
console.log(anss); //The findIndex() method returns -1 if no match is found.


