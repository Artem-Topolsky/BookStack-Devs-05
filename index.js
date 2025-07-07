import{a as w,S as k,i as y,A as H}from"./assets/vendor-Cmnq8gjD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const u=document.querySelector(".books-list"),l=document.querySelector(".books-dropdown-menu"),P=document.querySelector(".books-counter"),m=document.querySelector(".show-more-btn"),f=document.querySelector(".dropdown-btn"),C=document.querySelector(".empty-message"),W=document.querySelector(".dropdown-btn-text"),F="https://books-backend.p.goit.global/books/top-books",R="https://books-backend.p.goit.global/books/category-list",z="https://books-backend.p.goit.global/books/category?category";let d=[],p=Math.min(window.innerWidth>=768?24:10,d.length);const N=4;window.addEventListener("resize",T);window.addEventListener("DOMContentLoaded",T);function T(){window.innerWidth>=1440?(l.classList.remove("visually-hidden"),f.style.display="none"):(l.classList.add("visually-hidden"),f.style.display="block")}f.addEventListener("click",()=>{l.classList.toggle("visually-hidden")});async function Y(){try{const t=(await w.get(R)).data;console.log(t);const n=t.filter(e=>typeof e.list_name=="string"&&e.list_name.trim()!==""),i=document.createElement("li");i.dataset.value="all",i.textContent="All categories",l.appendChild(i),n.forEach(e=>{const s=document.createElement("li");s.textContent=e.list_name,s.dataset.value=e.list_name,l.appendChild(s)})}catch(o){console.log(o.message)}}async function M(o){try{let t=[];if(o==="all"?t=(await w.get(F)).data.flatMap(e=>e.books):t=(await w.get(`${z}=${o}`)).data,d=t,!Array.isArray(t)||t.length===0){u.innerHTML="",u.classList.add("hidden"),C.classList.remove("visually-hidden"),P.textContent="0 books available",m.classList.add("visually-hidden");return}else u.classList.remove("hidden"),C.classList.add("visually-hidden");const n=window.innerWidth>=768?24:10;p=Math.min(n,d.length),$(),A(),x(),window.scrollTo({top:u.offsetTop-20,behavior:"smooth"})}catch(t){console.log(t.message)}}function $(){u.innerHTML="";const o=d.slice(0,p);u.innerHTML=o.map(({_id:t,book_image:n,title:i,author:e,price:s})=>` <li class="book-list-card">
        <img class="books-card-img" src="${n}" alt="${i}"/>
        <h4 class="books-card-title">${i.toLowerCase()}</h4>
        <p class="books-card-price">&#x24;${Math.ceil(s)}</p>
        <p class="books-card-author">${e}</p>
        <button class="learn-more-btn" data-book-id="${t}">Learn More</button>    
        </li>
        `).join("")}function A(){P.innerHTML=`Showing ${Math.min(p,d.length)} of ${d.length}`}function x(){p>=d.length?m.classList.add("visually-hidden"):m.classList.remove("visually-hidden")}m.addEventListener("click",()=>{m.disabled=!0,p+=N,p=Math.min(p,d.length),$(),A(),x(),m.disabled=!1});l.addEventListener("click",j);async function j(o){const t=o.target.closest("li");if(!t)return;l.querySelectorAll("li").forEach(e=>e.classList.remove("is-active")),t.classList.add("is-active");const i=t.dataset.value;W.textContent=t.textContent;try{await M(i)}catch(e){console.log(e.message)}window.innerWidth<1440&&l.classList.add("visually-hidden")}document.addEventListener("DOMContentLoaded",async()=>{await Y(),await M("all")});new k(".events-swiper",{slidesPerView:1,spaceBetween:24,loop:!1,autoHeight:!1,observer:!0,observeParents:!0,watchSlidesProgress:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}});new k(".feedback-swiper",{slidesPerView:1,spaceBetween:24,loop:!1,autoHeight:!1,observer:!0,observeParents:!0,watchSlidesProgress:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}});const G=document.querySelector(".footer-subscribe-form"),U=document.getElementById("footer-email-subscribe"),S=document.querySelector(".footer-signup-btn");document.querySelector(".footer-required-note");G.addEventListener("submit",function(o){o.preventDefault(),y.success({title:"Success",message:"Email format is correct",position:"bottomRight",timeout:3e3,backgroundColor:"#ffffff"}),U.value="",S.disabled=!0,S.classList.add("disabled")});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".burger-menu"),t=document.querySelector(".close-navbar-btn"),n=document.querySelector(".navbar-overlay"),i=document.querySelectorAll(".navbar-list a"),e=document.querySelector(".header");let s=0;window.addEventListener("scroll",()=>{const r=window.scrollY||document.documentElement.scrollTop;r>s?e.classList.add("header--hidden"):e.classList.remove("header--hidden"),s=r<=0?0:r}),o.addEventListener("click",()=>{n.classList.add("active"),document.body.classList.add("no-scroll")}),t.addEventListener("click",()=>{n.classList.remove("active"),document.body.classList.remove("no-scroll")}),i.forEach(r=>{r.addEventListener("click",c=>{c.preventDefault();const h=r.getAttribute("href").slice(1),v=document.getElementById(h);v&&v.scrollIntoView({behavior:"smooth"}),n.classList.remove("active"),document.body.classList.remove("no-scroll")})}),window.addEventListener("resize",()=>{window.innerWidth>=768&&n.classList.contains("active")&&(n.classList.remove("active"),document.body.classList.remove("no-scroll"))})});new k(".hero-swiper",{slidesPerView:1,loop:!1,autoHeight:!1,observer:!0,observeParents:!0,watchSlidesProgress:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".hero-swiper-button-next",prevEl:".hero-swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:1},1440:{slidesPerView:1}}});u.addEventListener("click",K);const q=document.querySelector(".container-modal-window");function K(o){if(!o.target.classList.contains("learn-more-btn"))return;const t=o.target.dataset.bookId;console.log("ID книги:",t),J(t)}function J(o){const t=d.find(n=>n._id===o);if(!t){console.warn("Книгу не знайдено!");return}Q(t),updateTotalPrice()}function Q({author:o,book_image:t,title:n,price:i,description:e}){q.innerHTML=`
    <div class="modal-backdrop container" id="modalBackdrop">
      <div class="modal" id="bookModal">
        <button class="modal-close" id="modalCloseBtn">
          <svg class="modal-close-icon" width="14" height="14">
            <use href="/img/sprite.svg#icon-close"></use>
          </svg>
        </button>

        <div class="modal-content-all">
          <div class="modal-content-image">
            <img id="bookImage" src="${t}" alt="${n}" />
          </div>
          <div class="modal-content">
            <h2 class="book-title" id="bookTitle">${n}</h2>
            <p class="book-author" id="bookAuthor">${o}</p>
            <p class="book-price" id="bookPrice">$${i}</p>
            <p class="book-total" id="bookTotalPrice">Total: $${i}</p>


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
  
    <div class="ac">
    <h2 class="ac-header">
      <button class="ac-trigger">
        <span>Description</span>
        <span class="trigger-down">
          <svg width="20" height="14">
            <use href='/img/sprite.svg#icon-arrow-down'></use>
          </svg>
        </span>
        <span class="trigger-up hidden">
          <svg width="20" height="14">
            <use href='/img/sprite.svg#icon-arrow-up'></use>
          </svg>
        </span>
      </button>
    </h2>
    <div class="ac-panel">
      <p>${e}</p>
    </div>
  </div>

    <div class="ac">
    <h2 class="ac-header">
      <button class="ac-trigger">
        <span>Shipping</span>
        <span class="trigger-down">
          <svg width="20" height="14">
            <use href='/img/sprite.svg#icon-arrow-down'></use>
          </svg>
        </span>
        <span class="trigger-up hidden">
          <svg width="20" height="14">
            <use href='/img/sprite.svg#icon-arrow-up'></use>
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
            <use href='/img/sprite.svg#icon-arrow-down'></use>
          </svg>
        </span>
        <span class="trigger-up hidden">
          <svg width="20" height="14">
            <use href='/img/sprite.svg#icon-arrow-up'></use>
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
  `;const s=document.getElementById("modalBackdrop");document.getElementById("bookModal");const r=document.getElementById("modalCloseBtn"),c=document.getElementById("quantity"),h=document.getElementById("increase"),v=document.getElementById("decrease"),O=document.getElementById("addToCart"),V=document.getElementById("buyForm");document.getElementById("message"),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",new H("#accordionContainer",{duration:300,showMultiple:!1,openOnInit:[]});const L=q.querySelectorAll(".ac-trigger");L.forEach(a=>{a.addEventListener("click",()=>{setTimeout(()=>{L.forEach(g=>{const _=g.closest(".ac"),B=g.querySelector(".trigger-up"),I=g.querySelector(".trigger-down");_.classList.contains("is-active")?(B.classList.remove("hidden"),I.classList.add("hidden")):(B.classList.add("hidden"),I.classList.remove("hidden"))})},10)})}),r.addEventListener("click",b),s.addEventListener("click",a=>{a.target===s&&b()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&b()},{once:!0}),h.addEventListener("click",()=>{c.value=parseInt(c.value)+1,E()}),v.addEventListener("click",()=>{const a=parseInt(c.value);a>1&&(c.value=a-1,E())}),O.addEventListener("click",()=>{const a=parseInt(c.value)||1;y.show({title:"У кошику: ",message:`Додано до кошика: ${a} книг(и)`,position:"topCenter"})}),V.addEventListener("submit",a=>{a.preventDefault(),y.show({title:"Покупка: ",message:"Дякуємо за покупку!",position:"topCenter"})});const D=document.getElementById("bookTotalPrice");function E(){const a=parseInt(c.value)||1,g=i*a;D.textContent=`Total: $${g.toFixed(2)}`}}function b(){document.getElementById("modalBackdrop").classList.add("hidden"),document.body.style.overflow="",document.documentElement.style.overflow=""}document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("back-to-top");window.addEventListener("scroll",()=>{o.style.display=window.scrollY>300?"block":"none"}),o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=index.js.map
