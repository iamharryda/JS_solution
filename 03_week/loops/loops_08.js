// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.
function getMaxMin() {
    let ques = +prompt("how many numbers you wish to input: ");
    let maxi, mini;
    for (i = 1; i <= ques; i++) {
        let num = +prompt(`give me your ${i} number: `);
        if (i == 1) {
            maxi = num;
            mini = num;
        }
        else {
            if (maxi < num) {
                maxi = num;
            }
            if (mini > num) {
                mini = num;
            }
        }

    }

    console.log(`the maximum number is ${maxi}`);
    console.log(`the minimum number is ${mini}`);

}

getMaxMin();