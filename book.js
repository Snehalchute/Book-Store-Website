// Add to cart button click event
var addToCartButtons = document.querySelectorAll('.book button');
var cartItems = [];

for (var i = 0; i < addToCartButtons.length; i++) {
addToCartButtons[i].addEventListener('click', function() {
var book = this.parentNode;
var bookTitle = book.querySelector('h3').textContent;
var bookPrice = book.querySelector('p:last-child').textContent;
var cartItem = {
title: bookTitle,
price: bookPrice
};
cart
function search() {
    // Get the input value
    var input = document.querySelector("input[type='text']").value;
    document.querySelector("button[type='submit']").addEventListener("click", function(event) {
        event.preventDefault();
        search();
      });