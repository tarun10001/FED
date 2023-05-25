const menu = document.querySelector(".nav-left__menu");
const close = document.querySelector(".close");
const sidemenu = document.querySelector(".sidemenu");
const menuDropdown = document.querySelector("#menu-dropdown");
const overviewOuter = document.querySelector(".overview__outer");
const magnifyingGlass = document.querySelector('.fa-magnifying-glass');
const search = document.querySelector('.search');
const closeSearchbar = document.querySelector('.close_search-bar');
const searchInput = document.querySelector('#search_input');


menu.addEventListener('click', () => {
    sidemenu.style.display = 'block';
})

close.addEventListener("click", () => {
  sidemenu.style.display = "none";
});


menuDropdown.addEventListener('click', () => {
  overviewOuter.classList.toggle('show');
});

magnifyingGlass.addEventListener('click', () => {
  search.classList.toggle('show');
  searchInput.focus();

})

closeSearchbar.addEventListener('click', () => {
  search.classList.toggle('show');
})


// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });