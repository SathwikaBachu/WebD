//changing the content of elements using js.

//Accessing the content
let h1Ele = document.querySelector('.heading');
let btn = document.querySelector('button');
let div = document.querySelector('.main');
let image = document.querySelector('img');



// //changing the content(heading)
// h1Ele.textContent = 'Document Object Model';

// //changing the styles
// h1Ele.style.color='black';


//now by clicking the button we will change the heading
// btn.addEventListener('click',()=>{
//     h1Ele.textContent = 'Document Object Model';
//     h1Ele.style.backgroundColor = 'steelblue';
//     h1Ele.style.color = 'white';
//     image.src = "https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds";

// });


//toggleing the changes

// let isToggeled = false;

// btn.addEventListener('click',()=>{
//     if(isToggeled){
//         h1Ele.textContent = 'Document Object Model';
//         h1Ele.style.backgroundColor = 'steelblue';
//         h1Ele.style.color = 'white';
//     }else{
//         h1Ele.textContent = 'DOM operations';
//         h1Ele.style.backgroundColor = '';
//         h1Ele.style.color = 'steelblue';

//     }
//     isToggeled = !isToggeled;
// });


//changing the image using attribute based modification
//image.src = "https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds";
  


//Adding a new element using innerHTML
div.innerHTML += `<h2> heading - h2</h2> 
<p>this is para</p>`




