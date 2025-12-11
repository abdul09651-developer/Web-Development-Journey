console.log("Learning Loop of JavaScript")

/*
Five types of loops:

1) For loops
2) For in loops
3) for of loops
4) While loop
5) Do while loop
*/
let a= 1;

//for loop
// for (let i = 0; i < 100; i++) {
//     console.log(a +i);
// }


let obj ={
    name: "Raj",
    role: "Programmer",
    company: "Microsoft"
}
//forin loop
for (const key in obj) {
    console.log(key)
    
    
}

//for of loop
// for (const c of "Abdul") {
//     console.log(c)
    
// }


//While loop 
// let i=1;
// while (i<6) {
//     console.log(i)
//     i++;
    
// }

//Do While loop
let i=10;
do {
    console.log(i)
    i++
} while (i<5);

