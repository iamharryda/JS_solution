// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.
function getNumber() {
    let s = "";
    for (i = 2, j = 98; i < 100, j > 0; i += 2, j -= 2) {
        s += i + " " + j + " ";
    }
    console.log(s);
}

getNumber()