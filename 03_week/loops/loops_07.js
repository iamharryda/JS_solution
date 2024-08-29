/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */

function getAvgMax() {
    let maxi, mini, count = 0, sum = 0;
    for (i = 1; i <= 10; i++) {
        let num = +prompt(`give me ${i} number: `);
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

        sum += num;
        count++;
    }

    let avg = sum / count;
    console.log(`the average is ${avg}`);
    console.log(`the maximum is ${maxi}`);
    console.log(`the minimum is ${mini}`);

}

getAvgMax();