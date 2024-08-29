// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.

function getEvenNumber() {
    let count = 0;
    for (i = 1; i <= 20; i++) {
        let num = parseInt(prompt(`tell me the ${i} number: `));
        if (num % 2 === 0) {
            count++;
        }
    }
    console.log(count);
}

getEvenNumber();