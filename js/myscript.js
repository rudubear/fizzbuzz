
let input = parseInt(prompt("Enter a number!"));
let fizzBuzzOutput = "";

for (let number = 1; number < input; number++){
    let addOn = number;
    if (number % 3 == 0 && number %5 == 0){
        addOn = "fizzbuzz";
    } else if (number % 3 == 0) {
        addOn = "fizz";
    }
    else if (number % 5 == 0) {
        addOn = "buzz";
    }
    fizzBuzzOutput = fizzBuzzOutput + addOn.toString() + " ";
}

document.getElementById("fizz").innerHTML = fizzBuzzOutput;
