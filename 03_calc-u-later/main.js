const calcNums = document.querySelectorAll('.numbtn div');
const calcOps = document.querySelectorAll('.opsbtns div');
const equalsBtn = document.getElementById('equals')
const resetBtn = document.getElementById('reset')

calcNums.forEach(num => {
    num.addEventListener("click", (p) => pushToOutput(p.currentTarget.innerText));
});

calcOps.forEach(op => {
    op.addEventListener("click", (p) => pushToOutput(p.currentTarget.title));
});

equalsBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", reset);

function pushToOutput(value) {
    const output = document.getElementById("output");
    output.innerText += value;
}

function calculate() {
    const output = document.getElementById("output");
    try {
        output.innerText = eval(output.innerText);
    }
    catch (e) {
        output.innerText = 'Invalid input';
    }
}

function reset() {
    const output = document.getElementById("output");
    output.innerText = "";
}