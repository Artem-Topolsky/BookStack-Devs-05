import axios from 'axios';
import iziToast from 'izitoast';
const bookList = document.querySelector('.books-list');
const dropdownMenu = document.querySelector('.books-dropdown-menu');
const booksCounter = document.querySelector('.books-counter');
const showMoreBtn = document.querySelector('.show-more-btn');
const dropdownBtn = document.querySelector('.dropdown-btn');
const emptyMessage = document.querySelector('.empty-message');
const dropdownBtnText = document.querySelector('.dropdown-btn-text');
const booksLoaderOne = document.getElementById('loader-one');
const booksLoaderTwo = document.getElementById('loader-two');

const API_TOP = 'https://books-backend.p.goit.global/books/top-books';
const API_CATEGORIES =
  'https://books-backend.p.goit.global/books/category-list';
const API_SELECTED_CATEGORY =
  'https://books-backend.p.goit.global/books/category?category';

let allBooks = [];
let visibleCount = Math.min(
  window.innerWidth >= 768 ? 24 : 10,
  allBooks.length
);
const booksPerPage = 4;
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);
function handleResize() {
const isDesktop = window.innerWidth >= 1440;

if (isDesktop) {
    dropdownMenu.classList.remove('visually-hidden');
    dropdownBtn.style.display = 'none';
} else {
    dropdownMenu.classList.add('visually-hidden');
    dropdownBtn.style.display = 'block';
}
}

dropdownBtn.addEventListener('click', () => {
dropdownMenu.classList.toggle('visually-hidden');
});

async function loadCategories() {
try {
    const response = await axios.get(API_CATEGORIES);
    const categories = response.data;
    
    const validCategories = categories.filter(
    cat => typeof cat.list_name === 'string' && cat.list_name.trim() !== ''
    );

    const allCategoriesItem = document.createElement('li');
    allCategoriesItem.dataset.value = 'all';
    allCategoriesItem.textContent = 'All categories';
    dropdownMenu.appendChild(allCategoriesItem);

    validCategories.forEach(cat => {
    const menuItem = document.createElement('li');
    menuItem.textContent = cat.list_name;
    menuItem.dataset.value = cat.list_name;
    dropdownMenu.appendChild(menuItem);
    });
} catch (error) {
    console.log(error.message);
    iziToast.show({
        message: error.message,
        position: 'topRight',
        messageColor: 'white',
        backgroundColor: 'red',
    });
}
}

async function loadBooksByCategory(category) {
    booksLoaderOne.classList.remove('visually-hidden');
    try {
    let books = [];
    if (category === 'all') {
    const response = await axios.get(API_TOP);
    books = response.data.flatMap(item => item.books);    
    } else {
    const response = await axios.get(`${API_SELECTED_CATEGORY}=${category}`);
    books = response.data;
    }

    allBooks = books;
    if (!Array.isArray(books) || books.length === 0) {
    bookList.innerHTML = '';
    bookList.classList.add('hidden');
    emptyMessage.classList.remove('visually-hidden');
    booksCounter.textContent = '0 books available';
    showMoreBtn.classList.add('visually-hidden');
    return;
    } else {
    bookList.classList.remove('hidden');
    emptyMessage.classList.add('visually-hidden');
    }

    const baseCount = window.innerWidth >= 768 ? 24 : 10;
    visibleCount = Math.min(baseCount, allBooks.length);

        renderBooks();
        updateCounter();
        checkVisibilityButton();
    } catch (error) {
    console.log(error.message);
    iziToast.show({
        message: error.message,
        position: 'topRight',
        messageColor: 'white',
        backgroundColor: 'red',
    });
    } finally {
        booksLoaderOne.classList.add('visually-hidden');
    }
}

function renderBooks() {
bookList.innerHTML = '';
const booksToShow = allBooks.slice(0, visibleCount);

bookList.innerHTML = booksToShow
    .map(({ _id, book_image, title, author, price }) => {
    return ` <li class="book-list-card">
        <img class="books-card-img" src="${book_image}" alt="${title}"/>
        <h4 class="books-card-title">${title.toLowerCase()}</h4>
        <p class="books-card-price">&#x24;${Math.ceil(price)}</p>
        <p class="books-card-author">${author.trim()}</p>
        <button class="learn-more-btn" data-book-id="${_id}">Learn More</button>    
        </li>
        `;
    })
    .join('');
}

function updateCounter() {
booksCounter.innerHTML = `Showing ${Math.min(visibleCount, allBooks.length)} of ${allBooks.length}`;
}
function checkVisibilityButton() {
if (visibleCount >= allBooks.length) {
    showMoreBtn.classList.add('visually-hidden');
} else {
    showMoreBtn.classList.remove('visually-hidden');
}
}

showMoreBtn.addEventListener('click', () => {
    booksLoaderTwo.classList.remove('visually-hidden');
    showMoreBtn.disabled = true;
    visibleCount += booksPerPage;
    visibleCount = Math.min(visibleCount, allBooks.length);
    renderBooks();
    updateCounter();
    checkVisibilityButton();
    showMoreBtn.disabled = false;
    booksLoaderTwo.classList.add('visually-hidden');
});

dropdownMenu.addEventListener('click', handleClickOnDropdown);
async function handleClickOnDropdown(event) {
  const elementLi = event.target.closest('li');
  if (!elementLi) {
    return;
  }
  const allItems = dropdownMenu.querySelectorAll('li');
  allItems.forEach(item => item.classList.remove('is-active'));

  elementLi.classList.add('is-active');

    const selectedCategory = elementLi.dataset.value;
    dropdownBtnText.textContent = elementLi.textContent;
    try {
        await loadBooksByCategory(selectedCategory);
        window.scrollTo({
            top: bookList.offsetTop - 20,
            behavior: 'smooth'
        });
    } catch (error) {
        console.log(error.message);
        iziToast.show({
            message: error.message,
            position: 'topRight',
            messageColor: 'white',
            backgroundColor: 'red',
        });
    }
    if (window.innerWidth < 1440) {
        dropdownMenu.classList.add('visually-hidden');
    }
    
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadCategories();
  await loadBooksByCategory('all');
});


export { bookList, allBooks };
