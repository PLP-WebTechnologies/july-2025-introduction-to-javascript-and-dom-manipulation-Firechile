// 🎯 Part 1: JavaScript Basics
// Variable declarations and conditionals
let userAge = 20;

if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Operator example
let a = 5, b = 3;
console.log("Sum: " + (a + b)); // Output: 8

// ❤️ Part 2: Functions
// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}
console.log("Total Price: " + calculateTotal(100, 0.15));

// Function 2: Toggle text case
function formatString(str) {
  return str.toUpperCase();
}
console.log(formatString("hello world"));

// 🔁 Part 3: Loops
// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("Counting: " + i);
}

// Example 2: While loop countdown
let count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// 🌐 Part 4: DOM Manipulation
// Example 1: Change text on button click
document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("message").innerText = "JavaScript is running!";
});

// Example 2: Toggle class
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("title").classList.toggle("highlight");
});

// Example 3: Create and append list items
let list = document.getElementById("list");
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => {
  let li = document.createElement("li");
  li.textContent = fruit;
  list.appendChild(li);
});
