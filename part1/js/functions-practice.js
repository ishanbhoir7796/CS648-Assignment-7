// STEP 1
function halfNumber(n) {
    let result = n / 2;
    console.log("Half of " + n + " is " + result + ".");
    return result;
}

// STEP 2
function squareNumber(n) {
    let result = n * n;
    console.log("The result of squaring the number " + n + " is " + result + ".");
    return result;
}

// STEP 3
function percentOf(m, n) {
    let result = (m / n) * 100;
    console.log(m + " is " + result + "% of " + n + ".");
    return result;
}

// STEP 4
function findModulus(m, n) {
    let result = n % m;
    console.log(result + " is the modulus of " + m + " and " + n + ".");
    return result;
}

// STEP 5
function sumNumbers() {
    let data = window.prompt("Sum Numbers\nEnter the numbers (separated by commas):");
    let numbers = data.split(",");
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += parseFloat(numbers[i].trim());
    }

    console.log("Sum of numbers: " + sum);
    return sum;
}

// MAIN MENU
let option = window.prompt(
    "Choose operation:\n1. Half Number\n2. Square Number\n3. Percent Of\n4. Find Modulus\n5. Sum of Numbers"
);

let m, n;

switch (option) {
    case "1":
        n = parseFloat(window.prompt("Half Number\nEnter the number:"));
        halfNumber(n);
        break;

    case "2":
        n = parseFloat(window.prompt("Square Number\nEnter the number:"));
        squareNumber(n);
        break;

    case "3":
        m = parseFloat(window.prompt("Percent Of\nEnter first number:"));
        n = parseFloat(window.prompt("Percent Of\nEnter second number:"));
        percentOf(m, n);
        break;

    case "4":
        m = parseFloat(window.prompt("Find Modulus\nEnter first number:"));
        n = parseFloat(window.prompt("Find Modulus\nEnter second number:"));
        findModulus(m, n);
        break;

    case "5":
        sumNumbers();
        break;

    default:
        window.alert("Please enter a correct operation (1-5).");
}