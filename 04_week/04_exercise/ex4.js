let balance = 1000;
function checkBalance() {
    alert("your balance is " + balance);
}

function deposit() {
    let add = +prompt("how much you want to deposit: ");
    if (add < 0) {
        alert("please add positive number");
        return;
    }
    balance += add;
    alert(add + " added");
}

function withdraw() {
    let subs = +prompt("how much you want to withdraw: ");
    if (subs < 0 || subs > balance) {
        alert("the amount should be positive or less than the balance");
        return;
    }
    balance -= subs;
    alert(subs + " has been substracted");
}

function main() {
    while (true) {
        let choose = prompt("Welcome to the ATM machine!!!\n 1. check balance\n 2. deposit\n 3. withdraw\n please put a number: ")
        if (choose == "1") {
            checkBalance();
        }
        else if (choose == "2") {
            deposit();
        }
        else if (choose == "3") {
            withdraw();
        }
        else {
            alert("please enter the right number");
        }

    }
}
main();