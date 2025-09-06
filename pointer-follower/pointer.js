export function followPointer(pointerEl, speed) {
  const currentPosition = { x: 0, y: 0 };
  const targetPosition = { x: 0, y: 0 };
  let isLerping = false;

  function lerp() {
    const dx = targetPosition.x - currentPosition.x;
    const dy = targetPosition.y - currentPosition.y;

    currentPosition.x += dx * (speed || 0.1);
    currentPosition.y += dy * (speed || 0.1);

    pointerEl.style.setProperty('--x', currentPosition.x);
    pointerEl.style.setProperty('--y', currentPosition.y);
    pointerEl.style.setProperty('transform', 'translate(calc(var(--x) * 1px - 50%), calc(var(--y) * 1px - 50%))');

    if (currentPosition.x / targetPosition.x > 0.99999 && currentPosition.y / targetPosition.y > 0.99999) {
      isLerping = false;
      return;
    }

    requestAnimationFrame(lerp);
  }

  function handlePointerMove({ clientX, clientY }) {
    targetPosition.x = clientX;
    targetPosition.y = clientY;
    
    if (!isLerping) {
      isLerping = true;
      lerp();
    }
  }

  document.addEventListener('pointermove', handlePointerMove);
}