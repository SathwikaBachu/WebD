// Acessing the elements

let input = document.querySelector('#first');
let btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    let val = input.value;
    let res = getFactors(val);
    let ans = document.createElement('p');
    ans.textContent = `Factors of ${val} are: ${res}`;
    document.body.appendChild(ans);
});

let getFactors = (num) => {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }    
        return factors;    
}