// Initial array of team members
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:

for (let i of teamMembers) {
    console.log(i);
}

// Exercise 2: Remove the first member of the array.
// Write your code here:

let newTeam = teamMembers.slice(1);
console.log(newTeam);

// Exercise 3: Remove the last member of the array.
// Write your code here:

let removed = newMembers.pop();
console.log(teamMembers);

// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:

teamMembers.unshift("Alex");
console.log(teamMembers)

// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:

teamMembers.push("Linda")
console.log(teamMembers)

// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:

let newArray = teamMembers.slice(2);

console.log(newArray)


// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:

let i = teamMembers.indexOf("Mike");

console.log(i);

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:

i = teamMembers.indexOf("Jake");

console.log(i);

// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:

teamMembers.splice(2, 1, "Carol", "Bruce");

console.log(teamMembers)

// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:

let arr = ["Bob"];

arr = teamMembers.concat(arr)

console.log(arr);

// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:

arr = teamMembers.slice(0);

console.log(arr)

// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined

// Write your code here:

let newMembers = ['Tina', 'Dean'];
teamMembers = teamMembers.concat(newMembers);
console.log(teamMembers);

// Exercise 13: Finding all occurrences of a John
// Write your code here:

let count = teamMembers.filter(el => el == "John").length;

console.log(count)

// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:

arr = teamMembers.map(el => el.toUpperCase());

console.log(arr);