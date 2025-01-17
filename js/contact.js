/**
 * Sends form data via email using Formspree.
 * @param {Event} event - The form submission event.
 */
function sendMail(event) {
    event.preventDefault();
    fetch("https://formspree.io/f/mzzbeywj", {
      method: "POST",
      body: new FormData(event.target),
      headers: { 'Accept': 'application/json' }
    }).then(() => {
      window.location.href = "./sent-mail.html";
    }).catch(console.error);
  }