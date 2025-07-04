document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.footer-subscribe-form');
  const emailInput = document.getElementById('footer-email-subscribe');
  const requiredNote = document.querySelector('.footer-required-note');
  const submitBtn = document.querySelector('.footer-signup-btn');
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  function updateButtonState() {
    if (emailInput.value.trim() === '') {
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
    }
  }

  updateButtonState();

  emailInput.addEventListener('input', updateButtonState);

  form.addEventListener('submit', function (e) {
    if (!emailPattern.test(emailInput.value)) {
      e.preventDefault();
      requiredNote.textContent = 'Please enter a valid email address.';
      requiredNote.style.color = 'red';
      emailInput.value = '';
      emailInput.focus();
      updateButtonState();
    } else {
      requiredNote.textContent = '* Required field';
      requiredNote.style.color = '';
    }
  });
});
