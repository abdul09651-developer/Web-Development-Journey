console.log("Hello I am Conditional tutorial")

let age =17;
let grace = 2;
age+=grace;
console.log(age+grace);
if(age+grace >18)
{
    console.log("You can drive");
}
else{
    console.log("You cannot drive")
}

//IMPORTANT
// == means equal value only or comparing two value
// === means equal value and type both
// !== means not equal value or not equal type


//ternary operator
let a = 4;
let b = 8;
let c = a>b ?(a-b):(b-a);
console.log(c)