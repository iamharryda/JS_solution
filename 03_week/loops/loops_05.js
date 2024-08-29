// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

function getAvgNum() {
    let sum = 0, i = 0;
    while (true) {
        let num = +prompt("enter your number: ");
        if (num === 0) {
            break
        }
        i++;
        sum += num;
    }

    let avg = sum / i;
    console.log(`the average is ${avg}`);


}

getAvgNum();