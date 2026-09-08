// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form — static front-end handling.
// Replace this with a real endpoint (Formspree, Netlify Forms, your own API, etc.)
// when the site goes live.
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill in every field before sending.";
      return;
    }

    // Fallback: open a pre-filled email draft.
    const subject = encodeURIComponent(`New brief from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@noisedept.studio?subject=${subject}&body=${body}`;

    status.textContent = "Opening your email client to send the brief…";
    form.reset();
  });
}
