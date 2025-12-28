// Write a program to calculate factorial using reduce and for loops



//Using For Loops

let num = prompt("Enter a number: ");

let product = 1;
if (num >= 0) {
    for (let i = num; i > 0; i--) {
        product = i * product;

    }
    console.log(`The factorial of ${num} is: `,product);
}
else {
    alert("Invalid input(Enter only positive number)")

}


