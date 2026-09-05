//your JS code here. If required.
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.onclick = function () {
    const num = Number(input.value);

    new Promise((resolve) => {
        setTimeout(() => {
            output.textContent = `Result: ${num}`;
            resolve(num);
        }, 2000);
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                value = value * 2;
                output.textContent = `Result: ${value}`;
                resolve(value);
            }, 2000);
        });
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                value = value - 3;
                output.textContent = `Result: ${value}`;
                resolve(value);
            }, 1000);
        });
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                value = value / 2;
                output.textContent = `Result: ${value}`;
                resolve(value);
            }, 1000);
        });
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                value = value + 10;
                output.textContent = `Final Result: ${value}`;
                resolve(value);
            }, 1000);
        });
    });
};