// Make program which will use a while loop to calculate the sum of all numbers from 1 to 100.

function getSum() {
    let sum = 0;
    for (i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(`the sum is ${sum}`);

}