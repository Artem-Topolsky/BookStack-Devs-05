import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import { bookList, allBooks } from './books'; // масив книг та контейнер списку

//  Слухач на  "Learn More" у списку книг
bookList.addEventListener('click', handleBookClick);

//  Контейнер для вставки модального вікна
const containerModalWindow = document.querySelector('.container-modal-window');

function handleBookClick(event) {
  if (!event.target.classList.contains('learn-more-btn')) return;
  const bookId = event.target.dataset.bookId;
  console.log('ID книги:', bookId);

  openModal(bookId);
}

// Відкриваємо модалку з книгою
function openModal(bookId) {
  const selectedBook = allBooks.find(book => book._id === bookId);

  if (!selectedBook) {
    console.warn('Книгу не знайдено!');
    return;
  }

  markupModalWindow(selectedBook); // малюємо розмітку
  updateTotalPrice();
}

// створити розмітку та знайти елементи та слухачі
function markupModalWindow({ author, book_image, title, price, description }) {
  containerModalWindow.innerHTML = `
    <div class="modal-backdrop container" id="modalBackdrop">
      <div class="modal" id="bookModal">
        <button class="modal-close" id="modalCloseBtn">
          <svg class="modal-close-icon" width="14" height="14">
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>

        <div class="modal-content-all">
          <div class="modal-content-image">
            <img id="bookImage" src="${book_image}" alt="${title}" />
          </div>
          <div class="modal-content">
            <h2 class="book-title" id="bookTitle">${title}</h2>
            <p class="book-author" id="bookAuthor">${author}</p>
            <p class="book-price" id="bookPrice">$${price}</p>
            <p class="book-total" id="bookTotalPrice">Total: $${price}</p>


            <div class="quantity-control">
              <button class="quantity-control-minus" id="decrease">
                <svg width="8" height="8">
                  <use href="/sprite.svg#icon-minus"></use>
                </svg>
              </button>

              <input class="quantity-control-value" id="quantity" value="1" min="1" disabled />

              <button class="quantity-control-plus" id="increase">
                <svg width="8" height="8">
                  <use href="/sprite.svg#icon-plus"></use>
                </svg>
              </button>
            </div>

            <form id="buyForm">
              <button class="formBtn-add" type="button" id="addToCart">Add to Cart</button>
              <button class="formBtn-buy" type="submit">Buy Now</button>
            </form>

                 
<div class="accordion" id="accordionContainer">
  
    <div class="ac">
    <h2 class="ac-header">
      <button class="ac-trigger">
        <span>Description</span>
        <span class="trigger-down">
          <svg width="20" height="14">
            <use href='/sprite.svg#icon-arrow-down'></use>
          </svg>
        </span>
        <span class="trigger-up hidden">
          <svg width="20" height="14">
            <use href='/sprite.svg#icon-arrow-up'></use>
          </svg>
        </span>
      </button>
    </h2>
    <div class="ac-panel">
      <p>${description}</p>
    </div>
  </div>

    <div class="ac">
    <h2 class="ac-header">
      <button class="ac-trigger">
        <span>Shipping</span>
        <span class="trigger-down">
          <svg width="20" height="14">
            <use href='/sprite.svg#icon-arrow-down'></use>
          </svg>
        </span>
        <span class="trigger-up hidden">
          <svg width="20" height="14">
            <use href='/sprite.svg#icon-arrow-up'></use>
          </svg>
        </span>
      </button>
    </h2>
    <div class="ac-panel">
      <p>
        We ship across the United States within 2–5 business days.
        All orders are processed through USPS or a reliable courier service.
        Enjoy free standard shipping on orders over $50.
      </p>
    </div>
  </div>

   <div class="ac">
    <h2 class="ac-header">
      <button class="ac-trigger">
        <span>Returns</span>
        <span class="trigger-down">
          <svg width="20" height="14">
            <use href='/sprite.svg#icon-arrow-down'></use>
          </svg>
        </span>
        <span class="trigger-up hidden">
          <svg width="20" height="14">
            <use href='/sprite.svg#icon-arrow-up'></use>
          </svg>
        </span>
      </button>
    </h2>
    <div class="ac-panel">
      <p>
        You can return an item within 14 days of receiving your order,
        provided it hasn’t been used and is in its original condition.
        To start a return, please contact our support team — we’ll guide
        you through the process quickly and hassle-free.
      </p>
    </div>
  </div>

</div>


          </div>
        </div>
      </div>
    </div>
  `;

  // знайти  елементи
  const backdrop = document.getElementById('modalBackdrop');
  const modal = document.getElementById('bookModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const quantityInput = document.getElementById('quantity');
  const increaseBtn = document.getElementById('increase');
  const decreaseBtn = document.getElementById('decrease');
  const addToCartBtn = document.getElementById('addToCart');
  const buyForm = document.getElementById('buyForm');
  const messageBox = document.getElementById('message');

  // Заборона скролу
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';

  // код аккордеона
  new Accordion('#accordionContainer', {
    duration: 300,
    showMultiple: false,
    openOnInit: [],
  });

  // вгору та вниз
  const triggerButtons = containerModalWindow.querySelectorAll('.ac-trigger');

  triggerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      //  час оновити .is-active
      setTimeout(() => {
        triggerButtons.forEach(otherBtn => {
          const otherAc = otherBtn.closest('.ac');
          const up = otherBtn.querySelector('.trigger-up');
          const down = otherBtn.querySelector('.trigger-down');

          //коли клік (актів) на кнопку додаємо або прибираємо
          if (otherAc.classList.contains('is-active')) {
            up.classList.remove('hidden');
            down.classList.add('hidden');
          } else {
            up.classList.add('hidden');
            down.classList.remove('hidden');
          }
        });
      }, 10); // затримка
    });
  });

  ////////////////

  //  Слухачі
  closeBtn.addEventListener('click', closeModal); // хрестик

  backdrop.addEventListener('click', e => {
    //  бекдроп
    if (e.target === backdrop) {
      closeModal();
    }
  });

  document.addEventListener(
    //  ескейп
    'keydown',
    e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    { once: true }
  );

  // + and -

  increaseBtn.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotalPrice();
  });

  decreaseBtn.addEventListener('click', () => {
    const current = parseInt(quantityInput.value);
    if (current > 1) {
      quantityInput.value = current - 1;
      updateTotalPrice();
    }
  });

  addToCartBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value) || 1;
    iziToast.show({
      title: 'У кошику: ',
      message: `Додано до кошика: ${quantity} книг(и)`,
      position: 'topCenter',
    });
  });

  buyForm.addEventListener('submit', e => {
    e.preventDefault();

    iziToast.show({
      title: 'Покупка: ',
      message: 'Дякуємо за покупку!',
      position: 'topCenter',
    });
  });

  // розрахунок загальної вартості
  const bookTotal = document.getElementById('bookTotalPrice');

  function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value) || 1;
    const total = price * quantity;
    bookTotal.textContent = `Total: $${total.toFixed(2)}`;
  }
}

// Закриття модалки
function closeModal() {
  const backdrop = document.getElementById('modalBackdrop');
  backdrop.classList.add('hidden');
  // Відновити скрол
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}
