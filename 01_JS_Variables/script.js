console.log("Hey this is tutorial of javascript variables")


let a=5;
var a1=7;
a = a+1;
let b=6;
let c="harry";
let _a="abdul";
// var 55a= "rahul"; invalid variable name does not start with Number

console.log(a+b);
console.log(typeof a,typeof b, typeof c);

{
    var a1= 77; //var is globally scoped
    let a = 55; // let is block scoped
    console.log(a);
    console.log(a1);
}
console.log(a);
console.log(a1);
//const a1 = 7;
//a1 = a1 + 1; // Not allowed because a1 is constant


let x ="Mohan"
let y =22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

let o=
{
    "name": "Harry",
    "job code":5666,
    "is_handsome": true
}
console.log(o)
o.salary = "10000"
console.log(o)