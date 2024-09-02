// Make a programm which will take in a string as an argument and will reverse it.

function getReverseString() {
    let str = prompt("String please: ");
    let newStr = str.split("").reverse().join("");
    console.log(newStr);

}

getReverseString();