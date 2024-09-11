const type = document.querySelector('#type');

//all the toppings creating individually

const nuts = document.querySelector('#nuts')
const bananas = document.querySelector('#bananas')
const syrup = document.querySelector('#syrup')
const whippedCream = document.querySelector('#whippedCream')
const iceCream = document.querySelector('#iceCream')

// declaring both the prices

const bannerPrice = document.querySelector('.price-banner #totalPrice')
const displayPrice = document.querySelector('.price-display #totalPrice')

function updatePrice() {
    const initPrice = +(type.value);
    let finPrice = initPrice;

    if (nuts.checked) {
        finPrice += +(nuts.value)
    }
    if (bananas.checked) {
        finPrice += +(bananas.value)
    }
    if (syrup.checked) {
        finPrice += +(syrup.value)
    }
    if (whippedCream.checked) {
        finPrice += +(whippedCream.value)
    }
    if (iceCream.checked) {
        finPrice += +(iceCream.value)
    }

    bannerPrice.textContent = `$${finPrice}`;
    displayPrice.textContent = `$${finPrice}`;
}

type.addEventListener('change', updatePrice);
nuts.addEventListener('change', updatePrice);
bananas.addEventListener('change', updatePrice);
syrup.addEventListener('change', updatePrice);
whippedCream.addEventListener('change', updatePrice);
iceCream.addEventListener('change', updatePrice);
