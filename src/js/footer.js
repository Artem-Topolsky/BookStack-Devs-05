import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.footer-subscribe-form');
const emailInput = document.getElementById('footer-email-subscribe');
const submitBtn = document.querySelector('.footer-signup-btn');
const requiredNote = document.querySelector('.footer-required-note');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  iziToast.success({
    title: 'Success',
    message: 'Email format is correct',
    position: 'bottomRight',
    timeout: 3000,
    backgroundColor: '#ffffff',
  });

  emailInput.value = '';
  submitBtn.disabled = true;
  submitBtn.classList.add('disabled');
});
