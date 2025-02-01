//constructors are old type now classes came from ecma 5
//better to use classes rather than constructors.

//Employee class

class Employee{
    constructor(name,age,department,salary){
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }

}

let e1 = new Employee("ravi",31,"Books-eff",200000);
console.log(e1.getSalary());

class Product{
    constructor(brand,price,model){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    getDiscountPrice(dis){
        return this.price - (this.price * dis/100);
    }
}

let p1 = new Product("Nexa",100000,"EV2");
let p2 = new Product("Tata",80000,"EV1");
let p3 = new Product("Hyundai",60000,"EV3");

console.log(p1.getDiscountPrice(5));