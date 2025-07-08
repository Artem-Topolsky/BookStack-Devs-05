import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal-overlay.register-modal');
  const closeButton = document.querySelector('.register-modal-close');
  const form = document.querySelector('.register-form');
  const inputs = form.querySelectorAll('input, textarea');
  const modalTitle = document.querySelector('.modal-event-title');
  const openButtons = document.querySelectorAll('.events-button');

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      const eventCard = button.closest('.swiper-slide');
      const eventName = eventCard
        .querySelector('.events-name')
        .textContent.trim();

      modalTitle.textContent = eventName;

      modal.style.display = 'flex';
      requestAnimationFrame(() => {
        modal.classList.add('show');
      });

      document.body.classList.add('body-no-scroll');

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    });
  });

  closeButton.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener(
    'keydown',
    e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    { once: true }
  );

  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');

    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('hide');
      document.body.classList.remove('body-no-scroll');

      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 300);
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    let isValid = true;

    inputs.forEach(field => {
      const parentLabel = field.closest('.register-label');
      const errorText = parentLabel.querySelector('.error-notification');

      field.classList.remove('error');
      errorText.classList.remove('show');

      if (!field.value.trim()) {
        if (field.name !== 'message') {
          field.classList.add('error');
      
          if (field.name === 'name') {
            errorText.textContent = 'Enter your name';
          } else if (field.name === 'email') {
            errorText.textContent = 'Enter your email';
          }
      
          errorText.classList.add('show');
          isValid = false;
        }
      } else if (
        field.type === 'email' &&
        !field.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
      ) {
        field.classList.add('error');
        errorText.textContent = 'Enter a valid email';
        errorText.classList.add('show');
        isValid = false;
      }
    });

    if (isValid) {
      const eventName = modalTitle.textContent;

      iziToast.success({
        title: 'Success',
        message: `You have successfully registered for ${eventName}`,
        position: 'topRight',
        class: 'custom-toast',
      });

      form.reset();
      closeModal();
    }
  });
  inputs.forEach(field => {
    field.addEventListener('input', () => {
      const parentLabel = field.closest('.register-label');
      const errorText = parentLabel.querySelector('.error-notification');

      if (field.value.trim()) {
        field.classList.remove('error');
        errorText.classList.remove('show');
      }
    });
  });
});
