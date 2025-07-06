// // import iziToast from 'izitoast';
// // import 'izitoast/dist/css/iziToast.min.css';

// // import Accordion from 'accordion-js';
// // import 'accordion-js/dist/accordion.min.css';

// // import { bookList, allBooks } from './books'; // масив книг та контейнер списку

// // //  Слухач на  "Learn More" у списку книг
// // bookList.addEventListener('click', handleBookClick);

// // //  Контейнер для вставки модального вікна
// // const containerModalWindow = document.querySelector('.container-modal-window');

// // function handleBookClick(event) {
// //   if (!event.target.classList.contains('learn-more-btn')) return;

// //   const bookId = event.target.dataset.bookId;
// //   console.log('ID книги:', bookId);

// //   document.body.style.overflow = 'hidden'; // Заборона скролу
// //   openModal(bookId);
// // }

// // // Відкриваємо модалку з книгою
// // function openModal(bookId) {
// //   const selectedBook = allBooks.find(book => book._id === bookId);

// //   if (!selectedBook) {
// //     console.warn('Книгу не знайдено!');
// //     return;
// //   }

// //   markupModalWindow(selectedBook); // малюємо розмітку
// // }

// // // створити розмітку та знайти елементи та слухачі
// // function markupModalWindow({ author, book_image, title, price, description }) {
// //   containerModalWindow.innerHTML = `
// //     <div class="modal-backdrop container" id="modalBackdrop">
// //       <div class="modal" id="bookModal">
// //         <button class="modal-close" id="modalCloseBtn">
// //           <svg class="modal-close-icon" width="14" height="14">
// //             <use href="/img/sprite.svg#icon-close"></use>
// //           </svg>
// //         </button>

// //         <div class="modal-content-all">
// //           <div class="modal-content-image">
// //             <img id="bookImage" src="${book_image}" alt="${title}" />
// //           </div>
// //           <div class="modal-content">
// //             <h2 class="book-title" id="bookTitle">${title}</h2>
// //             <p class="book-author" id="bookAuthor">${author}</p>
// //             <p class="book-price" id="bookPrice">$${price}</p>

// //             <div class="quantity-control">
// //               <button class="quantity-control-minus" id="decrease">
// //                 <svg width="8" height="8">
// //                   <use href="/img/sprite.svg#icon-minus"></use>
// //                 </svg>
// //               </button>

// //               <input class="quantity-control-value" id="quantity" value="1" min="1" disabled />

// //               <button class="quantity-control-plus" id="increase">
// //                 <svg width="8" height="8">
// //                   <use href="/img/sprite.svg#icon-plus"></use>
// //                 </svg>
// //               </button>
// //             </div>

// //             <form id="buyForm">
// //               <button class="formBtn-add" type="button" id="addToCart">Add to Cart</button>
// //               <button class="formBtn-buy" type="submit">Buy Now</button>
// //             </form>

// //                   <div class="accordion" id="accordionContainer">

// //                   <div class="accordion-item ac" id="ac-0">
// //                   <h2 class="ac-header">
// //                       <button class="accordion-header ac-trigger">
// //                           <span class="accordion-header-text">Description</span>
// //                           <span class="accordion-header-icon">
// //                               <svg width="20" height="14">
// //                                   <use href='/img/sprite.svg#icon-arrow-down'></use>
// //                               </svg>
// //                           </span>
// //                       </button>
// //                   </h2>
// //                   <div class="accordion-body ac-panel" id="bookDetails"><p>${description}</p></div>
// //               </div>

// // <div class="accordion-item ac" id="ac-1">
// //     <h2 class="ac-header">
// //         <button class="accordion-header ac-trigger">
// //             <span class="accordion-header-text">Shipping</span>
// //             <span class="accordion-header-icon">
// //                 <svg width="20" height="14">
// //                     <use href='/img/sprite.svg#icon-arrow-down'></use>
// //                 </svg>
// //             </span>
// //         </button>
// //     </h2>
// //     <div class="accordion-body ac-panel" id="bookShipping">
// //         <p>
// //             We ship across the United States within 2–5 business days.
// //              All orders are processed through USPS or a reliable courier
// //             service. Enjoy free standard shipping on orders over $50.
// //         </p>
// //     </div>
// // </div>

