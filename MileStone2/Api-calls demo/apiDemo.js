fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(todos => console.log(todos))
.catch(err=> console.log(err));