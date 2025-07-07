import{a as f,S as k,i as y,A as _}from"./assets/vendor-Cmnq8gjD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const v=document.querySelector(".books-list"),p=document.querySelector(".books-dropdown-menu"),M=document.querySelector(".books-counter"),h=document.querySelector(".show-more-btn"),L=document.querySelector(".dropdown-btn"),I=document.querySelector(".empty-message"),W=document.querySelector(".dropdown-btn-text"),F="https://books-backend.p.goit.global/books/top-books",N="https://books-backend.p.goit.global/books/category-list",R="https://books-backend.p.goit.global/books/category?category";let m=[],g=Math.min(window.innerWidth>=768?24:10,m.length);const Y=4;window.addEventListener("resize",x);window.addEventListener("DOMContentLoaded",x);function x(){window.innerWidth>=1440?(p.classList.remove("visually-hidden"),L.style.display="none"):(p.classList.add("visually-hidden"),L.style.display="block")}L.addEventListener("click",()=>{p.classList.toggle("visually-hidden")});async function z(){try{const t=(await f.get(N)).data;console.log(t);const n=t.filter(o=>typeof o.list_name=="string"&&o.list_name.trim()!==""),r=document.createElement("li");r.dataset.value="all",r.textContent="All categories",p.appendChild(r),n.forEach(o=>{const s=document.createElement("li");s.textContent=o.list_name,s.dataset.value=o.list_name,p.appendChild(s)})}catch(e){console.log(e.message)}}async function $(e){try{let t=[];if(e==="all"?t=(await f.get(F)).data.flatMap(o=>o.books):t=(await f.get(`${R}=${e}`)).data,m=t,!Array.isArray(t)||t.length===0){v.innerHTML="",v.classList.add("hidden"),I.classList.remove("visually-hidden"),M.textContent="0 books available",h.classList.add("visually-hidden");return}else v.classList.remove("hidden"),I.classList.add("visually-hidden");const n=window.innerWidth>=768?24:10;g=Math.min(n,m.length),A(),O(),V(),window.scrollTo({top:v.offsetTop-20,behavior:"smooth"})}catch(t){console.log(t.message)}}function A(){v.innerHTML="";const e=m.slice(0,g);v.innerHTML=e.map(({_id:t,book_image:n,title:r,author:o,price:s})=>` <li class="book-list-card">
        <img class="books-card-img" src="${n}" alt="${r}"/>
        <h4 class="books-card-title">${r.toLowerCase()}</h4>
        <p class="books-card-price">&#x24;${Math.ceil(s)}</p>
        <p class="books-card-author">${o}</p>
        <button class="learn-more-btn" data-book-id="${t}">Learn More</button>    
        </li>
        `).join("")}function O(){M.innerHTML=`Showing ${Math.min(g,m.length)} of ${m.length}`}function V(){g>=m.length?h.classList.add("visually-hidden"):h.classList.remove("visually-hidden")}h.addEventListener("click",()=>{h.disabled=!0,g+=Y,g=Math.min(g,m.length),A(),O(),V(),h.disabled=!1});p.addEventListener("click",j);async function j(e){const t=e.target.closest("li");if(!t)return;p.querySelectorAll("li").forEach(o=>o.classList.remove("is-active")),t.classList.add("is-active");const r=t.dataset.value;W.textContent=t.textContent;try{await $(r)}catch(o){console.log(o.message)}window.innerWidth<1440&&p.classList.add("visually-hidden")}document.addEventListener("DOMContentLoaded",async()=>{await z(),await $("all")});new k(".events-swiper",{slidesPerView:1,spaceBetween:24,loop:!1,autoHeight:!1,observer:!0,observeParents:!0,watchSlidesProgress:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}});new k(".feedback-swiper",{slidesPerView:1,spaceBetween:24,loop:!1,autoHeight:!1,observer:!0,observeParents:!0,watchSlidesProgress:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}});const G=document.querySelector(".footer-subscribe-form"),U=document.getElementById("footer-email-subscribe"),T=document.querySelector(".footer-signup-btn");document.querySelector(".footer-required-note");G.addEventListener("submit",function(e){e.preventDefault(),y.success({title:"Success",message:"Email format is correct",position:"bottomRight",timeout:3e3,backgroundColor:"#ffffff"}),U.value="",T.disabled=!0,T.classList.add("disabled")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".burger-menu"),t=document.querySelector(".close-navbar-btn"),n=document.querySelector(".navbar-overlay"),r=document.querySelectorAll(".navbar-list a"),o=document.querySelector(".header");let s=0;window.addEventListener("scroll",()=>{const c=window.scrollY||document.documentElement.scrollTop;c>s?o.classList.add("header--hidden"):o.classList.remove("header--hidden"),s=c<=0?0:c}),e.addEventListener("click",()=>{n.classList.add("active"),document.body.classList.add("no-scroll")}),t.addEventListener("click",()=>{n.classList.remove("active"),document.body.classList.remove("no-scroll")}),r.forEach(c=>{c.addEventListener("click",a=>{a.preventDefault();const d=c.getAttribute("href").slice(1),i=document.getElementById(d);i&&i.scrollIntoView({behavior:"smooth"}),n.classList.remove("active"),document.body.classList.remove("no-scroll")})}),window.addEventListener("resize",()=>{window.innerWidth>=768&&n.classList.contains("active")&&(n.classList.remove("active"),document.body.classList.remove("no-scroll"))})});new k(".hero-swiper",{slidesPerView:1,loop:!1,autoHeight:!1,observer:!0,observeParents:!0,watchSlidesProgress:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".hero-swiper-button-next",prevEl:".hero-swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:1},1440:{slidesPerView:1}}});v.addEventListener("click",K);const P=document.querySelector(".container-modal-window");function K(e){if(!e.target.classList.contains("learn-more-btn"))return;const t=e.target.dataset.bookId;console.log("ID книги:",t),Q(t)}function J(){document.getElementById("svgSpriteContainer")||fetch("/img/sprite.svg").then(e=>e.text()).then(e=>{const t=document.createElement("div");t.id="svgSpriteContainer",t.style.display="none",t.innerHTML=e,document.body.insertBefore(t,document.body.firstChild)}).catch(e=>console.error("❌ Не вдалося завантажити SVG спрайт:",e))}function Q(e){J();const t=m.find(n=>n._id===e);if(!t){console.warn("Книгу не знайдено!");return}X(t),updateTotalPrice()}function X({author:e,book_image:t,title:n,price:r,description:o}){P.innerHTML=`
    <div class="modal-backdrop container" id="modalBackdrop">
      <div class="modal" id="bookModal">
        <button class="modal-close" id="modalCloseBtn">
          <svg class="modal-close-icon" width="14" height="14">
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>

        <div class="modal-content-all">
          <div class="modal-content-image">
            <img id="bookImage" src="${t}" alt="${n}" />
          </div>
          <div class="modal-content">
            <h2 class="book-title" id="bookTitle">${n}</h2>
            <p class="book-author" id="bookAuthor">${e}</p>
            <p class="book-price" id="bookPrice">$${r}</p>
            <p class="book-total" id="bookTotalPrice">Total: $${r}</p>


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
      <p>${o}</p>
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
  `;const s=document.getElementById("modalBackdrop");document.getElementById("bookModal");const c=document.getElementById("modalCloseBtn"),a=document.getElementById("quantity"),d=document.getElementById("increase"),i=document.getElementById("decrease"),E=document.getElementById("addToCart"),u=document.getElementById("buyForm");document.getElementById("message"),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",new _("#accordionContainer",{duration:300,showMultiple:!1,openOnInit:[]});const S=P.querySelectorAll(".ac-trigger");S.forEach(l=>{l.addEventListener("click",()=>{setTimeout(()=>{S.forEach(b=>{const H=b.closest(".ac"),B=b.querySelector(".trigger-up"),q=b.querySelector(".trigger-down");H.classList.contains("is-active")?(B.classList.remove("hidden"),q.classList.add("hidden")):(B.classList.add("hidden"),q.classList.remove("hidden"))})},10)})}),c.addEventListener("click",w),s.addEventListener("click",l=>{l.target===s&&w()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&w()},{once:!0}),d.addEventListener("click",()=>{a.value=parseInt(a.value)+1,C()}),i.addEventListener("click",()=>{const l=parseInt(a.value);l>1&&(a.value=l-1,C())}),E.addEventListener("click",()=>{const l=parseInt(a.value)||1;y.show({title:"У кошику: ",message:`Додано до кошика: ${l} книг(и)`,position:"topCenter"})}),u.addEventListener("submit",l=>{l.preventDefault(),y.show({title:"Покупка: ",message:"Дякуємо за покупку!",position:"topCenter"})});const D=document.getElementById("bookTotalPrice");function C(){const l=parseInt(a.value)||1,b=r*l;D.textContent=`Total: $${b.toFixed(2)}`}}function w(){document.getElementById("modalBackdrop").classList.add("hidden"),document.body.style.overflow="",document.documentElement.style.overflow=""}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("back-to-top");window.addEventListener("scroll",()=>{e.style.display=window.scrollY>300?"block":"none"}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".modal-overlay.register-modal"),t=document.querySelector(".register-modal-close"),n=document.querySelector(".register-form"),r=n.querySelectorAll("input, textarea"),o=document.querySelector(".modal-event-title");document.querySelectorAll(".events-button").forEach(a=>{a.addEventListener("click",()=>{const i=a.closest(".swiper-slide").querySelector(".events-name").textContent.trim();o.textContent=i,e.style.display="flex",requestAnimationFrame(()=>{e.classList.add("show")}),document.body.classList.add("body-no-scroll")})}),t.addEventListener("click",c);function c(){e.classList.remove("show"),e.classList.add("hide"),setTimeout(()=>{e.style.display="none",e.classList.remove("hide"),document.body.classList.remove("body-no-scroll")},300)}n.addEventListener("submit",a=>{a.preventDefault();let d=!0;if(r.forEach(i=>{const u=i.closest(".register-label").querySelector(".error-notification");i.classList.remove("error"),u.classList.remove("show"),i.value.trim()?i.type==="email"&&!i.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)&&(i.classList.add("error"),u.textContent="Enter a valid email",u.classList.add("show"),d=!1):(i.classList.add("error"),i.name==="name"?u.textContent="Enter your name":i.name==="email"?u.textContent="Enter your email":i.name==="message"&&(u.textContent="Enter your message"),u.classList.add("show"),d=!1)}),d){const i=o.textContent;y.success({title:"Success",message:`You have successfully registered for ${i}`,position:"topRight",class:"custom-toast"}),n.reset(),c()}}),r.forEach(a=>{a.addEventListener("input",()=>{const i=a.closest(".register-label").querySelector(".error-notification");a.value.trim()&&(a.classList.remove("error"),i.classList.remove("show"))})})});
//# sourceMappingURL=index.js.map
