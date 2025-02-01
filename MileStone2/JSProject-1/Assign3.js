//objects

let student = {
    name : "Sathwika",
    Age : 19,
    branch : 'Ds',
    roll_No : 6769,
    marks  : [90, 80, 70, 60, 50],
    address : {
        street : "street1",
        city : "city1",
        state : "state1"
    },
    getAverage : function(){
        let sum = 0;
        for(let i  = 0; i<this.marks.length; i++){
            sum += this.marks[i];
        }
        return sum;
    }

};

// console.log(student.getAverage());

// console.log(student);

let employee = {
    name : "Sathwika",
    Age : 31,
    role : 'SDE',
    eno : 91
};
//console.log(employee);


let product = {
    pno : 25,
    pname : "car",
    model : "Thor",
    price :  50000,
    getDiscount(dis){
        return this.price - (dis/100);
    }
}



console.log(product.getDiscount(100));

let car = Object.create(product);//putting this in product prototype..--> inheritance.
console.log(car);
console.log(Object.getPrototypeOf(product));
console.log(car.model);


let parent = {
    pno:123,
    name:"Sathwika",
    age:18
};

let child = {
    name : 'sathwi',
    Age :1
};

// first way inheritance bw objects
Object.setPrototypeOf(child,parent);
console.log(child);

//second way of inheritance bw objects
let child1 = Object.create(parent);

child1.No = 1;
child1.name = "Bachu";
child1.add = 'Hyd';

console.log(child1.pno);
console.log(child1);








