function lerper(current, target, time) {
  return current + (target - current) * time;
}

export function lerp() {
  const circleEl = document.querySelector('.circle');

  const current = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };

  let animating = false;

  function lerpCircle() {
    current.x = lerper(current.x, target.x, 0.1);
    current.y = lerper(current.y, target.y, 0.1);
    
    circleEl.style.setProperty('--x', current.x);
    circleEl.style.setProperty('--y', current.y);
    
    if (Math.abs(current.x - target.x) < 0.1 && Math.abs(current.y - target.y) < 0.1) {
      animating = false;
      return;
    }

    requestAnimationFrame(lerpCircle);
  }

  function move({ clientX, clientY }) {
    target.x = clientX;
    target.y = clientY;

    if (!animating) {
      animating = true;
      lerpCircle();
    }
  }

  window.addEventListener('mousedown', () => {
    window.addEventListener('mousemove', move);
  });

  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', move);
  });
}