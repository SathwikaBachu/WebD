let main = document.querySelector('.main');

//fecting data from API
function getUsers(){
    fetch('https://reqres.in/api/users?page=2')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        let users = data.data;
        
        for(let user of users){
            main.innerHTML += `
            <div class="col">

            <div class='card text-center h-100'>
                    <img src=${user.avatar} class='w-100 m-1 rounded'/>
                    <div class='card-body'>
                      <h3>${user.id}</h3>
                      <p class='lead'>${user.first_name} ${user.last_name}</p>
                      <h6 class='text-primary'>${user.email}</h4>
                    </div>
                    <div>

            </div>
            `
        }
    })
    .catch(err=>console.log(err));
}
getUsers();

