import{a as v,S as k,i as y,A as P}from"./assets/vendor-Cmnq8gjD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const p=document.querySelector(".books-list"),u=document.querySelector(".books-dropdown-menu"),L=document.querySelector(".books-counter"),b=document.querySelector(".show-more-btn"),E=document.querySelector(".dropdown-btn"),f=document.querySelector(".empty-message"),T="https://books-backend.p.goit.global/books/top-books",$="https://books-backend.p.goit.global/books/category-list",A="https://books-backend.p.goit.global/books/category?category";let c=[],d=Math.min(window.innerWidth>=768?24:10,c.length);const O=4;E.addEventListener("click",()=>{u.hidden=!u.hidden});async function x(){try{const e=(await v.get($)).data,n=document.createElement("li");n.dataset.value="all",n.textContent="All categories",u.appendChild(n),e.forEach(i=>{const t=document.createElement("li");t.textContent=i.list_name,t.dataset.value=i.list_name,u.appendChild(t)})}catch(o){console.log(o.message)}}async function B(o){try{let e=[];if(o==="all"?e=(await v.get(T)).data.flatMap(i=>i.books):e=(await v.get(`${A}=${o}`)).data,c=e,!Array.isArray(e)||e.length===0){p.innerHTML="",f.classList.remove("visually-hidden"),L.textContent="0 books available",b.classList.add("visually-hidden");return}else f.classList.add("visually-hidden");d=d=Math.min(window.innerWidth>=768?24:10,c.length),I(),S(),C()}catch(e){console.log(e.message)}}function I(){p.innerHTML="";const o=c.slice(0,d);p.innerHTML=o.map(({_id:e,book_image:n,title:i,author:t,price:s})=>` <li class="book-list-card">
        <img class="books-card-img" src="${n}" alt="${i}"/>
        <h4 class="books-card-title">${i}</h4>
        <p class="books-card-price">${Math.floor(s)}</p>
        <p class="books-card-author">${t}</p>
        <button class="learn-more-btn" data-book-id="${e}">Learn More</button>    
        </li>
        `).join("")}function S(){L.innerHTML=`Showing ${d} of ${c.length}`}function C(){d>=c.length?b.classList.add("visually-hidden"):b.classList.remove("visually-hidden")}b.addEventListener("click",()=>{d+=O,d>=c.length&&(d=c.length),I(),S(),C()});u.addEventListener("click",D);function D(o){const e=o.target.closest("li");if(!e)return;const n=e.dataset.value;E.textContent=e.textContent,B(n),u.hidden=!0}document.addEventListener("DOMContentLoaded",async()=>{await x(),await B("all")});new k(".events-swiper",{slidesPerView:1,spaceBetween:24,loop:!1,autoHeight:!1,observer:!0,observeParents:!0,watchSlidesProgress:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}});new k(".feedback-swiper",{slidesPerView:1,spaceBetween:24,loop:!1,autoHeight:!1,observer:!0,observeParents:!0,watchSlidesProgress:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}});const V=document.querySelector(".footer-subscribe-form"),H=document.getElementById("footer-email-subscribe"),w=document.querySelector(".footer-signup-btn");document.querySelector(".footer-required-note");V.addEventListener("submit",function(o){o.preventDefault(),y.success({title:"Success",message:"Email format is correct",position:"bottomRight",timeout:3e3,backgroundColor:"#ffffff"}),H.value="",w.disabled=!0,w.classList.add("disabled")});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".burger-menu"),e=document.querySelector(".close-navbar-btn"),n=document.querySelector(".navbar-overlay"),i=document.querySelectorAll(".navbar-list a"),t=document.querySelector(".header");let s=0;window.addEventListener("scroll",()=>{const a=window.scrollY||document.documentElement.scrollTop;a>s?t.classList.add("header--hidden"):t.classList.remove("header--hidden"),s=a<=0?0:a}),o.addEventListener("click",()=>{n.classList.add("active"),document.body.classList.add("no-scroll")}),e.addEventListener("click",()=>{n.classList.remove("active"),document.body.classList.remove("no-scroll")}),i.forEach(a=>{a.addEventListener("click",l=>{l.preventDefault();const g=a.getAttribute("href").slice(1),m=document.getElementById(g);m&&m.scrollIntoView({behavior:"smooth"}),n.classList.remove("active"),document.body.classList.remove("no-scroll")})}),window.addEventListener("resize",()=>{window.innerWidth>=768&&n.classList.contains("active")&&(n.classList.remove("active"),document.body.classList.remove("no-scroll"))})});p.addEventListener("click",_);const R=document.querySelector(".container-modal-window");function _(o){if(!o.target.classList.contains("learn-more-btn"))return;const e=o.target.dataset.bookId;console.log("ID книги:",e),document.body.style.overflow="hidden",W(e)}function W(o){const e=c.find(n=>n._id===o);if(!e){console.warn("Книгу не знайдено!");return}F(e)}function F({author:o,book_image:e,title:n,price:i,description:t}){R.innerHTML=`
    <div class="modal-backdrop container" id="modalBackdrop">
      <div class="modal" id="bookModal">
        <button class="modal-close" id="modalCloseBtn">
          <svg class="modal-close-icon" width="14" height="14">
            <use href="/img/sprite.svg#icon-close"></use>
          </svg>
        </button>

        <div class="modal-content-all">
          <div class="modal-content-image">
            <img id="bookImage" src="${e}" alt="${n}" />
          </div>
          <div class="modal-content">
            <h2 class="book-title" id="bookTitle">${n}</h2>
            <p class="book-author" id="bookAuthor">${o}</p>
            <p class="book-price" id="bookPrice">$${i}</p>

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


                  <div class="accordion-item ac" id="ac-0">
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
                  <div class="accordion-body ac-panel" id="bookDetails"><p>${t}</p></div>
              </div>



