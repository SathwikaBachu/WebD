let body = document.body;
let main = document.querySelector('.main');
let list = document.querySelector('.list');


//Acessing childrens of a body
let ch = body.children;
console.log(ch);
console.log(ch[1]);
let first = body.firstElementChild;
let last = body.lastElementChild;
console.log(first);
console.log(last);

//Acessing parents from a child
let p = main.parentElement;
console.log(p);
let p1 = list.parentElement;
console.log(p1);

//Acessing siblings
let sib = list.previousElementSibling;
console.log(sib);
let sib1 = main.nextElementSibling;
console.log(sib1);
