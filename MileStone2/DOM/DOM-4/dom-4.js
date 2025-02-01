//reading the values from input
let input = document.querySelector('#userName');
let btn = document.querySelector('button');

// btn.addEventListener('click',()=>{
//     let name = input.value;
//     console.log(name);
// })

//now rendring in the webpage itself.
// btn.addEventListener('click',()=>{
//     let name = input.value;
//     let head = document.createElement('h1');
//     head.textContent = name;
//     document.body.appendChild(head);
// })

//sample Calculator
let add = document.querySelector('#btn-add');
let sub = document.querySelector('#btn-sub');
let first = document.querySelector('#first');
let second = document.querySelector('#second');

add.addEventListener('click',()=>{
    let fi = first.value;
    let se = second.value;
    let res = Number(fi)+Number(se);
    let ans = document.createElement('p');
    ans.textContent = res;
    document.body.appendChild(ans);
});

sub.addEventListener('click',()=>{
    let fi = first.value;
    let se = second.value;
    let res = Number(fi)-Number(se);
    let ans = document.createElement('p');
    ans.textContent = res;
    document.body.appendChild(ans);
});