<div class="accordion-item ac" id="ac-1">
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
    <div class="accordion-body ac-panel" id="bookShipping">
        <p>
            We ship across the United States within 2–5 business days.
             All orders are processed through USPS or a reliable courier
            service. Enjoy free standard shipping on orders over $50.
        </p>
    </div>
</div>
              
             
              
<div class="accordion-item ac" id="ac-2">
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

    <div class="accordion-body ac-panel" id="bookReturns">
        <p>You can return an item within 14 days of receiving your order, 
        provided it hasn’t been used and is in its original
        condition. To start a return, please contact our support team 
        — we’ll guide you through the process quickly and
        hassle-free.</p>
    </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  `;const s=document.getElementById("modalBackdrop");document.getElementById("bookModal");const a=document.getElementById("modalCloseBtn"),l=document.getElementById("quantity"),g=document.getElementById("increase"),m=document.getElementById("decrease"),q=document.getElementById("addToCart"),M=document.getElementById("buyForm");document.getElementById("message"),a.addEventListener("click",h),s.addEventListener("click",r=>{r.target===s&&h()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&h()},{once:!0}),g.addEventListener("click",()=>{l.value=parseInt(l.value)+1}),m.addEventListener("click",()=>{const r=parseInt(l.value);r>1&&(l.value=r-1)}),q.addEventListener("click",()=>{const r=parseInt(l.value)||1;y.show({title:"У кошику: ",message:`Додано до кошика: ${r} книг(и)`,position:"topRight"})}),M.addEventListener("submit",r=>{r.preventDefault(),y.show({title:"Покупка: ",message:"Дякуємо за покупку!",position:"topRight"})}),new P("#accordionContainer")}function h(){document.getElementById("modalBackdrop").classList.add("hidden"),document.body.style.overflow=""}document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("back-to-top");window.addEventListener("scroll",()=>{o.style.display=window.scrollY>300?"block":"none"}),o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=index.js.map
