const bookList = document.querySelector(".books-list");
const categoryList = document.querySelector(".books-category-list");
const booksCounter = document.querySelector(".books-counter");
const showMoreBtn = document.querySelector(".show-more-btn");

const API_TOP = 'https://books-backend.p.goit.global/books/top-books';
const API_CATEGORIES = 'https://books-backend.p.goit.global/books/category-list';
const API_SELECTED_CATEGORY = 'https://books-backend.p.goit.global/books/category?category=selectedCategory';


let allBooks = [];
let visibleCount = window.innerWidth >= 768 ? 24 : 10;
const booksPerPage = 4;

