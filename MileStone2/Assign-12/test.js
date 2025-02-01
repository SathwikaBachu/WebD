let main = document.querySelector('.main');
let tbody = document.querySelector('tbody');

function getData(){
    fetch('https://jsonplaceholder.typicode.com/todos ')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            tbody.innerHTML += `
            <tr>
                <td>${item.userId}</td>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.completed}</td>
            </tr>
            `
        })

        data.forEach(item =>{
            main.innerHTML += `
            <div class ='col'> 
                <div class = 'card text-center h-100'> 
                     <div class = 'card-body'>
                     <h6>UserId: ${item.userId}</h6>
                     <h6>Id: ${item.id}</h6>
                     <h6>Completed: ${item.completed}</h6>
                     </div>
                </div>
            </div>
            `
        })
    })
    .catch(error => console.error(error));
}
getData();



// code to prime number




