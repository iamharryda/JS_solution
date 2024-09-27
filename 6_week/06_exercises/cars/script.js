// declaring the car class
class Car {
    constructor(licensePlate, year, maker, model, currentOwner, price, color) {
        this.licensePlate = licensePlate;
        this.year = year;
        this.maker = maker;
        this.model = model;
        this.currentOwner = currentOwner;
        this.price = price;
        this.color = color;
        this.discountedPrice = this.getDisPrice();
    }

    getDisPrice() {
        let currentYear = new Date().getFullYear();
        let age = currentYear - this.year;
        if (age > 10) {
            return this.price * 0.85; //after 15% discount
        }
        else {
            return this.price;
        }
    }
}

// declaring the array
let cars = []

const form = document.getElementById('car-form');

// function to update info and generate table
function updateInfo(event) {
    event.preventDefault();

    let licensePlate = document.querySelector('#licensePlate').value
    let year = document.querySelector('#year').value
    let maker = document.querySelector('#maker').value
    let model = document.querySelector('#model').value
    let currentOwner = document.querySelector('#currentOwner').value
    let price = document.querySelector('#price').value
    let color = document.querySelector('#color').value

    // Check if license plate is in the correct format
    if (!/^[a-zA-Z]{3}-\d{3}$/.test(licensePlate)) {
        alert('License plate must be in the format XXX-NNN, where X is a letter and N is  number!');
        return;
    }

    // Check if year is a number between 1886 and current year
    if (!/^\d+$/.test(year) || parseInt(year) < 1886 || parseInt(year) > new Date().getFullYear()) {
        alert('Year must be a number between 1886 and ' + new Date().getFullYear() + '!');
        return;
    }

    // Check if price is a positive number
    if (price <= 0) {
        alert('Price must be a positive number!');
        return;
    }

    // Creating a new Car object and add it to the array
    let newCar = new Car(licensePlate, year, maker, model, currentOwner, price, color);
    cars.push(newCar);

    // Clearing the form fields
    document.querySelector("#car-form").reset();

    // generating the table
    generateTable(newCar);

    document.querySelector('.table-container').style.display = 'block';
}

// Function to generate the table
function generateTable(car) {
    // Get the table element
    let table = document.querySelector("#car-table");

    // Create a new table row
    let row = table.insertRow();

    // Create the table cells
    let cells = [car.licensePlate, car.year, car.maker, car.model, car.currentOwner, car.price, car.discountedPrice, car.color];
    cells.forEach((cell) => {
        let td = document.createElement("td");
        td.textContent = cell;
        row.appendChild(td);
    });
}

// Add event listener to the form
form.addEventListener('submit', updateInfo);

const search_box = document.querySelector('#search-box')
const search_button = document.querySelector('#search-button')
const result = document.querySelector('#result')

// function to search the car
function searchCar() {
    let carFound = false;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].licensePlate == search_box.value) {
            let priceText = `price = ${cars[i].price}`;
            if (cars[i].price != cars[i].discountedPrice) {
                priceText += ` (discounted from ${cars[i].price} to ${cars[i].discountedPrice})`;
            }
            result.textContent = `Car ${i} >>> licensePlate = ${cars[i].licensePlate}, maker = ${cars[i].maker}, model = ${cars[i].model}, currentOwner = ${cars[i].currentOwner}, ${priceText}, color = ${cars[i].color}`
            carFound = true;
            break;
        }
    }
    if (carFound == false) {
        result.textContent = `Oops!! No car found. Follow the license input guideline. You can try again :)`
    }

    document.querySelector('.search-result').style.display = 'block';

}

search_button.addEventListener('click', searchCar)