/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

button = document.getElementById('addFruitBtn'); // calling that element

fruitInput = document.getElementById('fruitInput');

fruitList = document.getElementById('fruitList');

function myFunction() {
    console.log(fruitInput.value);
    const newFruit = document.createElement('li');//a new list attribute has created
    newFruit.textContent = fruitInput.value;//what is put in the input value adding as a content text

    fruitList.appendChild(newFruit)//creating the new child
    fruitInput.value = '';//clears the input form
}

button.addEventListener('click', myFunction);