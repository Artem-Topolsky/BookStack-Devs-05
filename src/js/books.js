import axios from 'axios';
const bookList = document.querySelector(".books-list");
const dropdownMenu = document.querySelector(".books-dropdown-menu");
const booksCounter = document.querySelector(".books-counter");
const showMoreBtn = document.querySelector(".show-more-btn");
const dropdownBtn = document.querySelector(".dropdown-btn");
const emptyMessage = document.querySelector(".empty-message");

const API_TOP = 'https://books-backend.p.goit.global/books/top-books';
const API_CATEGORIES = 'https://books-backend.p.goit.global/books/category-list';
const API_SELECTED_CATEGORY = 'https://books-backend.p.goit.global/books/category?category';


let allBooks = [];
let visibleCount = Math.min(
    window.innerWidth >= 768 ? 24 : 10,
    allBooks.length
  );
const booksPerPage = 4;
dropdownBtn.addEventListener('click', () => {
    dropdownMenu.hidden = !dropdownMenu.hidden;
});

async function loadCategories() {
    try {
        const response = await axios.get(API_CATEGORIES);
        const categories = response.data;

        const allCategoriesItem = document.createElement('li');
        allCategoriesItem.dataset.value = 'all';
        allCategoriesItem.textContent = 'All categories'
        dropdownMenu.appendChild(allCategoriesItem);

        categories.forEach(cat => {
            const menuItem = document.createElement('li');
            menuItem.textContent = cat.list_name;
            menuItem.dataset.value = cat.list_name;
            dropdownMenu.appendChild(menuItem);
        });
     } catch (error) {
    console.log(error.message)
    }
}

async function loadBooksByCategory(category) {
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
            emptyMessage.classList.remove('visually-hidden');
            booksCounter.textContent = '0 books available';
            showMoreBtn.classList.add('visually-hidden');
            return;
          } else {
            emptyMessage.classList.add('visually-hidden');
          }

        visibleCount = visibleCount = Math.min(
            window.innerWidth >= 768 ? 24 : 10,
            allBooks.length
          );

        renderBooks();
        updateCounter();
        checkVisibilityButton();

    } catch (error) {
        console.log(error.message);
    }
}

function renderBooks() {
    bookList.innerHTML = '';
    const booksToShow = allBooks.slice(0, visibleCount);

    bookList.innerHTML = booksToShow.map(({ _id, book_image, title, author, price }) => {
        return ` <li class="book-list-card">
        <img class="books-card-img" src="${book_image}" alt="${title}"/>
        <h4 class="books-card-title">${title}</h4>
        <p class="books-card-price">${Math.floor(price)}</p>
        <p class="books-card-author">${author}</p>
        <button class="learn-more-btn" data-book-id="${_id}">Learn More</button>    
        </li>
        `;
    }).join('');
};
function updateCounter() {
    booksCounter.innerHTML = `Showing ${visibleCount} of ${allBooks.length}`;
};
function checkVisibilityButton() {
    if (visibleCount >= allBooks.length) {
        showMoreBtn.classList.add('visually-hidden')
    } else {
        showMoreBtn.classList.remove('visually-hidden')
    };
};

showMoreBtn.addEventListener('click', () => {
    visibleCount += booksPerPage;
    if (visibleCount >= allBooks.length) {
        visibleCount = allBooks.length;
    }
    renderBooks();
    updateCounter();
    checkVisibilityButton();
  });

dropdownMenu.addEventListener('click', handleClickOnDropdown);
function handleClickOnDropdown(event) {
    const elementLi = event.target.closest('li');
    if (!elementLi) {
        return;
    }
    const selectedCategory = elementLi.dataset.value;
    dropdownBtn.textContent = elementLi.textContent;
    loadBooksByCategory(selectedCategory);
    dropdownMenu.hidden = true;
    
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadCategories();
    await loadBooksByCategory('all');
});