// // <div class="accordion-item ac" id="ac-2">
// //     <h2 class="ac-header">
// //         <button class="accordion-header ac-trigger">
// //             <span class="accordion-header-text">Returns</span>
// //             <span class="accordion-header-icon">
// //                 <svg width="20" height="14">
// //                     <use href='/img/sprite.svg#icon-arrow-down'></use>
// //                 </svg>
// //             </span>
// //         </button>
// //     </h2>

// //     <div class="accordion-body ac-panel" id="bookReturns">
// //         <p>You can return an item within 14 days of receiving your order,
// //         provided it hasn’t been used and is in its original
// //         condition. To start a return, please contact our support team
// //         — we’ll guide you through the process quickly and
// //         hassle-free.</p>
// //     </div>
// // </div>

// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   `;

// //   // знайти  елементи
// //   const backdrop = document.getElementById('modalBackdrop');
// //   const modal = document.getElementById('bookModal');
// //   const closeBtn = document.getElementById('modalCloseBtn');
// //   const quantityInput = document.getElementById('quantity');
// //   const increaseBtn = document.getElementById('increase');
// //   const decreaseBtn = document.getElementById('decrease');
// //   const addToCartBtn = document.getElementById('addToCart');
// //   const buyForm = document.getElementById('buyForm');
// //   const messageBox = document.getElementById('message');

// //   //  Слухачі
// //   closeBtn.addEventListener('click', closeModal);

// //   backdrop.addEventListener('click', e => {
// //     if (e.target === backdrop) {
// //       closeModal();
// //     }
// //   });

// //   document.addEventListener(
// //     'keydown',
// //     e => {
// //       if (e.key === 'Escape') {
// //         closeModal();
// //       }
// //     },
// //     { once: true }
// //   );

// //   increaseBtn.addEventListener('click', () => {
// //     quantityInput.value = parseInt(quantityInput.value) + 1;
// //   });

// //   decreaseBtn.addEventListener('click', () => {
// //     const current = parseInt(quantityInput.value);
// //     if (current > 1) {
// //       quantityInput.value = current - 1;
// //     }
// //   });

// //   addToCartBtn.addEventListener('click', () => {
// //     const quantity = parseInt(quantityInput.value) || 1;
// //     iziToast.show({
// //       title: 'У кошику: ',
// //       message: `Додано до кошика: ${quantity} книг(и)`,
// //       position: 'topRight',
// //     });
// //   });

// //   buyForm.addEventListener('submit', e => {
// //     e.preventDefault();

// //     iziToast.show({
// //       title: 'Покупка: ',
// //       message: 'Дякуємо за покупку!',
// //       position: 'topRight',
// //     });
// //   });

// //   // Ініціалізація аккордеона  -  ???
// //   new Accordion('#accordionContainer');
// // }

