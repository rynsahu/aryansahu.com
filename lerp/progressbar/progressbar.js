export function progressbar() {
  const sliderInput = document.querySelector('#slider-input');
  const quantityEl = document.querySelector('.quantity span');
  const totalPriceEl = document.querySelector('.total .price');
  const diamondPrice = 8455.00;

  function updateQuantity(quantity) {
    quantityEl.textContent = quantity;
  }

  function updateTotalPrice(quantity) {
    totalPriceEl.textContent = `₹ ${diamondPrice * quantity}.00`;
  }

  sliderInput.addEventListener('input', (e) => {
    const quantity = parseInt(e.target.value);

    updateQuantity(quantity);
    updateTotalPrice(quantity);
  });
}