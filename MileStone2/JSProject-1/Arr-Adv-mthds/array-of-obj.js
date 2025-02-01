let emp = [
   
    {
        id : 1,
        name : "john",
        age : 25,
        gender : "male",
        salary :1000
    },

    {
        id : 2,
        name : "ramya",
        age : 20,
        gender : "female",
        salary :2000
    },

    {
        id : 3,
        name : "kavya",
        age : 33,
        gender : "female",
        salary : 3000
    },

    {
        id : 4,
        name : "rasagna",
        age : 19,
        gender : "female",
        salary :3500
    },

];

//get female employees
let ans = emp.filter((ele) => ele.gender == "female");
console.log(ans);

//find emp with highest age.
ans = emp.reduce((a,b) => a.age > b.age ? a : b);
console.log(ans);

//give hike 5000 to males and 10000 to females.

ans = emp.map((ele) => {
    if(ele.gender == "male"){
        ele.salary += 5000; 
        return ele;
    }
    else
        ele.salary += 10000;
        return ele;
}
);
console.log(ans);