//Using Reduce method

let arr = [];
let num = prompt("Enter a number: ");
if (num > 0) {
    for (let i = num; i > 0; i--) {
        arr.push(i);
    }
    console.log(arr)

    const product = (a, b) => {
        return a * b

    }
    console.log(`The factorial of ${num} is: `, arr.reduce(product))

} else if (num == 0) {
    console.log(`The factorial of 0 is: 1`)
}
else {
    alert("Invalid input(Enter only positive values)")
}

