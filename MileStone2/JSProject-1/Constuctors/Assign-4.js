//creating Employee constructor 
function Employee(name,age,basicSalary){
    this.name = name;
    this.age = age;
    this.basicSalary = basicSalary;
}

Employee.prototype.getSalary = function(){
        return this.basicSalary;
}

//creating  5 Employee objects
let e1 = new Employee("ravi",31,10000);
let e2 = new Employee("Rahul",25,8000);
let e3 = new Employee("venu",35,6000);
let e4 = new Employee("kavya",24,5000);
let e5 = new Employee("sai",30,7000);

console.log(e1);
console.log(e1.getSalary());


//Product constructor

function Product(brand,price,model){
    this.brand = brand;
    this.price = price;
    this.model = model;
}

Product.prototype.getDiscountPrice = function(discount){
    return this.price - (this.price * discount/100);
}

let p1 = new Product("Nexa",100000,"EV2");
let p2 = new Product("Tata",80000,"EV1");
let p3 = new Product("Hyundai",60000,"EV3");

console.log(p1.getDiscountPrice(20));

