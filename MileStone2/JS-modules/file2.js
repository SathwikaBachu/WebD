//importing to this  file

//named import
import {name,age} from "./file1.js";
console.log(name);
console.log(age);

//default
import data from "./file1.js";
console.log(data);

import { employees } from "./Assign-8.js";

let ans = employees.filter((ele) => ele.address.city === "hyderabad");
let names = ans.map((ele) => ele.name);
console.log(names);

let ans1 = employees.filter((ele) => ele.age > 40 && ele.age<50);
let names1 = ans1.map((ele) => ele.name);
let address1 = ans1.map((ele) => ele.address);

console.log(names1);
console.log(address1);

let ans2 = employees.filter((ele) => ele.address.city != "hyderabad");
let names2 = ans2.map((ele) => ele.name);
console.log(names2);


//Find the names (array of names) of employees whose skill is  "reactjs"
let ans4 = employees.filter((ele) => ele.skills.includes("reactjs"));
let names4 = ans4.map((ele) => ele.name);
console.log(names4);

        

