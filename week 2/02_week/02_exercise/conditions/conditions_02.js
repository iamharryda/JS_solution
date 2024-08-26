/* Write a function named checkTemperature that takes a temperature as a parameter and returns "Cold" if the temperature is below 10, "Warm" if the temperature is between 10 and 25, and "Hot" if the temperature is above 25. */
function checkTemperature(temp) {
    if (temp > 25) {
        return ("Hot");
    }
    else if (temp >= 10 && temp <= 25) {
        return ("Warm");
    }
    else {
        return ("Cold");
    }
}

// Sample usage - do not modify
console.log(checkTemperature(5));   // Outputs: "Cold"
console.log(checkTemperature(15));  // Outputs: "Warm"
console.log(checkTemperature(30));  // Outputs: "Hot"