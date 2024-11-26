// Function to generate Fibonacci sequence up to n
function generateFibonacci(n) {
    if (n < 0) return [];
    let fib = [0, 1];
    let nextTerm = 0;

    while ((nextTerm = fib[fib.length - 1] + fib[fib.length - 2]) <= n) {
        fib.push(nextTerm);
    }

    return fib.filter((num) => num <= n);
}

// Event listener for the form submission
document
    .getElementById("fibonacci-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const input = document.getElementById("number-input");
        const n = parseInt(input.value, 10);

        if (isNaN(n) || n < 0) {
            alert("Please enter a valid positive number.");
            return;
        }

        const result = generateFibonacci(n);
        document.getElementById("output").textContent = result.join(", ");
    });