// // // Закриття модалки
// // function closeModal() {
// //   const backdrop = document.getElementById('modalBackdrop');
// //   backdrop.classList.add('hidden');
// //   document.body.style.overflow = ''; // Відновити скрол
// }
// Модуль для отображения модального окна книги с изоляцией и безопасной вставкой
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import { bookList, allBooks } from './books';
// Слушатель на кнопку "Learn More"
bookList.addEventListener('click', handleBookClick);
const containerModalWindow = document.querySelector('.container-modal-window');
function handleBookClick(event) {
  if (!event.target.classList.contains('learn-more-btn')) return;
  const bookId = event.target.dataset.bookId;
  console.log('ID книги:', bookId);
  document.body.style.overflow = 'hidden';
  openModal(bookId);
}
function openModal(bookId) {
  const selectedBook = allBooks.find(book => book._id === bookId);
  if (!selectedBook) {
    console.warn('Книгу не знайдено!');
    return;
  }
  const modalMarkup = createModalMarkup(selectedBook);
  containerModalWindow.innerHTML = '';
  containerModalWindow.insertAdjacentHTML('beforeend', modalMarkup);
  initializeModal();
}
function createModalMarkup({ author, book_image, title, price, description }) {
  return `
    <div class="modal-backdrop container" id="modalBackdrop">
      <div class="modal" id="bookModal">
        <button class="modal-close" id="modalCloseBtn">
          <svg class="modal-close-icon" width="14" height="14">
            <use href="/img/sprite.svg#icon-close"></use>
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
            <div class="quantity-control">
              <button class="quantity-control-minus" id="decrease">
                <svg width="8" height="8">
                  <use href="/img/sprite.svg#icon-minus"></use>
                </svg>
              </button>
              <input class="quantity-control-value" id="quantity" value="1" min="1" disabled />
              <button class="quantity-control-plus" id="increase">
                <svg width="8" height="8">
                  <use href="/img/sprite.svg#icon-plus"></use>
                </svg>
              </button>
            </div>
            <form id="buyForm">
              <button class="formBtn-add" type="button" id="addToCart">Add to Cart</button>
              <button class="formBtn-buy" type="submit">Buy Now</button>
            </form>
            <div class="accordion" id="accordionContainer">
              <div class="accordion-item ac">
                <h2 class="ac-header">
                  <button class="accordion-header ac-trigger">
                    <span class="accordion-header-text">Description</span>
                    <span class="accordion-header-icon">
                      <svg width="20" height="14">
                        <use href='/img/sprite.svg#icon-arrow-down'></use>
                      </svg>
                    </span>
                  </button>
                </h2>
                <div class="accordion-body ac-panel"><p>${description}</p></div>
              </div>
              <div class="accordion-item ac">
                <h2 class="ac-header">
                  <button class="accordion-header ac-trigger">
                    <span class="accordion-header-text">Shipping</span>
                    <span class="accordion-header-icon">
                      <svg width="20" height="14">
                        <use href='/img/sprite.svg#icon-arrow-down'></use>
                      </svg>
                    </span>
                  </button>
                </h2>
                <div class="accordion-body ac-panel">
                  <p>We ship across the United States within 2–5 business days...</p>
                </div>
              </div>
              <div class="accordion-item ac">
                <h2 class="ac-header">
                  <button class="accordion-header ac-trigger">
                    <span class="accordion-header-text">Returns</span>
                    <span class="accordion-header-icon">
                      <svg width="20" height="14">
                        <use href='/img/sprite.svg#icon-arrow-down'></use>
                      </svg>
                    </span>
                  </button>
                </h2>
                <div class="accordion-body ac-panel">
                  <p>You can return an item within 14 days...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
function initializeModal() {
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');
  const quantityInput = document.getElementById('quantity');
  const increaseBtn = document.getElementById('increase');
  const decreaseBtn = document.getElementById('decrease');
  const addToCartBtn = document.getElementById('addToCart');
  const buyForm = document.getElementById('buyForm');
  closeBtn?.addEventListener('click', closeModal);
  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener(
    'keydown',
    e => {
      if (e.key === 'Escape') closeModal();
    },
    { once: true }
  );
  increaseBtn?.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });
  decreaseBtn?.addEventListener('click', () => {
    const current = parseInt(quantityInput.value);
    if (current > 1) quantityInput.value = current - 1;
  });
  addToCartBtn?.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value) || 1;
    iziToast.show({
      title: 'У кошику:',
      message: `Додано до кошика: ${quantity} книг(и)`,
      position: 'topRight',
    });
  });
  buyForm?.addEventListener('submit', e => {
    e.preventDefault();
    iziToast.show({
      title: 'Покупка:',
      message: 'Дякуємо за покупку!',
      position: 'topRight',
    });
  });
  // Безопасная инициализация аккордеона
  const accEl = document.querySelector('#accordionContainer');
  if (accEl && !accEl.classList.contains('ac-initialized')) {
    new Accordion(accEl);
  }
}
function closeModal() {
  const backdrop = document.getElementById('modalBackdrop');
  backdrop?.remove();
  document.body.style.overflow = '';
}
