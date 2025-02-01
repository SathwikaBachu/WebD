let arr = [2,3,45,6];

//finding sum

let ans = arr.reduce((sum,ele) => sum+ele);
console.log(ans);


//Create new array by adding 10 to first element, 20 to second element , 30 to third element and so on using map() method.
ans = arr.map((ele,idx) => ele + (idx+1)*10);
console.log(ans);



let std =  [

    { name:"ravi", marks :{ maths: 98, physics : 70 , chemistry :88}},

    { name:"bhanu", marks :{ maths: 98, physics : 50 , chemistry :68}},

    { name:"kiran", marks :{ maths: 50, physics : 82 , chemistry :94}},

];

//Find the names of students who got highest marks in maths.

let max = std.reduce((a,b) => a.marks.maths > b.marks.maths ?  a : b);
const high = max.marks.maths;
console.log(high);

let res = std.filter((ele) => ele.marks.maths === high);
console.log(res.map((ele) => ele.name));

