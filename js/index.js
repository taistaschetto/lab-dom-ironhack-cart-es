// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').textContent);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal.toFixed(2);
  console.log('Calculating subtotal, yey!');
  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
const products = document.querySelectorAll('table#cart tr.product')
let total = 0 
products.forEach(product => {
  total += updateSubtotal(product)
})
  // ITERATION 3
const totalPrice = document.querySelector('#total-value span')
totalPrice.textContent = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
