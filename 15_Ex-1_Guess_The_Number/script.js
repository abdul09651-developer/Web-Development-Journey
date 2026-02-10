let random = Math.ceil(Math.random() * 100);
console.log(random);

let guess;
let attempts = 0;

do {
    guess = Number(prompt("Enter your number (1-100)"));
    attempts++;

    if (guess < 1 || guess > 100) {
        alert("Enter number between 1 and 100");
        continue;
    }

    if (guess < random) {
        console.log("Your guess is LESS than the number");
    } else if (guess > random) {
        console.log("Your guess is GREATER than the number");
    }

    if (attempts >= 10) {
        console.log(" Max attempts reached");
        break;
    }

} while (guess !== random);

if (guess === random) {
    console.log("Congratulations! You guessed the number");
    console.log("Score:", 100 - attempts);
}

