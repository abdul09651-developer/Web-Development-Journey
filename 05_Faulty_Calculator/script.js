
let random = Math.random();
let num1 = parseFloat(prompt("Enter your first number: "));
let operation = prompt("Select your operation from(+,-,*,/): ").trim();
let num2 = parseFloat(prompt("Enter your second number: "));

let obj ={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if (random>0.1){
    // Perform correct calculation
    alert(`The result is: ${eval(`${num1} ${operation} ${num2}`)}`);

}
else{
    // Perform faulty calculation
    alert(`The result is: ${eval(`${num1} ${obj[operation]} ${num2}`)}`);
}


// const faultycalc=(num1,num2,operation)=>{
//     if(num1>0 && num2>0){
//         if(Math.random()>0.1){
//             if(operation=="+"){
//                 console.log(`Addition of ${num1} and ${num2} `,num1+num2)
//             }
//             else if(operation=="*"){
//                 console.log(`Multiplication of ${num1} and ${num2} `,num1*num2)
//             }
//             else if(operation=="-"){ 
//             if(num1>num2){
//                     console.log(`Substraction of ${num1} and ${num2} `,num1-num2)

//                 }else{
//                     console.log(`Substraction of ${num1} and ${num2} `,num2-num1)
//                 }
//             }
//             else if(operation=="/"){
//                 if(num1==0 || num2==0 ){
//                     console.log("Division with 0 is not allowed")
//                 }
//                 else{
//                     if(num1>num2){
//                     console.log(`Division of ${num1} and ${num2} `,num1/num2)

//                     }else{
//                     console.log(`Division of ${num1} and ${num2} `,num2/num1)
//                 }

//                 }
                
//             }
//             else{
//                 console.log("Unknown Operation!")
//             }

//         }
//         else{
//             if(operation=="+"){
//                 if(num1>num2){
//                 console.log(`Addition of ${num1} and ${num2} `,num1-num2)

//                 }else{
//                     console.log(`Addition of ${num1} and ${num2} `,num2-num1)
//                 }       
//             }
//             else if(operation=="*"){
//                 console.log(`Multiplication of ${num1} and ${num2} `,num1+num2)
//             }
//             else if(operation=="-"){
//                 if(num1>num2){
//                 console.log(`Substraction of ${num1} and ${num2} `,num1/num2)

//                 }else{
//                     console.log(`Substraction of ${num1} and ${num2} `,num2/num1)
//                 }
//             }
//             else if(operation=="/"){
//                 console.log(`Division of ${num1} and ${num2} `,num1**num2)
//             }
//             else{
//                 console.log("Unknown operation!")
//             }
//         }
//     }
//     else{
//         console.log("Invalid numeric input!")
//     }
//     }
        
// faultycalc(num1,num2,operation)