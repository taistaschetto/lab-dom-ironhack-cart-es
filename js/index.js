// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').textContent);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal.toFixed(2);
  console.log('Calculating subtotal, yey!');
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('table#cart tr.product');
  let total = 0;
  products.forEach((product) => {
    total += updateSubtotal(product);
  });
  // ITERATION 3
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.closest('.product').remove();

  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Add event listeners to each remove button
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});
// ITERATION 5

function createProduct() {
  const productNameInput = document.querySelector(
    '.create-product input[type="text"]'
  );
  const productPriceInput = document.querySelector(
    '.create-product input[type="number"]'
  );

  const name = productNameInput.value;
  const price = parseFloat(productPriceInput.value).toFixed(2);

  if (!name.trim() || price <= 0) {
    alert('Please fill all product details correctly.');
    return;
  }

  const newProductRow = document.createElement('tr');
  newProductRow.classList.add('product');
  newProductRow.innerHTML = `
      <td class="name"><span>${name}</span></td>
      <td class="price">$<span>${price}</span></td>
      <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity"/></td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  const tableBody = document.querySelector('#cart tbody');
  tableBody.appendChild(newProductRow);

  newProductRow
    .querySelector('.btn-remove')
    .addEventListener('click', removeProduct);

  productNameInput.value = '';
  productPriceInput.value = 0;
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
