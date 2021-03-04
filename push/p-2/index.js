var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.push("Kiwi", "Lemon", "Pineapple");
  document.getElementById("demo").innerHTML = fruits;
}