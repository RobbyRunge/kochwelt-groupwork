/**
 * Validates the input value and ensures it is within the range [1, 20].
 */
const input = document.getElementById('amount');
input.addEventListener('input', () => {
  const value = parseInt(input.value);
  if (value < 1 || value > 20) {
    input.value = 1;
    showHideAlert("alert", 2000);
  }
});

/**
 * Shows and hides an alert element with a transition effect.
 * @param {string} elementId - The ID of the element to show/hide.
 * @param {number} delay - The duration in milliseconds to display the alert.
 */
function showHideAlert(elementId, delay) {
  const element = document.getElementById(elementId);
  element.classList.add('transition');
  element.classList.remove('displayNone');
  setTimeout(() => {
    element.classList.add('displayNone');
  }, delay);
}