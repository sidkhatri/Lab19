//declaring all of my variables via DOM
var cart = document.getElementById("cart");
var receiptField = document.getElementById("receiptField");
var receipt = document.getElementById("receipt");

//declaring two arrays and total variable
var items = [];
var prices = [];
var total = 0.0;

//adds items to the array
function addItem(item, price) {
  items.push(item);
  prices.push(price);
  receiptField.innerHTML = receiptField.innerHTML + item + "  " + "$" + price + "&#10";
}

//calculates total price & adds sales tax outside of for loop
function checkOut() {
    for (var i = 0; i < prices.length; i++) {
      total += prices[i];
    }
    total *= 1.06;
  //transfers value from receipt to receiptField. the field represents the "paper area" of the receipt
    receipt.innerHTML = receiptField.innerHTML;
    receiptField.innerHTML = "";
    cart.innerHTML = "";
    cart.innerHTML = cart.innerHTML + "$" + total.toFixed(2); //restricts the decimals to two places
  //the following clears the values of the arrays and total to allow for reset
  //otherwise this will keep the old values in memory
  items = [];
  prices = [];
  total = 0;
}