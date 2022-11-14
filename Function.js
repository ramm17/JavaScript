console.log("This is Function Tutorial");

// Non-return type function
function greet(name, Greettext="Greetings from JS"){
    console.log(Greettext+"! "+name+', ' +name+ " is a good boy");
}

let name = "Ramm";
let name1 = "Rohan"; 
let name2 = "Princee";
let Greettext="Good Morning";
greet(name, Greettext);
greet(name1, Greettext);
greet(name2);

// console.log(name +"is a good boy");
// console.log(name1 +"is a good boy");
// console.log(name2 +"is a good boy");

// Return type Function
function sum(a,b,c){
    let d=a+b+c;
    return d;
}

let returnVal=sum(1,2,3);
console.log(returnVal);

