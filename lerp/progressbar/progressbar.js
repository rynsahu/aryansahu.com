export function progressbar() {
  const currentProgressState = document.querySelector('.progress-state');
  const grabber = document.querySelector('.progress-state .grabber');

  let currentGrabberPosition = 0;
  let currentState = 0;

  function handleMouseMove({ clientX, changedTouches }) {
    let currentPointerPosition = clientX;
    
    if (changedTouches && changedTouches.length) x = changedTouches[0].clientX;

    currentState = currentPointerPosition > currentGrabberPosition ? currentState + 1 : currentState - 1;
    
    if (currentState < 0) currentState = 0;
    else if (currentState > 100) currentState = 100;

    currentProgressState.style.setProperty('--state', currentState);
  }


  function handleMouseUp() {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('touchmove', handleMouseMove);
    document.removeEventListener('touchend', handleMouseUp);

    console.log('UP')
  }

  function handleMouseDown(e) {
    currentGrabberPosition = e.clientX;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);

    console.log('DOWN')
  }

  grabber.addEventListener('mousedown', handleMouseDown);
  grabber.addEventListener('touchstart', handleMouseDown);
}