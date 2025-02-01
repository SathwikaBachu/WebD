//using constructors we can create more than 1 type of objects.
//like 100--> employee , student, teacher objects.

//example constructors.

function Employee(name,age,salary){
    //object initiliaztion logic

    this.name = name;
    this.age = age;
    this.salary = salary;

    // this.getName = function(){
    //     return this.name;
    // }; // As here getName function is same for all objects, no variation, so no need to create that 100 getNames--> we can create 1 getName function by putting in prototype
};

Employee.prototype.getName = function(){
    return this.name;                       //creating function in prototype.
                                            //best practice of creating. 
};

let user1 = new Employee("ravi",25,2000);
let user2 = new Employee("rav",20,1500);

console.log(user1.getName());
console.log(user2); 

