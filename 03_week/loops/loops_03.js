// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

function getAvrg() {
    while (true) {
        let dis = parseInt(prompt("distance: "));
        if (dis === 0) {
            break;
        }
        let time = parseInt(prompt("time: "));
        let avg = dis / time;
        alert(avg);

    }
}

getAvrg();