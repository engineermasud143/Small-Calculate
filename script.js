function getNumbers() {
    let input = document.getElementById("numbers").value;
    return input.split(',').map(Number);
}

function calculateSum() {
    let numbers = getNumbers();
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    document.getElementById("result").innerText = "যোগফল: " + sum;
}

function calculateAverage() {
    let numbers = getNumbers();
    let avg = numbers.length ? numbers.reduce((acc, num) => acc + num, 0) / numbers.length : 0;
    document.getElementById("result").innerText = "গড়: " + avg;
}

function calculateMultiplication() {
    let numbers = getNumbers();
    let product = numbers.reduce((acc, num) => acc * num, 1);
    document.getElementById("result").innerText = "গুণফল: " + product;
}

document.getElementById("calculateSum").addEventListener("click", calculateSum);
document.getElementById("calculateAverage").addEventListener("click", calculateAverage);
document.getElementById("calculateMultiplication").addEventListener("click", calculateMultiplication);