import axios from 'axios';
const bookList = document.querySelector(".books-list");
const dropdownMenu = document.querySelector(".books-dropdown-menu");
const booksCounter = document.querySelector(".books-counter");
const showMoreBtn = document.querySelector(".show-more-btn");
const dropdownBtn = document.querySelector(".dropdown-btn");
const emptyMessage = document.querySelector(".empty-message");
const dropdownBtnText = document.querySelector(".dropdown-btn-text");

const API_TOP = 'https://books-backend.p.goit.global/books/top-books';
const API_CATEGORIES = 'https://books-backend.p.goit.global/books/category-list';
const API_SELECTED_CATEGORY = 'https://books-backend.p.goit.global/books/category?category';


let allBooks = [];
let visibleCount = Math.min(
    window.innerWidth >= 768 ? 24 : 10,
    allBooks.length
);
const booksPerPage = 4;
window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize)
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
        console.log(categories);

        const validCategories = categories.filter(cat => typeof cat.list_name === 'string' && cat.list_name.trim() !== '');

        const allCategoriesItem = document.createElement('li');
        allCategoriesItem.dataset.value = 'all';
        allCategoriesItem.textContent = 'All categories'
        dropdownMenu.appendChild(allCategoriesItem);

        validCategories.forEach(cat => {
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
            // console.log(books);
        } else {
            const response = await axios.get(`${API_SELECTED_CATEGORY}=${category}`);
            books = response.data;
        }

        allBooks = books;
        if (!Array.isArray(books) || books.length === 0) {
            bookList.innerHTML = '';
            bookList.style.display = 'none';
            emptyMessage.classList.remove('visually-hidden');
            booksCounter.textContent = '0 books available';
            showMoreBtn.classList.add('visually-hidden');
            return;
        } else {
            bookList.style.display = 'grid';
            emptyMessage.classList.add('visually-hidden');
        }

        const baseCount = window.innerWidth >= 768 ? 24 : 10;
        visibleCount = Math.min(baseCount, allBooks.length);

        renderBooks();
        updateCounter();
        checkVisibilityButton();
        window.scrollTo({
            top: bookList.offsetTop - 20,
            behavior: 'smooth'
        });

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
        <h4 class="books-card-title">${title.toLowerCase()}</h4>
        <p class="books-card-price">&#x24;${Math.ceil(price)}</p>
        <p class="books-card-author">${author}</p>
        <button class="learn-more-btn" data-book-id="${_id}">Learn More</button>    
        </li>
        `;
    }).join('');
};

function updateCounter() {
    booksCounter.innerHTML = `Showing ${Math.min(visibleCount, allBooks.length)} of ${allBooks.length}`;
};
function checkVisibilityButton() {
    if (visibleCount >= allBooks.length) {
        showMoreBtn.classList.add('visually-hidden')
    } else {
        showMoreBtn.classList.remove('visually-hidden')
    };
};

showMoreBtn.addEventListener('click', () => {
    showMoreBtn.disabled = true;
    visibleCount += booksPerPage;
    visibleCount = Math.min(visibleCount, allBooks.length);
    renderBooks();
    updateCounter();
    checkVisibilityButton();
    showMoreBtn.disabled = false;
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
    } catch (error) {
        console.log(error.message)
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
