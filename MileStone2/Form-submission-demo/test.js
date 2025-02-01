let form = document.querySelector('form');
let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let dob = document.querySelector('#DOB');
let tbody = document.querySelector('tbody');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let user = userName.value;
    let emailUser = email.value;
    let dobUser = dob.value;

    // let row = document.createElement('tr');
    // let cell1 = document.createElement('td');
    // let cell2 = document.createElement('td');
    // let cell3 = document.createElement('td');

    // cell1.textContent = user;
    // cell2.textContent = emailUser;
    // cell3.textContent = dobUser;
    // row.appendChild(cell1);
    // row.appendChild(cell2);
    // row.appendChild(cell3);
    // tbody.appendChild(row);

    tbody.innerHTML += `<tr> 
        <td>${user} </td>
        <td> ${emailUser}</td>
        <td>${dobUser} </td>
        </tr>`

});