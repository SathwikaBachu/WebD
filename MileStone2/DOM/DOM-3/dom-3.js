//Accessing the data
let main = document.querySelector('.main');
let btn = document.querySelector('button');

//Adding new para by clicking the button

btn.addEventListener('click',()=>{
    //create new para
    let para = document.createElement('p');
    para.textContent = 'This is a new paragraph';
    //Append to div element
    main.appendChild(para);
});