// declaring the car class
class Car {
    constructor(licensePlate, maker, model, currentOwner, price, color) {
        this.licensePlate = licensePlate;
        this.maker = maker;
        this.model = model;
        this.currentOwner = currentOwner;
        this.price = price;
        this.color = color;
    }
}

//declaring the array

let cars = []

//function to update info and generate table

function updateInfo(event) {
    event.preventDefault();


    let licensePlate = document.querySelector('#licensePlate').value
    let maker = document.querySelector('#maker').value
    let model = document.querySelector('#model').value
    let currentOwner = document.querySelector('#currentOwner').value
    let price = document.querySelector('#price').value
    let color = document.querySelector('#color').value


    // Creating a new Car object and add it to the array

    let newCar = new Car(licensePlate, maker, model, currentOwner, price, color);
    cars.push(newCar);

    // Clearing the form fields
    document.querySelector("#car-form").reset();

    //generating the table
    generateTable();


}

// Function to generate the table
function generateTable() {
    // Get the table element
    let table = document.querySelector("#car-table");

    /*     // Clear the table body
        table.textContent = "";
    
        // Create the table header
        let headerRow = table.insertRow(0);
        let headers = ["License Plate", "Maker", "Model", "Current Owner", "Price", "Color"];
        headers.forEach((header) => {
            let th = document.createElement("th");
            th.textContent = header;
            headerRow.appendChild(th);
        }); */

    // Create the table rows
    cars.forEach((car) => {
        let row = table.insertRow();
        let cells = [car.licensePlate, car.maker, car.model, car.currentOwner, car.price, car.color];
        cells.forEach((cell) => {
            let td = document.createElement("td");
            td.textContent = cell;
            row.appendChild(td);
        });
    });
}

const button = document.querySelector('#button')
button.addEventListener('click', updateInfo)

const search_box = document.querySelector('#search-box')
const search_button = document.querySelector('#search-button')
const result = document.querySelector('#result')


//function to search the car

function searchCar() {
    let carFound = false;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].licensePlate == search_box.value) {
            result.textContent = `Car ${i} => licensePlate = ${cars[i].licensePlate}, maker = ${cars[i].maker}, model = ${cars[i].model}, currentOwner = ${cars[i].currentOwner}, price = ${cars[i].price}, color = ${cars[i].color}`
            carFound = true;
            break;
        }
    }
    if (carFound == false) {
        result.textContent = `OOps!! No car found. You can try again :)`
    }
}

search_button.addEventListener('click', searchCar)



