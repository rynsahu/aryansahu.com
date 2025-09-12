
function lerp(a, b, t) {
  a = a + ((b - a) * t);
  return a;
}

export function progressbar() {
  const sliderInput = document.querySelector('#slider-input');
  const quantityEl = document.querySelector('.quantity span');
  const totalPriceEl = document.querySelector('.total .price');
  const thumb = document.querySelector('.thumb');
  const track = document.querySelector('.track');
  
  const diamondPrice = 8455.00;
  const slideInputWidth = sliderInput.clientWidth;
  let pinterCurrentXPosition = 0;
  let thumbCurrentXPosition = 0;
  let thumbDx = 0;

  function updateQuantity(quantity) {
    quantityEl.textContent = quantity;
  }

  function updateTotalPrice(quantity) {
    totalPriceEl.textContent = `₹ ${diamondPrice * quantity}.00`;
  }

  function handlePointerMove({ clientX }) {
    thumb.style.setProperty('--t', clientX);
  }

  function handleThumbUp() {
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('mouseup', handleThumbUp);
  }

  function handleThumbDown({ clientX }) {
    pinterCurrentXPosition = clientX;
    thumbCurrentXPosition = thumb.getBoundingClientRect().x;

    requestAnimationFrame(() => {
      thumbDx = thumbDx + (pinterCurrentXPosition - thumbCurrentXPosition) * 0.5;
      console.log('IN_', thumbDx);
      requestAnimationFrame(() => {
        console.log('OUT_', thumbDx);
        thumb.style.setProperty('--t', thumbDx);
      })
    })
    
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('mouseup', handleThumbUp);
  }

  thumb.addEventListener('mousedown', handleThumbDown);
  sliderInput.addEventListener('mousedown', handleThumbDown);

  sliderInput.addEventListener('input', (e) => {
    const quantity = parseInt(e.target.value);

    updateQuantity(quantity);
    updateTotalPrice(quantity);
  });
}