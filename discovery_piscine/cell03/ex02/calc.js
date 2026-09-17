const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const operator = document.getElementById("operator");
const calculate = document.getElementById("calculate");

calculate.onclick = function() {
    const a = Number(firstNumber.value);
    const b = Number(secondNumber.value);
    const op = operator.value;

    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        alert("Error :(");
        return;
    }

    if ((op === "/" || op === "%") && b === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    if (op === "+") {
        result = a + b;
    } else if (op === "-") {
        result = a - b;
    } else if (op === "*") {
        result = a * b;
    } else if (op === "/") {
        result = a / b;
    } else if (op === "%") {
        result = a % b;
    }

    alert(result);
    console.log(result);
};

setInterval(function() {
    alert("Please, use me...");
}, 30000);