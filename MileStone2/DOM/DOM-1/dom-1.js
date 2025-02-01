//Access the dom objects using js
//we can directly access the dom objects using js
//the dom objects like head and body can directly accessible without any method.

//Accessing head
let headEle = document.head;
console.log(headEle);

//Accessing body
let bodyEle = document.body;
console.log(bodyEle);


//Accessing other elements
 let h1Ele = document.getElementById('heading');
 console.log(h1Ele);


 //Accessing by tag name
 let h1ele = document.querySelector('h1')
 console.log(h1ele);

 //Accessing by id
 h1ele = document.querySelector('#heading');
 console.log(h1ele);

 //Accessing by class
 let item = document.querySelector('.item')
 console.log(item);

 //Like this by using the query selector we can access the dom elements with id, class and tag name and new approach and recommneded.
 