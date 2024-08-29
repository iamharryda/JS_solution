// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.


function getAverage() {
    let sum = 0;
    let i = 0;
    while (true) {
        let num = +prompt("give me a single digit number: ");
        sum += num;
        i++;
        let opinion = prompt("Do you want to continue giving numbers? (y/n): ");
        if (opinion == "n") {
            break;
        }

    }
    let avg = sum / i;
    console.log(`the average is ${avg}`);


}

getAverage();