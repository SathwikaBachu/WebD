//inheritance using constructors.

function Parent(a){
    this.a = a;

}

function Child(a,b){
    Parent.call(this,a);
    this.b =  b;
}

//inheritance
Child.prototype = Object.create(Parent.prototype);

let c1 = new Child(3,4);

console.log(c1);

function GrandChild(a,b,c){
    Child.call(this,a,b);
    this.c = c;
}

GrandChild.prototype = Object.create(Child.prototype);

let gc1 = new GrandChild(2,3,4);
console.log(gc1.a);