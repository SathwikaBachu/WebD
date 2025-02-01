//inheritance using classes

class Parent{
    constructor(a){
        this.a = a;
    }
}

class Child extends Parent{
    constructor(a,b){
        super(a);
        this.b = b;
    }
}

class GrandChild extends Child{
    constructor(a,b,c){
        super(a,b);
        this.c = c;
    }
}
let c1 = new Child(3,4);
console.log(c1);

let gc1 = new GrandChild(2,3,4);
console.log(gc1.a);
