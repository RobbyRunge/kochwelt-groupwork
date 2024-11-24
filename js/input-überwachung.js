const input = document.getElementById('amount');
    
input.addEventListener('input', () => {
  const value = parseInt(input.value);
  if (value < 1) {
    input.value = 1;
    showHideAlert("alert", 2000);
  }1000
  if (value > 20) {
    input.value = 1;
    showHideAlert("alert", 2000);       
    }
  });


function showHideAlert(elementId, delay) {
  const element = document.getElementById(elementId);
  element.classList.add('transition');
  element.classList.remove('displayNone');
  setTimeout(() => {
    element.classList.add('displayNone');
    }, delay);
  }