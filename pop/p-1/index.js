var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.pop();
  document.getElementById("demo").innerHTML = fruits;
}